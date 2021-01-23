### Text Based Adventure Game :computer: :crystal_ball:
**Journey into a strange new world and prove that _a person's choices can trump fate_ in this text based adventure.**

![Gameplay Giphy](https://github.com/teyannaearle/Text-Based-Adventure-game/blob/main/HellingtonGiphy.gif?raw=true)

### Local Setup 
1. Clone to a local repo of your choosing: ```$ git clone https://github.com/teyannaearle/Text-Based-Adventure-Game.git```
2. Cd into directory: ```$ cd Text-Based-Adventure-Game```
3. Install NPM: ```$ npm install```
4. Run and attempt to beat fate! : ```$ node Hellington.js ``` 

### Dependencies

* __readlineSync__ Used to communicate with user via console

```javascript 
const readline1 = require('readline-sync') 
``` 

```javascript  
let nameInput = readline1.question(`*ahem , what is your name anyways ? \n`) // User enters Name, i.e Dan

let nameInput2 = nameInput.toUpperCase() // Changes Dan to DAN

console.log(`${breaK} Right, right, I knew that. As I was saying.. \n 
I'M HERE TO TELL YOU, PUNY LITTLE ${nameInput2} ,THAT I IN FACT CONTROL YOUR DESTINY! \n`)

// Right, right, I knew that. As I was saying.. 
// I'M HERE TO TELL YOU, PUNY LITTLE DAN ,THAT I IN FACT CONTROL YOUR DESTINY! 
```

