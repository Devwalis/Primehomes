/* --------------- D E P O I M E N T O S --------------- */

const slideDelay = 5000;
        const items = document.querySelectorAll('.Box-Rectangle');
        let currentIndex = 0;

        /* console.log(items.length); */

        function updateCarousel() {
            const visibleItems = getVisibleItems();
            const startIndex = currentIndex * visibleItems;
            const endIndex = startIndex + visibleItems;

            for (let i = 0; i < items.length; i++) {
                if (i >= startIndex && i < endIndex) {
                    items[i].style.display = 'inline-block';
                }
                else {
                    items[i].style.display = 'none';
                }
            }

/*             if(window.matchMedia("(max-width: 1800px)").matches){
   
            } */
        }

        function getVisibleItems() {
            const viewportWidth = window.innerWidth;

            /* console.log(viewportWidth); */

            if (viewportWidth <= 980) {
                return 1;
            } else if (viewportWidth <= 1800) {
                return 2;
            } else {
                return 3;
            }
        }

        function moveToNextSlide() {
            currentIndex++;
            if (currentIndex * getVisibleItems() >= items.length) {
                currentIndex = 0;
            }
            updateCarousel();
        }

        function startCarousel() {
            updateCarousel();
            setInterval(moveToNextSlide, slideDelay);
        }

        startCarousel();


