<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <img src="../assets/logo.png" alt="logo" class="img">
            </div>
        </div>
    </nav>
</template>

<style scoped>  
.navbar {
    width: 100%;
    background-color: rgb(244, 241, 233);;
    position: sticky;
    top: 1rem;
    z-index: 1000;
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo {
    display: flex;
    align-items: center;
}
.img {
    height: 140px;
    width: auto;
}
@media (max-width: 768px) {
    .navbar-container {
        padding: 0 0.75rem;
        height: 3.5rem;
    }
    .img {
        height: 6rem;
    }
}


</style>