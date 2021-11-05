const toggleMenu = () => {
    let getMenu = document.querySelector('.mainMenu');
    getMenu.classList.toggle('hamburger');
}

document.querySelector('#toggleBar').addEventListener('click', toggleMenu);