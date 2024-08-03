// function darkMode() {
//     let container = document.getElementById('about-container')
//     container.style.boxShadow = 'box-shadow: 0 10px 20px rgba(255, 255, 255, 0.415);'
//     var element = document.body;
//     let h3 = document.getElementById('logo')
//     let li = document.getElementById('li')
//     let home = document.getElementById('home')
//     let nav = document.getElementById('nav-bar')
//     nav.style.background = '#17153B'
//     nav.style.boxShadow = '0 10px 20px 8px rgb(255 255 255 / 10%)'
//     // console.log(li);
//     home.style.background = '#17153B'
//     element.classList.toggle("dark");
//     h3.style.color = 'white'
//     li.style.color = 'white'
//     // box-shadow: 0 10px 20px rgba(255, 255, 255, 0.415);
// }
// darkMode()

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
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        alert("your message sent")
    }).catch((err)=> console.log(err));
}