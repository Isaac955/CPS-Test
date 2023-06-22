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

    var elementResultatCPS = document.getElementById("resultat-cps");
    elementResultatCPS.innerHTML = "Tes CPS (cliques par seconde) : " + cps;
    elementResultatCPS.style.display = "block";

    var elementCompteur = document.getElementById("compteur");
    elementCompteur.style.display = "none";
}
