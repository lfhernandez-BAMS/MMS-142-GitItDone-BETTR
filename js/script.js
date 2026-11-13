// moves highlight(aria-current) to clicked navbar link
const navLinks = document.querySelectorAll('#mainNav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 1. Remove active state and aria-current from all links
        navLinks.forEach(item => {
            item.classList.remove('active');
            item.removeAttribute('aria-current');
        });

        // 2. Add active state and aria-current to clicked link
        this.classList.add('active');
        this.setAttribute('aria-current', 'page');
    })
})