let prompt = require("prompt-sync")();

let counterPerdu = 0;
let counterGagne = 0;
let counterEgalite = 0;

let answer = prompt("Voulez-vous commencer le jeu? (1 si oui; 2 si non):")

// Le menu

while(answer=1){
console.log(" ____________________________________");
console.log(" |                                  | ");
console.log(" | -------- JEU DE CARTE ---------  | " );
console.log(" |          _______                 | ");
console.log(" |         |  MENU |                | ");
console.log(" |          -------                 | ");
console.log(" |         1) JOUER                 |  ");               
console.log(" |                                  | ");
console.log(" |         2) QUITTER               |  ");
console.log(" |                                  | ");
console.log(" |__________________________________|");

let choix = prompt(" \n Veuillez saisir votre choix : ");

if(choix == 1){
//Declarer le fonction qui sert a lancer le jeu
   function jouer(){
    for(let i=1; i<=3 ;i++){
        console.log("   ********  MANCHE "+i+"  *******");
console.log(" ____________________________________");
console.log(" |                                  | ");
console.log(" |  -------- VOTRE CARTE ---------  | " );
console.log(" |                                  | ");
console.log(" |         1) FEU                   |  ");               
console.log(" |         2) EAU                   | ");
console.log(" |         3) PLANTE                |  ");
console.log(" |                                  | ");
console.log(" |__________________________________|");

let carte = prompt("  \n Veuillez saisir votre carte : ");
const robotCarte = ["feu", "eau", "plante"];
    const randomChoice = robotCarte[Math.floor(Math.random()*robotCarte.length)];
    console.log("                                       ");
    console.log( "   Le choix du robot est : "+randomChoice);
    
    //Decleration de la fonction qui affichera le resultat

    function resultat (){
    if(((carte == 1) && (randomChoice == robotCarte[1] )) || ((carte == 2 && (randomChoice == robotCarte[2]))) || ((carte==3) && (randomChoice==robotCarte[0]))){
        console.log("\n  PERDU  ");
        
function randomSarcasm(){
    let snideWord = ["Ouch, tu y est presque. Essaie encore", "Good luck for the next time",
     "Don't give up", "Try again." ];
     console.log(snideWord[Math.floor(Math.random() * snideWord.length)]);
    }
    randomSarcasm();
        counterPerdu++ ;
    }    
    if(((carte == 1) && (randomChoice == robotCarte[2])) || ((carte == 2) && (randomChoice == robotCarte[0])) ||((carte==3) && (randomChoice==robotCarte[1]))){
        console.log(" \n GAGNE  ");
        function randomCongrats() {
            let congrats = ["Nice", "Congratulation", "Bien joué", "Cool", "Super", "Good job", "Success"
                , "Tena mahay ka", "Alefa", "Tohizo fa tsara", "GG", "You're in the right way", "Magnificent", "Goood",
                "Come on, keep it that way, that's wonderfull", "You're a great player",
                "I'm proud of you,for real.", "Woaou, you're not disappointing", "If you keep it that way, we'll give you a standing ovation.", "Wonderfull!"];
            console.log(congrats[Math.floor(Math.random() * congrats.length)]);
        
        }
        randomCongrats();
        counterGagne++ ;
    }

    if((carte ==1 && randomChoice == robotCarte[0]) || (carte == 2 && randomChoice == robotCarte[1]) || (carte == 3 && randomChoice == robotCarte[2])){
        console.log(" \n EGALITE ");
        counterEgalite++ ;
    }
    
    
}
    // Execution de le fonction resultat
resultat();

// Ici on affiche le resultat finale


    if((counterPerdu==3) || (counterPerdu==2) && (counterGagne==0 && (counterEgalite==1)) || (counterPerdu==2) &&(counterGagne==1 && (counterEgalite==0)) || (counterPerdu==3) && (counterGagne==0 && (counterEgalite==0)) || (counterPerdu==1 && counterEgalite==2 && counterGagne==0)){
    console.log("___________________________________________________________");
    console.log("|Vous avez perdu contre le robot lors de ces trois manche!!|");
    console.log("|__________________________________________________________|");
    break;
}

    if((counterGagne==3) || (counterGagne==2) && (counterPerdu==0 && (counterEgalite==1)) || (counterGagne==2) &&(counterPerdu==1 && (counterEgalite==0)) || (counterGagne==3) && (counterPerdu==0 && (counterEgalite==0)) || (counterGagne==1 && counterEgalite==2 && counterPerdu==0)){
    console.log(" _____________________________________");
    console.log("|    Felicitation!  Vous avez gagné!! |");
    console.log("|_____________________________________|");
    break;
}
if(counterEgalite==3){
    console.log("__________ ");
    console.log("| Egalité |");
    console.log("|_________|");
    let reponse = prompt("   Voulez-vous recommencer la manche? (veuillez repondre par oui/non):     "  )//On laisse le joueur saisir s'il veut jouer encore 
    if(reponse == oui){
     jouer(); // Ici on recommence le jeu
    }
    if(reponse == non){
        break;
    }
}
    }
}
 jouer();  
}
    

if(choix == 2){
    break;
}
}