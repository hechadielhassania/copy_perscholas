
function deleteTopnav() {
    var topnavDiv = document.querySelector('.topnav');
    topnavDiv.parentNode.removeChild(topnavDiv);
    document.getElementById("headertop").style.paddingTop = "40px";
}