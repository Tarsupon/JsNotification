const hideNotificationCenter = () => {
    document.getElementById('nc').style.display = "none";
}

document.getElementById('close-button').onclick = function() {
    hideNotificationCenter();
}

window.onkeyup = key => {
    switch (key.keyCode) {
        case 37: {
            plusIndex(-1);
            break;
        }
        case 39: {
            plusIndex(1);
            break;
        }
        case 27: {
            hideNotificationCenter();
        }
    }
}

function plusIndex(n){
    currentSlide(slideIndex += n);
}
function currentSlide(n){
    showContent(slideIndex = n);
    document.getElementById(`button${slideIndex}`).checked = true;
}

let slideIndex = 3;

currentSlide(slideIndex);

function showContent(n) {
    const tips = [
        'Товарищи! постоянное информационно-пропагандистское обеспечение',
        'С другой стороны сложившаяся структура организации ',
        'Задача организации, в особенности же начало повседневной работы',
        'Повседневная практика показывает, что рамки',
        'Повседневная практика показывает, что начало повседневной работы',
        'Равным образом консультация с широким активом представляет'
    ]
    
    var dots = document.getElementsByClassName("dots");
    
    if (n > tips.length){
        slideIndex = 1;
    };
    if (n < 1){
        slideIndex = tips.length;
    };

    document.getElementById("tip").innerHTML = tips[slideIndex - 1];

    for (var i = 0; i < tips.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    dots[slideIndex - 1].className += " active";
}