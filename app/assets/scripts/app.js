var codeWords = ['Strauss', 'Bett', 'Flöte', 'Kiwi', 'London', 'Jet', 'Alien', 'Dieb', 'Burg', 'Ton', 'Forscher', 'Peking', 'Bein', 'Bulle', 'Mast', 'Kraft', 'Flasche', 'Boxer', 'Bart', 'Schelle', 'Herz', 'Vorsatz', 'Harz', 'Steuer', 'Mini', 'Indien', 'Kamm', 'Krebs', 'Bach', 'Barren', 'Luxemburg', 'Pension', 'Decke', 'Löffel', 'Rücken', 'Flur', 'Gericht', 'Haupt', 'Maler', 'Futter', 'Zelle', 'Heide', 'Busch', 'Orange', 'Schuppen', 'Platte', 'Rock', 'Wand', 'Stift', 'Becken', 'Stempel', 'Erde', 'Rost', 'Zylinder', 'Schnabeltier', 'Meer', 'Fuss', 'Maus', 'Messer', 'Theater', 'Polizei', 'Schiff', 'Pilot', 'Daumen', 'Lehrer', 'Tag', 'König', 'Glas', 'Zahn', 'Königin', 'Hund', 'Pferd', 'Schuh', 'Stuhl', 'Krone', 'Eis', 'Gold', 'Gabel', 'Zeit', 'Welle', 'Maschine', 'Bande', 'Erika', 'Bär', 'Leim', 'New York', 'Kreis', 'Rom', 'Brötchen', 'Morgenstern', 'Moskau', 'Hand', 'Seite', 'Jahr', 'Hollywood', 'Mittel', 'Shakespeare', 'Griechenland', 'Bau', 'Fliege', 'Kunde', 'Bayern', 'Schild', 'Dinosaurier', 'Geschirr', 'Gang', 'Dietrich', 'Niete', 'Ente', 'Papier', 'Wind', 'Leben', 'Koch', 'Wasser', 'Gesicht', 'Katze', 'Riese', 'Auto', 'Löwe', 'Glück', 'Strand', 'Auge', 'Apfel', 'Wald', 'Gürtel', 'Kirche', 'Zwerg', 'Zitrone', 'Auflauf', 'Öl', 'Stock', 'Lager', 'Schule', 'Mark', 'Feige', 'Jura', 'Satz', 'Rolle', 'Millionär', 'Fall', 'Grund', 'Mangel', 'Dichtung', 'Chor', 'Kapelle', 'Hahn', 'Schotten', 'Gehalt', 'Jäger', 'Takt', 'Börse', 'Demo', 'Schimmel', 'Schalter', 'Scheibe', 'Wanze', 'Bogen', 'Käfer', 'Riegel', 'Finger', 'Umzug', 'Leuchte', 'Atlas', 'Po', 'Bock', 'Funken', 'Schein', 'Flügel', 'Drache', 'Mond', 'Tokyo', 'Antarktis', 'Karotte', 'Osten', 'Winnetou', 'Loch Ness', 'Moos', 'Melone', 'Honig', 'Frankreich', 'Olymp', 'Schokolade', 'Roulette', 'Verein', 'Pass', 'Atlantis', 'Wolkenkratzer', 'Mexiko', 'Golf', 'Lösung', 'Einhorn', 'Wirtschaft', 'Bund', 'Berliner', 'Siegel', 'Bahn', 'Tau', 'Messe', 'Kiel', 'Strudel', 'Drossel', 'Kissen', 'Schwarz', 'Geschoss', 'Schneemann', 'Fallschirm', 'Ritter', 'Konzern', 'Pirat', 'Hupe', 'Pinguin', 'Krankheit', 'Spinne', 'Torte', 'Botschaft', 'Satellit', 'Essen', 'Afrika', 'Chemie', 'Quartett', 'Bar', 'Tafel', 'Abgabe', 'Blüte', 'Elfenbein', 'Ausdruck', 'Reif', 'Nagel', 'Linie', 'Mutter', 'Tempo', 'Fessel', 'Riemen', 'Blinker', 'Drucker', 'Sekretär', 'Gummi', 'Radio', 'Kette', 'Luft', 'Telefon', 'Beton', 'Knete', 'Adler', 'Uhr', 'Hai', 'Kuh', 'Schaf', 'Pfeil', 'Präsent', 'Familie', 'Braten', 'Nikolaus', 'Stern', 'Schlitten', 'Krippe', 'Päckchen', 'Weihnachten', 'Advent', 'Oktopus', 'Hubschrauber', 'Krankenhaus', 'Anwalt', 'Hotel', 'Nacht', 'Optik', 'Europa', 'Wurm', 'Skelett', 'Ketchup', 'Känguru', 'Gras', 'Hase', 'Lakritze', 'Hering', 'Bergsteiger', 'Nadel', 'Brand', 'Knie', 'Schornstein', 'Topf', 'Zunge', 'Erbse', 'Schirm', 'Frost', 'Rose', 'Mantel', 'Rechner', 'Feldherr', 'Kloss', 'Sosse', 'Umhang', 'Zentaur', 'Boot', 'Kiefer', 'Zug'];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function generateRandomNumberArray(lengthOfRandomNumberArray, range) {
    var arr = [];
    while(arr.length < lengthOfRandomNumberArray){
       var randomnumber = Math.ceil(Math.random() * range - 1);
       if(arr.indexOf(randomnumber) > -1) continue;
       arr[arr.length] = randomnumber;
    }

    return arr;
}

