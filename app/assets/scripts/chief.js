var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
var sid = urlParams.sid;

var decodedString = atob(sid);

decodedString.split('').forEach(function (ele) {
    var matrix = document.querySelector('.matrix');

    var ascii = ele.charCodeAt(0);
    if (ascii === 48) {
        matrix.innerHTML += '<div class="codeWord black"></div>';
    } else if (ascii >= 49 && ascii <= 57) {
        for (var i = 0; i < ascii-48; i++) {
            matrix.innerHTML += '<div class="codeWord yellow"></div>';
        }
    } else if (ascii >= 65 && ascii <= 90) {
        for (var i = 0; i < ascii-64; i++) {
            matrix.innerHTML += '<div class="codeWord blue"></div>';
        }
    } else {
        for (var i = 0; i < ascii-96; i++) {
            matrix.innerHTML += '<div class="codeWord red"></div>';
        }
    }
});

document.querySelector('html').addEventListener('click', function() {
    var elOverlay = document.querySelector('.overlay');
    if (elOverlay.offsetParent === null) {
        elOverlay.style.display = "flex";
    } else {
        elOverlay.style.display = "none";
    }
});