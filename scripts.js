const buttonSwitchTheme = document.getElementById('buttonSwitchTheme');
function switchTheme() {
    let element = document.getElementById('body');
    element.classList.toggle("light-mode");
    element.classList.toggle("dark-mode");
}
buttonSwitchTheme.addEventListener('click', switchTheme);


var photosList = [
    'background-image: url(https://images.unsplash.com/photo-1609840010686-7d9af1af280e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);',
    'background-image: url(https://images.unsplash.com/photo-1656052564863-8ef68f491c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);',
    'background-image: url(https://images.unsplash.com/photo-1638706647434-66d9c0ab33ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);',
]
const nextPhoto = document.getElementById('next-photo');
const previousPhoto = document.getElementById('previous-photo');
const photo = document.getElementById('photo');

function nextPhotoSlide() {
    for (let item of photosList) {
        if (item === photo.getAttribute('style')) {
            if (photosList.indexOf(item) === photosList.length - 1) {
                photo.setAttribute('style', photosList[0]);
            }
            else {
                photo.setAttribute('style', photosList[photosList.indexOf(item)+1]);
            }
            break;
        }
    }
}
function prevPhotoSlide() {
    for (let item of photosList) {
        if (item === photo.getAttribute('style')) {
            if (photosList.indexOf(item) === 0) {
                photo.setAttribute('style', photosList[photosList.length - 1]);
            }
            else {
                photo.setAttribute('style', photosList[photosList.indexOf(item) - 1]);
            }
            break;
        }
    }
}
nextPhoto.addEventListener('click', nextPhotoSlide);
previousPhoto.addEventListener('click', prevPhotoSlide);