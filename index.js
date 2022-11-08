let buttons = document.querySelectorAll('.nav-link');

buttons.forEach(btn => 
    btn.addEventListener('click' , () => {
        buttons.forEach(button => button.classList.remove('active-class'));
        btn.classList.add('active-class');
    }))