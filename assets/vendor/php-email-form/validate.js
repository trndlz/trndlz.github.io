(function () {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function (e) {
        e.addEventListener('submit', function (event) {
            event.preventDefault();
            let thisForm = this;
            displayError(thisForm, 'Non mais tu crois vraiment que tu peux me contacter comme ça ? Discutons dans la vraie vie, le plus loin possible des ordinateurs.');
        });
    });


    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

})();