    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("myMap1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.62],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        },
        { 
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition:  { top: "200px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" }
        });

        myMap.behaviors.disable('scrollZoom');

        // Создание геообъекта с типом точка (метка).

        var myPlacemark = new ymaps.Placemark([55.759, 37.614], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/location.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-25, -42]
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark); 
    }