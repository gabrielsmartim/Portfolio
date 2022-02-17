var messageArray = ['Desenvolvedor front-end.'];
var textPosition = 0;
var speed = 70;

typewriter = () => {
    document.querySelector('#message').innerHTML = 
    messageArray[0].substring(0, textPosition) + "<p>|</p>";

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);