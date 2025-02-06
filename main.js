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
});
