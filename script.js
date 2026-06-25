const form = document.getElementById("contact-form");

const status = document.getElementById("status");

const button = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    button.innerHTML = "Sending...";

    emailjs.send("service_rhhd9m4", "template_5iaupsm", {

        from_name: document.getElementById("name").value,

        from_email: document.getElementById("email").value,

        message: document.getElementById("message").value,

    })

    .then(function () {

        status.innerHTML = "✅ Message sent successfully!";

        status.style.color = "#00ffae";

        button.innerHTML = "Send Message";

        form.reset();

    })

    .catch(function (error) {

        status.innerHTML = "❌ Failed to send message.";

        status.style.color = "red";

        button.innerHTML = "Send Message";

        console.log(error);

    });

});
