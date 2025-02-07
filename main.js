document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('#model');
    let currentX = 0;
    let currentY = 90;
    let targetX = 0;
    let targetY = 90;

    document.addEventListener('mousemove', (e) => {
        // Inverted the X calculation by adding a negative sign
        targetX = -((e.clientX / window.innerWidth) * 90 - 45);
        targetY = 90 - ((e.clientY / window.innerHeight) * 15 - 7.5);
    });

    function animate() {
        // Smooth interpolation
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        // Updated camera distance from 2.5m to 50m
        modelViewer.cameraOrbit = `${currentX}deg ${currentY}deg 50m`;
        requestAnimationFrame(animate);
    }

    animate();

    // Add treasure hunt functionality
    const secret = document.getElementById('secret');
    const modal = document.getElementById('bathroomModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Randomly position the secret element
    function positionSecret() {
        const x = Math.random() * (window.innerWidth - 20);
        const y = Math.random() * (window.innerHeight - 20);
        secret.style.left = x + 'px';
        secret.style.top = y + 'px';
    }
    
    // Position initially and every 10 seconds
    positionSecret();
    setInterval(positionSecret, 10000);
    
    // Handle secret click
    secret.addEventListener('click', () => {
        modal.classList.add('active');
        // Play creepy sound effect
        new Audio('creepy-reveal.mp3').play().catch(e => console.log(e));
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        positionSecret(); // Move secret to new position
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-audio");
    audio.play().catch(error => {
        console.log("Autoplay blocked. Playing on user interaction.");
        document.body.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });
});

