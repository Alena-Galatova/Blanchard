var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.section-contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 3,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
    },
    colorWrong: '#D11616',
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Введите не более 10 символов'
        },
        tel: {
            required: 'Введите номер',
            function: 'Некорректный номер'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'http://blanchard/mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
});