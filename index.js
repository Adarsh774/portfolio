// function for send email
function emailsend() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_uyl5ggb";
    const templateID = "template_aphkrhl"

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("your message sent")
        }).catch((err) => console.log(err));
}
// function for load about page 
function about() {
    window.location.href(
        "about.html");
}