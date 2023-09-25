document.addEventListener('DOMContentLoaded', function() { /*PROBLÈME D'AFFICHAGE DES MESSAGES LORSQU'ON REJOUE UNE PARTIE*/
    let button = document.getElementById('valider');
    let message = document.getElementById("message");
    let input = document.getElementById("input");

    let nombre = Math.floor(Math.random() * 15);
    let essai = 1;

    button.addEventListener("click", function() {
        if (input.value != "") {

            if (input.value < nombre) {
                message.innerHTML = "[" + essai + "]" + " C'est plus grand que " + input.value;
                message.style.color = "blue"
            }
            else if (input.value > nombre) {
                message.innerHTML = "[" + essai + "]" + " C'est plus petit que " + input.value;
                message.style.color = "brown"
            }
            
            if (essai == 6) {
                message.innerHTML = "[" + essai + "]" +  " Perdu, vous n'avez pas trouvé le nombre qui était " + nombre;
                message.style.color = "red"
                button.textContent = "Rejouer"
                button.addEventListener("click", reset);
            } 

           if (input.value == nombre) {
                message.innerHTML = "[" + essai + "]" +  " Bravo vous avez trouvé le nombre qui était " + nombre;
                message.style.color = "green"
                button.textContent = "Rejouer"
                button.addEventListener("click", reset);
            } essai++;

        } else {
            message.innerHTML = "Le champ est vide";
            message.style.color = "red"
        }
    });

    function reset() {
        if (button.textContent === "Rejouer") {
            nombre = Math.floor(Math.random() * 15);
            input.disabled = false;
            essai = 1;
            input.value = "";
            message.innerHTML = "";
            button.textContent = "Essayer";
        }
    }

});