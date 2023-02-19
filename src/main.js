
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.honeypot.value) {
        return;
    }
    const templateParams = {
        name: form.name.value,
        message: form.message.value,
    };

    emailjs.send('service_6kipyj7', 'template_u2ii3cj', templateParams, "HfEd0-TwWYtvk-uAP")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});




