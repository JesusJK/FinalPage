(function(){
    
    const sliders = [...document.querySelectorAll('.body_content')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.body_content--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('body_content--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('body_content--show');

    }

})();