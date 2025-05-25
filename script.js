const carouselInner = document.getElementById('carouselInner');
            const images = [
                { src: '../images 1.png', text: 'Your No. 1 Engineering/Management Firm' },
                { src: '../images/2.png', text: 'Real Estate Advisory and Consultancy' },
                { src: '../images/3.png', text: 'Electrical Engineering' },
                { src: '../images/4.png', text: 'Mechanical Engineering' }
            ];

            let currentIndex = 0;
        

            function createCarouselItem(imageObj, index) {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('carousel-item');
                if (index === 0) {
                    itemDiv.classList.add('active');
                }

                const img = document.createElement('img');
                img.src = imageObj.src;
                img.alt = imageObj.text;

                const textOverlay = document.createElement('div');
                textOverlay.classList.add('carousel-text-overlay');
                const h1 = document.createElement('h1');
                h1.textContent = imageObj.text;
                textOverlay.appendChild(h1);

                itemDiv.appendChild(img);
                itemDiv.appendChild(textOverlay);
                return itemDiv;
            }

            // Populate carousel
            images.forEach((imageObj, index) => {
                carouselInner.appendChild(createCarouselItem(imageObj, index));
            });

            const carouselItems = document.querySelectorAll('.carousel-item');

            function showNextImage() {
                carouselItems[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                carouselItems[currentIndex].classList.add('active');
            }

            // Auto-scroll every 5 seconds
            setInterval(showNextImage, 5000);

       