document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.slider-container');
    const beforeWrapper = document.querySelector('.image-before-wrapper');
    const handle = document.querySelector('.slider-handle');
    
    // Check if elements exist (in case you haven't added images yet)
    if(container && beforeWrapper && handle) {
        
        container.addEventListener('mousemove', (e) => {
            let containerWidth = container.offsetWidth;
            let x = e.pageX - container.offsetLeft;
            
            // Boundary checks
            if (x < 0) x = 0;
            if (x > containerWidth) x = containerWidth;
            
            // Move the "Before" image wrapper width
            let percentage = (x / containerWidth) * 100;
            beforeWrapper.style.width = percentage + "%";
            
            // Move the handle
            handle.style.left = percentage + "%";
        });
        
        // Touch support for mobile
        container.addEventListener('touchmove', (e) => {
            let containerWidth = container.offsetWidth;
            let x = e.touches[0].pageX - container.offsetLeft;
            
            if (x < 0) x = 0;
            if (x > containerWidth) x = containerWidth;
            
            let percentage = (x / containerWidth) * 100;
            beforeWrapper.style.width = percentage + "%";
            handle.style.left = percentage + "%";
        });
    }
});
