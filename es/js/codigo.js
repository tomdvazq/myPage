//Pre Loader//
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

//Acordeón//

let collapsibles = document.querySelectorAll('.aboutMe-data_container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.aboutMe-answer').classList.toggle('open');
        element.querySelector('.aboutMe-sentence').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});

//Button//

let readmore_btn = document.getElementById('readmore_btn');
let hideText = document.getElementById('hideText');

readmore_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')) {
        readmore_btn.innerHTML = "Leer menos";
    }
    else {
        readmore_btn.innerHTML = "Leer más";
    }
}

//Read More Data//

const li = document.querySelectorAll('.li')
const block = document.querySelectorAll('.block')

li.forEach((cadaLi, i)=>{
    li[i].addEventListener('click',()=>{

        li.forEach((cadaLi, i)=>{
            li[i].classList.remove('active')
            block[i].classList.remove('active')
        })

        li[i].classList.add('active')
        block[i].classList.add('active')
    })
})

//Language//

let check = document.getElementById('check');
check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    if (id==true){
        location.href="es/index.html"
    } else {
        location.href="../index.html"
    }
}