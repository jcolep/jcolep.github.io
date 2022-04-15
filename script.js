/**
 * Makes the top menu responsive (for mobile)
 */
function makeResponsive() {
    var x = document.getElementById("topNavMenu");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav"
    }
}