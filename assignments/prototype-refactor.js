/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
 
class GameObject{
    constructor(gameObjAttrs){
        this.createdAt = gameObjAttrs.createdAt,
        this.name = gameObjAttrs.name,
        this.dimensions = {
            length: gameObjAttrs.length,
            width: gameObjAttrs.width,
            height: gameObjAttrs.height
        }
    }

    destroy(){
        console.log(`${this.name} was removed from the game`);
        return `${this.name} was removed from the game`
    }
}