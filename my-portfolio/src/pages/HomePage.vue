<template>
   <div class="home">
    <div class="hero-section">
        <h1 class="greeting">Hello, I am Kiptoo</h1>
        <p class="description">
            I am a Frontend Developer and a UI/UX Designer. I am passionate about creating user-friendly and visually appealing websites and applications.
        </p>
        <button class="btn">Hire Me</button>
    </div>
   </div>
</template>
<script setup>

</script>

<style scoped>
.home {
    min-height: 50rem;
    background-color: #f7f7f7;
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
.btn {
    background-color: #3b82f6;
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);


}
.btn:hover {
    background-color: #1f2937;
    transform: translateY(-1px);
    box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.15);
}

.img:active {
    transform: translateY(0);
}

</style>