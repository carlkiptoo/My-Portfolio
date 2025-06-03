<template>
    <div class="about-container">
        <div class="about-content">
            <div class="about-text">
                <h1 class="about-title">About Kiptoo Kirui</h1>
                <div class="about-description">
                    <p class="intro">Hi, I am Kiptoo. I am a Frontend Developer and a UI/UX Designer. I am passionate about creating
                        user-friendly and visually appealing websites and applications.</p>
                    <p class="education">I have a Bachelor's degree in Computer Science from the University of Lagos. I have also
                        completed a
                        Master's degree in Computer Science from the University of Lagos.</p>
                </div>
            </div>
            <div class="about-image">
                <div class="image-wrapper">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                        alt="Profile" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    min-height: 4px;
}
.about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 4rem;
    flex-wrap: wrap;
}

.about-text {
    flex: 1;
    min-width: 300ox;
    max-width: 550px;
}
.about-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem;
    line-height: 1.2;
    position: relative;
}
.about-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 4rem;
    height: 0.25rem;
    background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
    border-radius: 2px;
}
.about-description {
    space-y: 1.5rem;
}
.intro {
    font-size: 1.125rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-weight: 500;
}
.education {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 0;
}

.about-text h1 {
    margin-bottom: 1rem;
}

.about-text p {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.about-image {
    flex: 1;
    min-width: 300px;
    max-width: 450px;
    display: flex;
    justify-content: center;
}
.image-wrapper {
    position: relative;
    width: 100%;
    max-width: 350px;
}
.image-wrapper::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: -1rem;
    bottom: -1rem;
    background: linear-gradient(135deg,  #3b82f6, #8b5cf6);
    border-radius: 1rem;
    z-index: -1;
    opacity: 0.1;
}

.about-image img {
    width: 100%;
    height: 400px;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease-in-out;
}
.about-image img:hover {
    transform: translateY(-5px);
}

@media (max-width: 768px) {
    .about-container {
        padding: 3rem 1rem;
        min-height: auto;
    }

    .about-content {
        flex-direction: column;
        gap: 2.5rem;
        text-align: center;
    }
    .about-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    .about-title::after {
        left: 50%;
        transform: translateX(-50%);
    }
    .intro {
        font-size: 1rem;
    }
    .about-image img {
        height: 350px;
    }
}

@media (max-width: 480px) {
    .about-container {
        padding: 2rem 1rem;
    }

    .about-title {
        font-size: 1.75rem;
    }
    .about-image img {
        height: 300px;
    }
    .image-wrapper::before {
        top: 0.5rem;
        left: 0.5rem;
        right: -0.5rem;
        bottom: -0.5rem;
    }
}
</style>