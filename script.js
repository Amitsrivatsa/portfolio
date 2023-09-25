function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function sendMessage(){
    (function(){
        emailjs.init("H1JSXP8kvzu439nEB");
    })();

    var serviceID = "service_7mmfspy";
    var templateID = "template_ykmzc4s";

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send(serviceID,templateID,params)
    .then( res => {
        alert('Thank You, ' + params['sendername'] + '!, Your mail has been sent.');
    }).catch();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}