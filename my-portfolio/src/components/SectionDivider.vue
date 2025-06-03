<template>
  <div class="section-divider" :class="dividerClass">
    <div class="divider-content">
      <!-- Simple line divider -->
      <div v-if="type === 'line'" class="line-divider"></div>
      
      <!-- Gradient divider with dots -->
      <div v-else-if="type === 'gradient'" class="gradient-divider">
        <div class="gradient-line"></div>
        <div class="center-dot"></div>
      </div>
      
      <!-- Wave divider -->
      <div v-else-if="type === 'wave'" class="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="wave-svg">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="wave-path"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="wave-path"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="wave-path"></path>
        </svg>
      </div>
      
      <!-- Default: simple gradient line -->
      <div v-else class="simple-gradient"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'gradient', 
    validator: (value) => ['line', 'gradient', 'wave', 'simple'].includes(value)
  },
  spacing: {
    type: String,
    default: 'normal', // 'small', 'normal', 'large'
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  }
})

const dividerClass = computed(() => {
  return `spacing-${props.spacing}`
})
</script>

<style scoped>
.section-divider {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.section-divider.spacing-small {
  padding: 2rem 0;
}

.section-divider.spacing-normal {
  padding: 3rem 0;
}

.section-divider.spacing-large {
  padding: 4rem 0;
}

.divider-content {
  width: 100%;
  max-width: 1200px;
  position: relative;
}


.line-divider {
  height: 1px;
  background-color: #e2e8f0;
  width: 100%;
}

.gradient-divider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-line {
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, #3b82f6 20%, #8b5cf6 50%, #3b82f6 80%, transparent 100%);
  border-radius: 1px;
}

.center-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.wave-divider {
  width: 100%;
  height: 60px;
  position: relative;
}

.wave-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.wave-path {
  fill: #3b82f6;
}

.simple-gradient {
  height: 3px;
  width: 200px;
  margin: 0 auto;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  opacity: 0.8;
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

.gradient-line {
  animation: shimmer 3s ease-in-out infinite;
  background-size: 400px 100%;
}

@media (max-width: 768px) {
  .section-divider.spacing-small {
    padding: 1.5rem 0;
  }

  .section-divider.spacing-normal {
    padding: 2rem 0;
  }

  .section-divider.spacing-large {
    padding: 2.5rem 0;
  }
  
  .wave-divider {
    height: 40px;
  }
  
  .center-dot {
    width: 10px;
    height: 10px;
    border-width: 2px;
  }
  
  .simple-gradient {
    width: 150px;
    height: 2px;
  }
}
</style>