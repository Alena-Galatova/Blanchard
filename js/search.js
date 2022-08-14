window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btnSearch').addEventListener('click', function() {
        document.querySelector('#formSearch').classList.toggle('is-active')
        document.querySelector('#btnSearch').classList.toggle('searchCancel')
        document.querySelector('.header-container__btn-icon').classList.toggle('shadow')
    })

  
})