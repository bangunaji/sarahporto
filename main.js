// Smooth reveal on scroll using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add revealing class to elements
document.querySelectorAll('.skill-card, .project-card, .section-title, .about-text').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Custom Cursor (optional but very Gen Z)
const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .skill-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Add CSS for reveal animation dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
    .cursor {
        width: 20px;
        height: 20px;
        background: var(--accent-lime);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s;
        transform: translate(-50%, -50%);
    }
    .cursor.hover {
        transform: translate(-50%, -50%) scale(3);
        background: white;
    }
    @media (max-width: 768px) {
        .cursor { display: none; }
    }
`;
document.head.appendChild(style);

// Simple log to show it's alive
console.log("Sarah's Portfolio: The vibe is check. 🚀");
