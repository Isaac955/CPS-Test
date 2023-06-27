var heureDebut;
var heureFin;
var clics = 0;
var boutonClique = false;
var dureeTest = 5; // Durée du test en secondes

function commencerTest() {
    if (!boutonClique) {
        boutonClique = true;
        heureDebut = new Date();

        document.getElementById("bouton-cps").addEventListener("click", compteurClics);
        var elementCompteur = document.getElementById("compteur");
        elementCompteur.innerHTML = dureeTest;

        var decompte = setInterval(function() {
            var tempsRestant = parseInt(elementCompteur.innerHTML) - 1;
            elementCompteur.innerHTML = tempsRestant;
            if (tempsRestant <= 0) {
                clearInterval(decompte);
                finTest();
            }
        }, 1000);
    }
}

function compteurClics() {
    clics++;
}

function finTest() {
    heureFin = new Date();
    var differenceTemps = (heureFin - heureDebut) / 1000; // différence en secondes
    var cps = Math.floor(clics / differenceTemps); // cps (clics par seconde)

    var boutonCPS = document.getElementById("bouton-cps");
    boutonCPS.style.display = "none";
    boutonCPS.style.animation = "slideInLeft 0.5s ease-in-out";

    var elementResultatCPS = document.getElementById("resultat-cps");
    elementResultatCPS.innerHTML = "Vos CPS : " + cps;
    elementResultatCPS.style.display = "block";
    elementResultatCPS.style.animation = "slideInLeft 0.5s ease-in-out";

    var elementCompteur = document.getElementById("compteur");
    elementCompteur.style.display = "none";
    elementCompteur.style.animation = "slideInLeft 0.5s ease-in-out";

    var boutonRecommencer = document.getElementById("bouton-recommencer");
    boutonRecommencer.style.display = "inline-block";
    boutonRecommencer.style.animation = "slideInLeft 0.5s ease-in-out";
}

function recommencerTest() {
    boutonClique = false;
    clics = 0;
    document.getElementById("resultat-cps").style.display = "none";
    document.getElementById("resultat-cps").style.animation = "";
    document.getElementById("bouton-recommencer").style.display = "none";
    document.getElementById("bouton-recommencer").style.animation = "";
    document.getElementById("bouton-cps").style.display = "inline-block";
    document.getElementById("bouton-cps").style.animation = "";
    document.getElementById("compteur").style.display = "block";
    document.getElementById("compteur").style.animation = "";
}
