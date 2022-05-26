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