input = require('readline-sync');

class Game{
    takeTurn(sPlayerInput){
        let aGameOutput = [`I know you are ${sPlayerInput} but what am I?`];
        return aGameOutput;
    }
    prompt(){
        return "what are you? "
    }
    isDone(){
        return false;
    }
}

const oGame = new Game();
while(!oGame.isDone()){
    const sIAm = input.question(oGame.prompt());
    console.log(oGame.takeTurn(sIAm));
}