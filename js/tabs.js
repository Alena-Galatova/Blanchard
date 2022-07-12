document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.accordion__painter-link').forEach(function(accordionPainterLink) {
        accordionPainterLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.section-catalog__info').forEach(function(sectionCatalogInfo) {
                sectionCatalogInfo.classList.remove('section-catalog__info-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__info-active')
        })
    }) 
})