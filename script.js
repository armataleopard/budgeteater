// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    initGlitchEffect();
    initExcelCells();
    initMoneyParticles();
    initBurningDocuments();
    initExcelGame();
    initTenderCards();
});

// Glitch effect for the title
function initGlitchEffect() {
    const glitchTitle = document.querySelector('.glitch-title');
    
    if (!glitchTitle) return;
    
    // Add hover effect
    glitchTitle.addEventListener('mouseover', function() {
        gsap.to(glitchTitle, {
            skewX: "random(-5, 5)",
            skewY: "random(-5, 5)",
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: function() {
                gsap.to(glitchTitle, {
                    skewX: 0,
                    skewY: 0,
                    duration: 0.5
                });
            }
        });
    });
}

// Create floating Excel cells in the background
function initExcelCells() {
    const excelCellsContainer = document.querySelector('.excel-cells');
    
    if (!excelCellsContainer) return;
    
    // Create 15 excel cells
    for (let i = 0; i < 15; i++) {
        const cell = document.createElement('div');
        cell.className = 'floating-cell';
        cell.style.position = 'absolute';
        cell.style.width = Math.random() * 100 + 50 + 'px';
        cell.style.height = Math.random() * 60 + 30 + 'px';
        cell.style.backgroundColor = 'rgba(29, 111, 66, ' + (Math.random() * 0.2 + 0.1) + ')';
        cell.style.border = '1px solid rgba(255, 255, 255, 0.3)';
        cell.style.borderRadius = '3px';
        cell.style.left = Math.random() * 100 + '%';
        cell.style.top = Math.random() * 100 + '%';
        cell.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';
        excelCellsContainer.appendChild(cell);
        
        // Animate each cell
        gsap.to(cell, {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            rotation: "random(-40, 40)",
            duration: "random(10, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 5
        });
        
        // Add occasional sparkle effect
        setInterval(() => {
            if (Math.random() > 0.7) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.position = 'absolute';
                sparkle.style.width = '5px';
                sparkle.style.height = '5px';
                sparkle.style.backgroundColor = '#ffd700';
                sparkle.style.borderRadius = '50%';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                cell.appendChild(sparkle);
                
                gsap.to(sparkle, {
                    scale: 0,
                    opacity: 0,
                    duration: 1,
                    onComplete: () => sparkle.remove()
                });
            }
        }, 2000);
    }
}

// Create money particles effect
function initMoneyParticles() {
    const particlesContainer = document.querySelector('.money-particles');
    
    if (!particlesContainer) return;
    
    // Create 30 money particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'money-particle';
        particle.innerHTML = '$';
        particle.style.position = 'absolute';
        particle.style.color = '#ffd700';
        particle.style.fontSize = Math.random() * 20 + 10 + 'px';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = -50 + 'px';
        particlesContainer.appendChild(particle);
        
        // Animate falling money
        gsap.to(particle, {
            y: window.innerHeight + 100,
            x: "random(-100, 100)",
            rotation: "random(-180, 180)",
            duration: "random(5, 15)",
            repeat: -1,
            ease: "power1.in",
            delay: Math.random() * 10
        });
    }
}

