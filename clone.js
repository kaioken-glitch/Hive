function closeAd(){
    document.getElementById('cl').style.display="none";// simple dismiss ad.
}

document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show'); // will display side-menu in mobile device width
  });
  

function navigatTo(divId) {
    var div = document.getElementById(divId);// gets elemnt id in this case the div id
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
