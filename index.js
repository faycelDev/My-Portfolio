const button = document.getElementById('btn');
const prenom = document.getElementById('inpPrenom');
const inputNom = document.getElementById('input');


button.addEventListener("click", function() {
   
    
     if (inputNom.value == "" && prenom.value == ""){
        alert ("Compléter l'intégralité des champs svp");
    }
    else if(!(/[A-Z]/.test(inputNom.value && prenom.value))){
        alert ("Saisir la première lettre en majuscule");
    }
    

});












