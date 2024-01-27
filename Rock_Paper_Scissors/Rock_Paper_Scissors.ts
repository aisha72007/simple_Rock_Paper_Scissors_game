let options = ['Scissors', 'Rock', 'Paper']
let randomNumber = Math.floor(Math.random() * 3);

let selection = process.argv[2];
let enemySelection = options[randomNumber];

console.log("Your choice: " + selection)
console.log("Your opponent: " + enemySelection)

if(selection == enemySelection){
    console.log("Draw!")
}

if(selection == 'Scissors'){
    if(enemySelection == 'Rock'){
        console.log("You lost")
    }
    if(enemySelection == 'Paper'){
        console.log("You won")
    }
}

if(selection == 'Rock'){
    if(enemySelection == 'Scissors'){
        console.log("You won")
    }
    if(enemySelection == 'Paper'){
        console.log("You lost")
    }    
}

if(selection == 'Paper'){
    if(enemySelection == 'Scissors'){
        console.log("You lost")
    }
    if(enemySelection == 'Ston'){
        console.log("You won")
    }    
}
