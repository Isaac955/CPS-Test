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
    elementResultatCPS.innerHTML = "Tes CPS : " + cps;
    elementResultatCPS.style.display = "block";

    var elementCompteur = document.getElementById("compteur");
    elementCompteur.style.display = "none";

    var boutonRecommencer = document.createElement("button");
    boutonRecommencer.innerHTML = "Recommencer";
    boutonRecommencer.className = "bouton-recommencer";
    boutonRecommencer.addEventListener("click", recommencerTest);
    document.querySelector(".container").appendChild(boutonRecommencer);
}

function recommencerTest() {
    boutonClique = false;
    clics = 0;
    document.getElementById("resultat-cps").style.display = "none";
    document.querySelector(".bouton-recommencer").remove();
    document.getElementById("bouton-cps").style.display = "inline-block";
    document.getElementById("compteur").style.display = "block";
}

document.getElementById("bouton-cps").style.cursor = "pointer";

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})