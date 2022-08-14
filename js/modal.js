class sectionGalleryModal {
    constructor(options) {
        let defaultOptions = {
            isOpen: () => {},
        }
        this.options = Object.assign(defaultOptions, options);
        this.sectionGalleryModal = document.querySelector('.section-gallery__modal');
        this.speed = false;
        this.animation = false;
        this.isOpen = false;
        this.sectionGalleryModalContainer = false;
        this.previousActiveElement = false;
        this.fixBlocks = document.querySelector('.fix-block');
        this.events();
    }

    events() {
        if (this.sectionGalleryModal) {
            document.addEventListener('click', function(e){
                const clickedElement = e.target.closest('[data-path]');
                if (clickedElement) {
                    let target = clickedElement.dataset.path;
                    let animation = clickedElement.dataset.animation;
                    let speed = clickedElement.dataset.speed;
                    this.animation = animation ? animation : 'fade';
                    this.speed = speed ? parseInt(speed) : 300;
                    this.sectionGalleryModalContainer = document.querySelector('[data-target="${target}"]');
                    this.open();
                    return;
                }

                if (e.target.closest('.modal-container__btn-close')) {
                    this.close();
                    return;
                }
            }.bind(this));
        }
    }

    open() {
        //Открыть окно
        //Сайт не скроллится
        //Нет прыжка
        //Фокус внутри окна
        //Выделение первого элемента
        //Анимация
        this.sectionGalleryModal.style.setProperty('--transition-time', '${this.speed / 1000}s');
        this.sectionGalleryModal.classList.add('is-open');
        this.disableScroll();

        this.sectionGalleryModalContainer.classList.add('modal-open');
        this.sectionGalleryModalContainer.classList.add(this.animation);

        setTimeout(() => {
            this.sectionGalleryModalContainer.classList.add('animate-open');
            this.options.isOpen(this);
            this.isOpen = true;
            this.focusTrap();
        }, this.speed)
    }

    close() {

    }

    focusCatch(e) {

    }

    focusTrap() {

    }

    disableScroll() {

    }

    enableScroll() {

    }

    lockPadding() {

    }

    unlockPadding() {

    }


}

const sectionGalleryModal = new sectionGalleryModal({
    isOpen: () => {
        console.log('opened');
    },
});