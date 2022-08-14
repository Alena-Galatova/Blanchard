window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#navMenu').classList.toggle('is-active')
        document.querySelector('#burger').classList.toggle('burgerCancel')
        document.querySelector('.header-container__burger-line').classList.toggle('shadow')
    })
    
    const menuLinks = document.querySelectorAll(".header-container__nav-item")
    for (const link of menuLinks) {
        link.addEventListener('click', function(event) {
            document.querySelector('#burger').click();
        })
    }
})