var playingTeamNr = 0;
var redFound = 0;
var blueFound = 0;
var gameOver = false;

function setup() {
    playingTeamNr = 0;
    redFound = 0;
    blueFound = 0;
    gameOver = false;

    document.querySelector('.matrix').innerHTML = '';

    const matrixArr = generateRandomNumberArray(25, codeWords.length);
    var arr2 = [];
    for (var i = 0; i < matrixArr.length; i++) {
        arr2.push(matrixArr[i]);
    }
    var randomIndexes = shuffleArray(arr2);
    const firstTeamArr = randomIndexes.splice(0, 9);
    const secondTeamArr = randomIndexes.splice(0, 8);
    const blackArr = randomIndexes.splice(0, 1);

    var sid = '';
    var actualColor = '';
    var colorCount = 0;


    matrixArr.forEach(function(ele) {
        var matrix = document.querySelector('.matrix');
        if (codeWords[ele] === undefined) {
            alert(ele);
        }


        if (firstTeamArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord red"><span>' + codeWords[ele] + '</span></div>';
            if (actualColor !== 'red') {
                if (actualColor == 'blue') sid=sid + String.fromCharCode(64+colorCount);
                else if (actualColor == 'yellow') sid=sid + String.fromCharCode(48+colorCount);
                colorCount = 1;
            } else {
                colorCount++;
            }
            actualColor = 'red';

        } else if (secondTeamArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord blue"><span>' + codeWords[ele] + '</span></div>';
            if (actualColor !== 'blue') {
                if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
                else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);

                colorCount = 1;
            } else {

                colorCount++;
            }
            actualColor = 'blue';

        } else if (blackArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord black"><span>' + codeWords[ele] + '</span></div>';
            if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
            else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
            else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);

            sid += '0';
            colorCount = 0;
            actualColor = '';

        } else {
            matrix.innerHTML += '<div class="codeWord yellow"><span>' + codeWords[ele] + '</span></div>';
            if (actualColor !== 'yellow') {
                if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
                else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
                colorCount = 1;
            } else {
                colorCount++;
            }
            actualColor = 'yellow';
        }
    });
    if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
    else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
    else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);


    var encodedString = btoa(sid);
    var path = window.location.protocol + '//' + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
    var fullPath = path + '/chief.html?sid=' + encodedString;

    var qrCodeImg = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(fullPath);
    document.querySelector('.qrCodeImg').src = qrCodeImg;
    document.querySelector('.chiefURL').innerHTML = '<a href="' +fullPath + '" target=_blank>Link</a>';

    //preload images
    preload(
        "./assets/images/agent-red-0.png",
        "./assets/images/agent-red-1.png",
        "./assets/images/agent-blue-0.png",
        "./assets/images/agent-blue-1.png",
        "./assets/images/observer-0.png",
        "./assets/images/observer-1.png",
        "./assets/images/assassin.png",
        "./assets/images/red-team-disabled.jepg",
        "./assets/images/blue-team.jpeg"
    )

}
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

