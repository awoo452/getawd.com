const navIconContainer = document.getElementById('navIconContainer');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

function toggleNav() {
    if (navIconContainer.classList.contains('collapsed')) {
        navIconContainer.classList.remove('collapsed');
        leftArrow.classList.remove('collapsed');
        rightArrow.classList.add('collapsed');
    } else {
    navIconContainer.classList.add('collapsed');
    rightArrow.classList.remove('collapsed');
    leftArrow.classList.add('collapsed');
    }
}



$(document).ready(function() {
    $('#pageTitle').addClass('animated pulse');
    $('#awdLogo').addClass('animated pulse');
});