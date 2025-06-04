<template>
   <div class="home">
    <div class="hero-section">
        <h1 class="greeting">Hello, <span class="name">I am Kiptoo</span></h1>
        <p class="description">
            I am a Software developer. I am passionate about creating user-friendly and visually appealing websites and applications.
        </p>
        <a href="mailto:kiptoocarlos0@gmail.com" class="hire-link">
            <span class="hire-text">Reach Out</span>
            <span class="hire-underline"></span>
        </a>
    </div>
   </div>
</template>
<script setup>

</script>

<style scoped>
.name {
    color: rgb(145, 76, 38);
}
.home {
    min-height: 40rem;
    background-color: rgb(244, 241, 233);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
}
.hero-section {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}
.greeting {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.description {
    font-size: 1.25rem;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.hire-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #1e293b;
    font-style: italic;
    font-family: 'Georgia',serif;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
    cursor: pointer;
}
.hire-link:hover {
    color: #3b82f6;
}
.hire-text {
    position: relative;
    z-index: 2;
}
.hire-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #1e293b);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
}
.hire-link:hover .hire-underline {
    width: 100%;
}

.hire-link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border-radius: 75%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    z-index: 1;
}
.hire-link:hover::before {
    width: 120%;
    height: 200%;
}
.img:active {
    transform: translateY(0);
}
@media (max-width: 768px) {
    .home {
        min-height: 20rem;
        padding: 1.5rem 1rem;
    }
    .greeting {
        font-size: 2.25rem;
        margin-bottom: 1.25rem;
    }
    .description {
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }
    .hire-link {
        font-size: 1.125rem;
    }
}
@media (max-width: 480px) {
  .greeting {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
}


</style>