function playGame() {
    setup();

    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.startNewGameAsideBtn').style.display = 'none';
    document.querySelector('.aside').style.display = 'block';
    document.querySelector('.redTeamColor').style.display = 'block';
    document.querySelector('.redTeamCount').style.display = 'block';
    document.querySelector('.redTeamCount').innerHTML = '0 Agenten kontaktiert!';
    document.querySelector('.blueTeamCount').innerHTML = '0 Agenten kontaktiert!';
    document.querySelector('.blueTeamColor').style.display = 'block';
    document.querySelector('.blueTeamCount').style.display = 'block';
    document.querySelector('.endTurnBtn').style.display = 'inline-block';
    document.querySelector('.chiefOverlayBtn').style.display = 'inline-block';
    document.querySelector('.game__instructions').style.display = 'inline-block';

    var codeWord = document.querySelectorAll('.codeWord');

    document.querySelector('.redTeamColor').classList.remove('disabled');
    document.querySelector('.blueTeamColor').classList.add('disabled');


    for (var i = 0; i < codeWord.length; i++) {
        codeWord[i].classList.add('invisible');

        codeWord[i].addEventListener('click', function() {
            if (!this.classList.contains('invisible') || gameOver) {
                return;
            }
            this.classList.remove('invisible');
            var ranNum = Math.round(Math.random());

            if (this.classList.contains('red')) {
                this.style.backgroundImage = "url('./assets/images/agent-red-" + ranNum + ".png')";
            } else if (this.classList.contains('blue')) {
                this.style.backgroundImage = "url('./assets/images/agent-blue-" + ranNum + ".png')";
            } else if (this.classList.contains('yellow')) {
                this.style.backgroundImage = "url('./assets/images/observer-" + ranNum + ".png')";
            } else {
                this.style.backgroundImage = "url('./assets/images/assassin.png')";
            }

            if (playingTeamNr === 0 && this.classList.contains('red')) {
                redFound++;
                checkWinning();
            } else if (playingTeamNr === 0 && this.classList.contains('blue')) {
                blueFound++;
                checkWinning();
                playingTeamNr = 1;
                document.querySelector('.redTeamColor').classList.add('disabled');
                document.querySelector('.blueTeamColor').classList.remove('disabled');

                return;
            } else if (playingTeamNr === 0 && this.classList.contains('yellow')) {
                playingTeamNr = 1;
                document.querySelector('.redTeamColor').classList.add('disabled');
                document.querySelector('.blueTeamColor').classList.remove('disabled');

                return;
            }

            if (playingTeamNr === 1 && this.classList.contains('blue')) {
                blueFound++;
                checkWinning();
            } else if (playingTeamNr === 1 && this.classList.contains('red')) {
                redFound++;
                checkWinning();
                playingTeamNr = 0;
                document.querySelector('.blueTeamColor').classList.add('disabled');
                document.querySelector('.redTeamColor').classList.remove('disabled');

                return;
            } else if (playingTeamNr === 1 && this.classList.contains('yellow')) {
                playingTeamNr = 0;
                document.querySelector('.blueTeamColor').classList.add('disabled');
                document.querySelector('.redTeamColor').classList.remove('disabled');

                return;
            }

            if (this.classList.contains('black')) {
                if (playingTeamNr === 0)
                    setDown(1);
                else
                    setDown(0);
            }
        });
    }
}

function endTurn() {
    if (playingTeamNr === 0) {
        playingTeamNr = 1;
        document.querySelector('.redTeamColor').classList.add('disabled');
        document.querySelector('.blueTeamColor').classList.remove('disabled');

    } else {
        playingTeamNr = 0;
        document.querySelector('.blueTeamColor').classList.add('disabled');
        document.querySelector('.redTeamColor').classList.remove('disabled');
    }
}

function checkWinning() {
    document.querySelector('.redTeamCount').innerHTML = redFound + ' Agenten kontaktiert!';
    document.querySelector('.blueTeamCount').innerHTML = blueFound + ' Agenten kontaktiert!';
    if (redFound === 9) {
        setDown(0);
    } else if (blueFound === 8) {
        setDown(1);
    }
}

function setDown(playingTeamNr) {
    if (playingTeamNr === 0) {
        alert('Rotes Team gewinnt!');
        document.querySelector('.blueTeamColor').classList.add('disabled');
        document.querySelector('.redTeamColor').classList.remove('disabled');
    } else {
        alert('Blaues Team gewinnt!');
        document.querySelector('.redTeamColor').classList.add('disabled');
        document.querySelector('.blueTeamColor').classList.remove('disabled');
    }

    gameOver = true;
    document.querySelector('.endTurnBtn').style.display = 'none';
    document.querySelector('.chiefOverlayBtn').style.display = 'none';

    document.querySelector('.startNewGameAsideBtn').style.display = 'inline-block';
}

document.querySelector('.chiefOverlay').addEventListener('click', function() {
    if (this.style.display !== "flex") {
        this.style.display = "flex";
    } else {
        this.style.display = "none";
    }
});

function openInstructions() {
    var url = 'https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjNn5yVzr_SAhUJVxQKHWXUAi4QFggfMAA&url=http%3A%2F%2Fwww.brettspiele-report.de%2Fimages%2Fc%2Fcodenames%2FCodenames-Spielanleitung.pdf&usg=AFQjCNGVwQ4Dy8LEVwzBiWQTFeyUT1EVAg&sig2=6EWKMM33gGqe2W5R-UsEjQ';
    var win = window.open(url, '_blank');
    win.focus();
}