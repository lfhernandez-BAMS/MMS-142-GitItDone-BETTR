// ---Mailto script for Contact Page. Import this script for the contact page only

const TO_ADDRESS = "hello@examplewebsite142.com"

const form = document.querySelector("#contact-form")

function buildMailto() {
    const name = document.querySelector("#form-contact-name").value;
    const email = document.querySelector("#form-contact-email").value;
    const text = document.querySelector("#form-contact-message").value;

    const subject = "Customer Inquiry"
    const body =
        "Name: " + name + "\r\n" +
        "Email: " + email + "\r\n\r\n" +
        text
        
    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );

}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = buildMailto();
});
