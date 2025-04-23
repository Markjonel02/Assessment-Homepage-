document.addEventListener('DOMContentLoaded', function () {

    let resetTimeout;
    const imageContainers = document.querySelectorAll('.image-container');
  const dots = document.querySelectorAll('.dot');
    imageContainers.forEach((container, index) => {
        container.addEventListener('mouseenter', () => {
            expandImage(index);
        });

        container.addEventListener('mouseleave', () => {
            resetImages();
        });
    });
 // Handle dot clicks
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    activateImage(index);
                });
            });
            

  function expandImage(activeIndex) {
    clearTimeout(resetTimeout);
    imageContainers.forEach((container, index) => {
        if (index === activeIndex) {
            container.classList.add('expanded');
            container.classList.remove('compact');
        } else {
            container.classList.remove('expanded');
            container.classList.add('compact');
        }
    });
}

function resetImages() {
    resetTimeout = setTimeout(() => {
        imageContainers.forEach(container => {
            container.classList.remove('expanded', 'compact');
        });
    }, 100); // small delay to avoid jumpiness
}

function activateImage(activeIndex) {
                // Update image containers
                imageContainers.forEach((container, index) => {
                    if (index.toString() === activeIndex.toString()) {
                        container.classList.add('expanded');
                        container.classList.remove('compact');
                    } else {
                        container.classList.remove('expanded');
                        container.classList.add('compact');
                    }
                });
                
                // Update active dot
                dots.forEach((dot, index) => {
                    if (index.toString() === activeIndex.toString()) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
});


 