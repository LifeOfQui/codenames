function shuffleArray(e){for(var r=e.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),t=e[r];e[r]=e[n],e[n]=t}return e}function generateRandomNumberArray(e,r){for(var n=[];n.length<e;){var t=Math.ceil(Math.random()*r-1);n.indexOf(t)>-1||(n[n.length]=t)}return n}function setup(){playingTeamNr=0,redFound=0,blueFound=0,gameOver=!1,document.querySelector(".matrix").innerHTML="";const e=generateRandomNumberArray(25,codeWords.length);for(var r=[],n=0;n<e.length;n++)r.push(e[n]);var t=shuffleArray(r);const a=t.splice(0,9),o=t.splice(0,8),s=t.splice(0,1);var l="",i="",d=0;e.forEach(function(e){var r=document.querySelector(".matrix");void 0===codeWords[e]&&alert(e),a.indexOf(e)>-1?(r.innerHTML+='<div class="codeWord red"><span>'+codeWords[e]+"</span></div>","red"!==i?("blue"==i?l+=String.fromCharCode(64+d):"yellow"==i&&(l+=String.fromCharCode(48+d)),d=1):d++,i="red"):o.indexOf(e)>-1?(r.innerHTML+='<div class="codeWord blue"><span>'+codeWords[e]+"</span></div>","blue"!==i?("red"==i?l+=String.fromCharCode(96+d):"yellow"==i&&(l+=String.fromCharCode(48+d)),d=1):d++,i="blue"):s.indexOf(e)>-1?(r.innerHTML+='<div class="codeWord black"><span>'+codeWords[e]+"</span></div>","red"==i?l+=String.fromCharCode(96+d):"blue"==i?l+=String.fromCharCode(64+d):"yellow"==i&&(l+=String.fromCharCode(48+d)),l+="0",d=0,i=""):(r.innerHTML+='<div class="codeWord yellow"><span>'+codeWords[e]+"</span></div>","yellow"!==i?("red"==i?l+=String.fromCharCode(96+d):"blue"==i&&(l+=String.fromCharCode(64+d)),d=1):d++,i="yellow")}),"red"==i?l+=String.fromCharCode(96+d):"blue"==i?l+=String.fromCharCode(64+d):"yellow"==i&&(l+=String.fromCharCode(48+d));var c=btoa(l),u=window.location.protocol+"//"+window.location.host+window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),m=u+"/chief.html?sid="+c,h="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+encodeURIComponent(m);document.querySelector(".qrCodeImg").src=h,document.querySelector(".chiefURL").innerHTML='<a href="'+m+'" target=_blank>Link</a>',preload("./assets/images/agent-red-0.png","./assets/images/agent-red-1.png","./assets/images/agent-blue-0.png","./assets/images/agent-blue-1.png","./assets/images/observer-0.png","./assets/images/observer-1.png","./assets/images/assassin.png")}function preload(){for(var e=0;e<arguments.length;e++)images[e]=new Image,images[e].src=preload.arguments[e]}function playGame(){setup(),document.querySelector(".settings").style.display="none",document.querySelector(".startNewGameAsideBtn").style.display="none",document.querySelector(".redTeamColor").style.display="block",document.querySelector(".redTeamCount").style.display="block",document.querySelector(".redTeamCount").innerHTML="0 Agenten kontaktiert!",document.querySelector(".blueTeamCount").innerHTML="0 Agenten kontaktiert!",document.querySelector(".blueTeamColor").style.display="block",document.querySelector(".blueTeamCount").style.display="block",document.querySelector(".endTurnBtn").style.display="inline-block",document.querySelector(".chiefOverlayBtn").style.display="inline-block";var e=document.querySelectorAll(".codeWord");document.querySelector(".redTeamColor").classList.remove("disabled"),document.querySelector(".blueTeamColor").classList.add("disabled");for(var r=0;r<e.length;r++)e[r].classList.add("invisible"),e[r].addEventListener("click",function(){if(this.classList.contains("invisible")&&!gameOver){this.classList.remove("invisible");var e=Math.round(Math.random());if(this.classList.contains("red")?this.style.backgroundImage="url('./assets/images/agent-red-"+e+".png')":this.classList.contains("blue")?this.style.backgroundImage="url('./assets/images/agent-blue-"+e+".png')":this.classList.contains("yellow")?this.style.backgroundImage="url('./assets/images/observer-"+e+".png')":this.style.backgroundImage="url('./assets/images/assassin.png')",0===playingTeamNr&&this.classList.contains("red"))redFound++,checkWinning();else{if(0===playingTeamNr&&this.classList.contains("blue"))return blueFound++,checkWinning(),playingTeamNr=1,document.querySelector(".redTeamColor").classList.add("disabled"),void document.querySelector(".blueTeamColor").classList.remove("disabled");if(0===playingTeamNr&&this.classList.contains("yellow"))return playingTeamNr=1,document.querySelector(".redTeamColor").classList.add("disabled"),void document.querySelector(".blueTeamColor").classList.remove("disabled")}if(1===playingTeamNr&&this.classList.contains("blue"))blueFound++,checkWinning();else{if(1===playingTeamNr&&this.classList.contains("red"))return redFound++,checkWinning(),playingTeamNr=0,document.querySelector(".blueTeamColor").classList.add("disabled"),void document.querySelector(".redTeamColor").classList.remove("disabled");if(1===playingTeamNr&&this.classList.contains("yellow"))return playingTeamNr=0,document.querySelector(".blueTeamColor").classList.add("disabled"),void document.querySelector(".redTeamColor").classList.remove("disabled")}this.classList.contains("black")&&setDown(0===playingTeamNr?1:0)}})}function endTurn(){0===playingTeamNr?(playingTeamNr=1,document.querySelector(".redTeamColor").classList.add("disabled"),document.querySelector(".blueTeamColor").classList.remove("disabled")):(playingTeamNr=0,document.querySelector(".blueTeamColor").classList.add("disabled"),document.querySelector(".redTeamColor").classList.remove("disabled"))}function checkWinning(){document.querySelector(".redTeamCount").innerHTML=redFound+" Agenten kontaktiert!",document.querySelector(".blueTeamCount").innerHTML=blueFound+" Agenten kontaktiert!",9===redFound?setDown(0):8===blueFound&&setDown(1)}function setDown(e){0===e?(alert("RED WINS"),document.querySelector(".blueTeamColor").classList.add("disabled"),document.querySelector(".redTeamColor").classList.remove("disabled")):(alert("BLUE WINS"),document.querySelector(".redTeamColor").classList.add("disabled"),document.querySelector(".blueTeamColor").classList.remove("disabled")),gameOver=!0,document.querySelector(".endTurnBtn").style.display="none",document.querySelector(".chiefOverlayBtn").style.display="none",document.querySelector(".startNewGameAsideBtn").style.display="inline-block"}var codeWords=["Strauss","Bett","Flöte","Kiwi","London","Jet","Alien","Dieb","Burg","Ton","Forscher","Peking","Bein","Bulle","Mast","Kraft","Flasche","Boxer","Bart","Schelle","Herz","Vorsatz","Harz","Steuer","Mini","Indien","Kamm","Krebs","Bach","Barren","Luxemburg","Pension","Decke","Löffel","Rücken","Flur","Gericht","Haupt","Maler","Futter","Zelle","Heide","Busch","Orange","Schuppen","Platte","Rock","Wand","Stift","Becken","Stempel","Erde","Rost","Zylinder","Schnabeltier","Meer","Fuss","Maus","Messer","Theater","Polizei","Schiff","Pilot","Daumen","Lehrer","Tag","König","Glas","Zahn","Königin","Hund","Pferd","Schuh","Stuhl","Krone","Eis","Gold","Gabel","Zeit","Welle","Maschine","Bande","Erika","Bär","Leim","New York","Kreis","Rom","Brötchen","Morgenstern","Moskau","Hand","Seite","Jahr","Hollywood","Mittel","Shakespeare","Griechenland","Bau","Fliege","Kunde","Bayern","Schild","Dinosaurier","Geschirr","Gang","Dietrich","Niete","Ente","Papier","Wind","Leben","Koch","Wasser","Gesicht","Katze","Riese","Auto","Löwe","Glück","Strand","Auge","Apfel","Wald","Gürtel","Kirche","Zwerg","Zitrone","Auflauf","Öl","Stock","Lager","Schule","Mark","Feige","Jura","Satz","Rolle","Millionär","Fall","Grund","Mangel","Dichtung","Chor","Kapelle","Hahn","Schotten","Gehalt","Jäger","Takt","Börse","Demo","Schimmel","Schalter","Scheibe","Wanze","Bogen","Käfer","Riegel","Finger","Umzug","Leuchte","Atlas","Po","Bock","Funken","Schein","Flügel","Drache","Mond","Tokyo","Antarktis","Karotte","Osten","Winnetou","Loch Ness","Moos","Melone","Honig","Frankreich","Olymp","Schokolade","Roulette","Verein","Pass","Atlantis","Wolkenkratzer","Mexiko","Golf","Lösung","Einhorn","Wirtschaft","Bund","Berliner","Siegel","Bahn","Tau","Messe","Kiel","Strudel","Drossel","Kissen","Schwarz","Geschoss","Schneemann","Fallschirm","Ritter","Konzern","Pirat","Hupe","Pinguin","Krankheit","Spinne","Torte","Botschaft","Satellit","Essen","Afrika","Chemie","Quartett","Bar","Tafel","Abgabe","Blüte","Elfenbein","Ausdruck","Reif","Nagel","Linie","Mutter","Tempo","Fessel","Riemen","Blinker","Drucker","Sekretär","Gummi","Radio","Kette","Luft","Telefon","Beton","Knete","Adler","Uhr","Hai","Kuh","Schaf","Pfeil","Präsent","Familie","Braten","Nikolaus","Stern","Schlitten","Krippe","Päckchen","Weihnachten","Advent","Oktopus","Hubschrauber","Krankenhaus","Anwalt","Hotel","Nacht","Optik","Europa","Wurm","Skelett","Ketchup","Känguru","Gras","Hase","Lakritze","Hering","Bergsteiger","Nadel","Brand","Knie","Schornstein","Topf","Zunge","Erbse","Schirm","Frost","Rose","Mantel","Rechner","Feldherr","Kloss","Sosse","Umhang","Zentaur","Boot","Kiefer","Zug"],playingTeamNr=0,redFound=0,blueFound=0,gameOver=!1,images=[];document.querySelector(".chiefOverlay").addEventListener("click",function(){null===this.offsetParent?this.style.display="flex":this.style.display="none"});