// Create burning documents effect
function initBurningDocuments() {
    const burningContainer = document.querySelector('.burning-documents');
    
    if (!burningContainer) return;
    
    // Create 10 burning paper pieces
    for (let i = 0; i < 10; i++) {
        const paper = document.createElement('div');
        paper.className = 'burning-paper';
        paper.style.position = 'absolute';
        paper.style.width = Math.random() * 40 + 20 + 'px';
        paper.style.height = Math.random() * 50 + 30 + 'px';
        paper.style.backgroundColor = '#f5f5f5';
        paper.style.borderRadius = '2px';
        paper.style.left = Math.random() * 100 + '%';
        paper.style.bottom = Math.random() * 20 + '%';
        paper.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';
        burningContainer.appendChild(paper);
        
        // Create fire effect
        const fire = document.createElement('div');
        fire.className = 'fire';
        fire.style.position = 'absolute';
        fire.style.width = '100%';
        fire.style.height = '50%';
        fire.style.bottom = '80%';
        fire.style.background = 'linear-gradient(to top, #ff9500, #ff5722)';
        fire.style.borderRadius = '50% 50% 0 0';
        fire.style.filter = 'blur(5px)';
        paper.appendChild(fire);
        
        // Animate fire
        gsap.to(fire, {
            height: "random(40%, 60%)",
            duration: "random(0.5, 1.5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Animate paper floating up
        gsap.to(paper, {
            y: -100,
            opacity: 0,
            rotation: "random(-90, 90)",
            duration: "random(8, 15)",
            repeat: -1,
            ease: "power1.in",
            delay: Math.random() * 5
        });
    }
}

// Initialize the Excel game
function initExcelGame() {
    const excelCells = document.querySelectorAll('.excel-cell:not(.header)');
    const popup = document.querySelector('.popup');
    const closePopupBtn = document.querySelector('.close-popup');
    
    if (!excelCells.length || !popup || !closePopupBtn) return;
    
    // Add click event to each cell
    excelCells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Check if it's a bribe cell
            if (this.classList.contains('bribe')) {
                // Show success animation
                gsap.to(this, {
                    backgroundColor: '#1d6f42',
                    color: 'white',
                    duration: 0.3,
                    yoyo: true,
                    repeat: 3
                });
                
                // Add money found effect
                const money = document.createElement('div');
                money.textContent = 'BRIBE FOUND!';
                money.style.position = 'absolute';
                money.style.top = '50%';
                money.style.left = '50%';
                money.style.transform = 'translate(-50%, -50%)';
                money.style.color = '#ffd700';
                money.style.fontWeight = 'bold';
                money.style.fontSize = '14px';
                money.style.zIndex = '10';
                this.appendChild(money);
                
                gsap.to(money, {
                    y: -30,
                    opacity: 0,
                    duration: 1,
                    onComplete: () => money.remove()
                });
            } else {
                // Show explosion effect
                gsap.to(this, {
                    backgroundColor: '#dc143c',
                    scale: 1.1,
                    duration: 0.2,
                    onComplete: function() {
                        gsap.to(this.targets()[0], {
                            scale: 1,
                            duration: 0.2
                        });
                        
                        // Show popup
                        popup.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Close popup button
    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove('active');
    });
}

// Initialize tender cards
function initTenderCards() {
    const tenderCards = document.querySelectorAll('.tender-card');
    const tenderContainer = document.querySelector('.tender-container');
    const prevArrow = document.querySelector('.tender-nav-arrow.prev');
    const nextArrow = document.querySelector('.tender-nav-arrow.next');
    const dots = document.querySelectorAll('.dot');
    
    if (!tenderCards.length || !tenderContainer) return;
    
    let currentIndex = 0;
    
    // Navigation functionality
    if (prevArrow && nextArrow) {
        // Previous button
        prevArrow.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToCard(currentIndex);
                updateActiveDot(currentIndex);
            }
        });
        
        // Next button
        nextArrow.addEventListener('click', function() {
            if (currentIndex < tenderCards.length - 1) {
                currentIndex++;
                scrollToCard(currentIndex);
                updateActiveDot(currentIndex);
            }
        });
    }
    
    // Dot navigation
    if (dots.length) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentIndex = index;
                scrollToCard(currentIndex);
                updateActiveDot(currentIndex);
            });
        });
    }
    
    // Function to scroll to specific card
    function scrollToCard(index) {
        if (tenderCards[index]) {
            const card = tenderCards[index];
            const containerRect = tenderContainer.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            
            // Calculate scroll position to center the card
            const scrollLeft = card.offsetLeft - (containerRect.width / 2) + (cardRect.width / 2);
            
            // Smooth scroll to position
            tenderContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }
    
    // Function to update active dot
    function updateActiveDot(index) {
        if (dots.length) {
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }
    }
    
    // Monitor scroll to update active dot
    tenderContainer.addEventListener('scroll', function() {
        const containerRect = tenderContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        // Find the card closest to center
        let closestCard = null;
        let closestDistance = Infinity;
        
        tenderCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(containerCenter - cardCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = index;
            }
        });
        
        if (closestCard !== null && closestCard !== currentIndex) {
            currentIndex = closestCard;
            updateActiveDot(currentIndex);
        }
    });
    
    // Center the tender container on desktop
    if (window.innerWidth > 768) {
        const containerWidth = tenderContainer.offsetWidth;
        const cardsWidth = tenderCards.length * (320 + 48); // card width + gap
        
        if (containerWidth > cardsWidth) {
            tenderContainer.style.justifyContent = 'center';
        } else {
            tenderContainer.style.justifyContent = 'flex-start';
        }
    }
    
    // Set initial state with staggered delay
    tenderCards.forEach((card, index) => {
        gsap.set(card, {
            y: 50,
            opacity: 0,
            rotationY: -5,
            rotationX: 5
        });
        
        // Animate in with stagger
        gsap.to(card, {
            y: 0,
            opacity: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 1.2,
            delay: index * 0.15,
            ease: "power3.out"
        });
        
        // Add hover animation
        card.addEventListener('mouseenter', function() {
            const stamp = this.querySelector('.stamp');
            if (stamp) {
                gsap.fromTo(stamp, 
                    { opacity: 0.8, scale: 1.5, rotation: -30 },
                    { opacity: 1, scale: 1, rotation: -15, duration: 0.4, ease: "back.out(1.7)" }
                );
                
                // Play stamp sound
                const stampSound = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAFhpbmcAAAAPAAAAAwAAA3gAkJCQkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMDA8PDw8PDw8PDw8PDw8PDw8PD///////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAeNL7BQnmAAAAAAD/+9DEAAAJcAF19BAAJTJHbj81kQiIAmJGIAAgACE/3+cH4fwfh8Pvy7/4ID/8P/BD//gg/+CD//5cHwfh+H4IAgCAIAgD4Pv/gg/+CD/4Pv/gg/+CD//wQBAEAQPg/D8Pw+CAP/5c/8uD4Pg/8uXB//8uD4Pg/D8P//Lg+D4Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8Pw/D8P//5JkVJUkxUkxUlVTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
                stampSound.volume = 0.3;
                stampSound.play();
            }
            
            // Add subtle hover effect to card
            gsap.to(this, {
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 35px rgba(0,0,0,0.5)",
                duration: 0.4,
                ease: "power2.out"
            });
            
            // Add subtle glow to card border
            const inner = this.querySelector('.tender-inner');
            if (inner) {
                gsap.to(inner, {
                    boxShadow: "0 0 20px rgba(255,215,0,0.3)",
                    duration: 0.4
                });
            }
        });
        
        // Add leave animation
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                scale: 1,
                boxShadow: "0 15px 25px rgba(0,0,0,0.4)",
                duration: 0.5,
                ease: "power2.inOut"
            });
            
            // Remove glow
            const inner = this.querySelector('.tender-inner');
            if (inner) {
                gsap.to(inner, {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    duration: 0.5
                });
            }
        });
    });
    
    // Add parallax effect to tender cards on mouse move
    tenderContainer.addEventListener('mousemove', function(e) {
        const containerRect = tenderContainer.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;
        
        // Calculate mouse position relative to container center
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;
        const moveX = (mouseX - centerX) / 25;
        const moveY = (mouseY - centerY) / 25;
        
        // Apply subtle movement to cards
        tenderCards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2 - containerRect.left;
            const cardCenterY = cardRect.top + cardRect.height / 2 - containerRect.top;
            
            // Calculate distance from mouse to card center
            const distX = mouseX - cardCenterX;
            const distY = mouseY - cardCenterY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            // More effect for closer cards
            const effect = 1 - Math.min(distance / 500, 1);
            
            gsap.to(card.querySelector('.tender-inner'), {
                rotationY: moveX * effect * 0.5,
                rotationX: -moveY * effect * 0.5,
                duration: 1,
                ease: "power1.out"
            });
        });
    });
    
    // Reset cards on mouse leave
    tenderContainer.addEventListener('mouseleave', function() {
        tenderCards.forEach(card => {
            gsap.to(card.querySelector('.tender-inner'), {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: "power1.out"
            });
        });
    });
    
    // Adjust on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const containerWidth = tenderContainer.offsetWidth;
            const cardsWidth = tenderCards.length * (320 + 48); // card width + gap
            
            if (containerWidth > cardsWidth) {
                tenderContainer.style.justifyContent = 'center';
            } else {
                tenderContainer.style.justifyContent = 'flex-start';
            }
        } else {
            tenderContainer.style.justifyContent = 'flex-start';
        }
    });
    
    // Scroll to first card initially
    setTimeout(() => {
        scrollToCard(0);
    }, 500);
}

// Add parallax effect to the hero section based on mouse movement
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gsap.to(hero, {
        backgroundPosition: `${50 + mouseX * 10}% ${50 + mouseY * 10}%`,
        duration: 1
    });
    
    // Also affect floating Excel cells
    const floatingCells = document.querySelectorAll('.floating-cell');
    floatingCells.forEach(cell => {
        gsap.to(cell, {
            x: (mouseX - 0.5) * 20,
            y: (mouseY - 0.5) * 20,
            duration: 1,
            ease: "power1.out"
        });
    });
}); 