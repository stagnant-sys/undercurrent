//mobile nav bar
let mobileNavToggle = document.querySelector('.mobile-nav__toggle');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');

//content-card actions
let moreTextButton = document.querySelectorAll('.more-text__button');
let moreText = document.querySelectorAll('.more-text');
let collapseTextButton = document.querySelectorAll('.collapse-text__button');

mobileNavToggle.addEventListener('click', function () {
    mobileNav.classList.add('open-menu');
    backdrop.style.display='block';
})

backdrop.addEventListener('click', function() {
    mobileNav.className='mobile-nav';
    backdrop.style.display='none';
})

for (let i=0; i < moreTextButton.length; i++) {
    moreTextButton[i].addEventListener('click', function() {
        moreText[i].style.display='block';
        moreTextButton[i].style.display='none';
})
}

for (let i=0; i < collapseTextButton.length; i++) {
    collapseTextButton[i].addEventListener('click', function() {
        moreText[i].style.display='none';
        moreTextButton[i].style.display='block';
})
}