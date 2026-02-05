document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slider-container');
    const wrapper = document.querySelector('.image-before-wrapper');
    const handle = document.querySelector('.slider-handle');
    const beforeImage = document.querySelector('.image-before');
    
    function syncImageWidth() {
        if(container && beforeImage) {
            beforeImage.style.width = `${container.offsetWidth}px`;
        }
    }

    syncImageWidth();
    window.addEventListener('resize', syncImageWidth);

    let isDragging = false;

    // Start Drag
    container.addEventListener('mousedown', () => isDragging = true);
    container.addEventListener('touchstart', () => isDragging = true);

    // Stop Drag
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('touchend', () => isDragging = false);

    // Move Logic
    function move(e) {
        if (!isDragging) return;
        
        let clientX = e.clientX;
        if(e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
        }
        
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;
        
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        
        const percentage = (x / rect.width) * 100;
        
        wrapper.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    }

    container.addEventListener('mousemove', move);
    container.addEventListener('touchmove', move);
});
