const readline1 = require('readline-sync')

const reprompt = "You're doing it wrong, you puny little human!"
const breaK = "\n -------------------------- \n"

const startGame = () => {
    console.log("Well well well, Hello there. \n", "I'm fate. I control ALL. \n")
    console.log("You simple humans always seem to think that you control your own lives. \n")
    console.log("Well, I'm here to prove to you that, YOU SILLY HUMANS ARE WRONG. \n I'M HERE TO TELL YOU ... \n")

    nameStart()

  function nameStart(){   
    let nameInput = readline1.question(`*ahem , what is your name anyways ? \n`) 
   
    if (nameInput){
    let nameInput2 = nameInput.toUpperCase()
    let firstNameLetter = nameInput[0].toUpperCase()
    let firstNameEnding = nameInput.slice(1).toLowerCase()
    nameInput = firstNameLetter + firstNameEnding
    

    console.log(`${breaK} Right, right, I knew that. As I was saying.. \n I'M HERE TO TELL YOU, PUNY LITTLE ${nameInput2} ,THAT I IN FACT CONTROL YOUR DESTINY! \n`)
    console.log("If you don't believe me... let's play a little game.\n", "I'll transmit you into an avatar body that resides in a small town called Hellington.\n")
    console.log("Your goal will be to keep your avatar alive until the end of the game.\n")
    console.log("If you do, then you will humble me by proving that mankind is in fact more powerful than I thought!\n")
    console.log(`But if your avatar dies, which i'm sure it will, THEN I WIN! \n And you, ${nameInput}, will be under my control FOR ALL OF ETERNITY! \n`)
    console.log("... or at least until you exit out of this game.\n")

    if (readline1.keyInYN("Want to give it a go? \n")) {
        console.log(` ${breaK} You're a brave one. Here are the rules : \n `)
        console.log("For yes or no answers, simply input a 'y' or an 'n'. \n ")
        console.log("Because I am not one for foolish human tricks, if you input anything other than 'y', I'll be taking that as a NO. \n")
        console.log("For multiple choice answers, simply input the corresponding number. If you choose CANCEL, the game will end. \n For any other answers, the simplest answer to the question will do. \n Choose wisely.\n")
        console.log(`Good luck. Hold on tight !!!!! ${breaK}`)
        pause()
    } else {
        console.log(`\n Just like a human to be scared. \n It's probably for the best anyway. So long ${nameInput}.`)
        quitGame()

    } 
} else {
    console.log(breaK)
    console.log(reprompt)
    console.log("You must think you're so funny, entering that when your name is ... \n")
    nameStart()
}
  }

}

function pause() {
    myVar = setTimeout(gameLoop, 20000);
}


const quitGame = () => {
    console.log("\n I'm sure we'll meet again.\n Goodbye. \n")
    process.exit()
}




const gameLoop = () => {
    let phonePassword = "4"

    console.log(`${breaK} Everything around you begins spinning as you get sucked into your screen. \n You close your eyes and scream because well.. you're being sucked into a screen. \n I mean, what kind of Jumanji type of stuff is that. Am I right? \n`)
    console.log("Anywho...Everything feels cold as you begin to open your eyes. \n You see that you are sitting up, under the covers, in a bed, in a dimly lit bedroom. \n You look down at your hands and realize that your hands are not YOUR hands.\n")
    console.log("Startled, you run over to a standing mirror that you see in the corner of the room and see that you are in a teenage body. It kind of looks like you. \n Suddenly, a deep voice asks you 'WHAT NAME DO YOU CHOOSE?' \n You begin to look around to see where the voice is coming from. \n ")
    console.log("\n (It's me by the way. I'm the voice.) \n You see no one else in the room and begin to figure it out.")
    avatarStart()
    
    
function avatarStart(){
    let avatarName = readline1.question(`Realizing that it's fate that is talking to you, and that it's time to choose your avatar's name, you respond My name is: \n `)
   
   if (avatarName){ 
    let firstLetterAvatar = avatarName[0].toUpperCase()
    let endAvatarName = avatarName.slice(1).toLowerCase()
    avatarName = firstLetterAvatar + endAvatarName
    let avatarNameU = avatarName.toUpperCase()

    console.log(`${breaK} Your phone rings. \n You take it out of your pocket and you see a random number is calling. \n`)

    if (readline1.keyInYN("Do you want to pick up the phone? \n")) {
        adventure1()
    } else {
        adventure2()
    }



    function adventure1() {
        console.log(`${breaK} You hesitantly answer and say 'Hello?' \n  You hear what appears to be a teenage boy's voice saying 'What's up loser? You tryna go on a little adventure tonight?'`)

        let response1 = ["Who the heck is this?!", "Sure, if it's fun.", "Absolutely not! I'm staying home, so that I can stay alive!"]
        let index = readline1.keyInSelect(response1, "How would you like to respond? \n")



        if (response1[index] === response1[0]) {
            console.log(`${breaK}The person on the other line responds '${avatarName}, what do you mean who is this?'`)
            console.log("'This is your cousin Ethan, you moron.' \n 'Bethany and I were thinking of jumping the fence over at that old abandoned house on Dooms road and seeing if it's really haunted.' \n")
            goOut()

        } else if (response1[index] === response1[1]) {
            console.log(`${breaK} The person on the other line responds 'Wait, I just realized I'm calling from my new number.' \n 'It's your cousin, Ethan.' \n 'Did you even know it was me wierdo?'\n`)
            console.log("'Anyways, Bethany and I were thinking of jumping the fence over at that old abandoned house on Dooms road and seeing if it's really haunted.'\n")
            goOut()

        } else if (response1[index] === response1[2]) {
            console.log(`${breaK}The person on the other end responds 'Uhhh, okay. Bye then.' \n`)
            console.log("You hang up the phone.")
            adventure2()


        } else if (response1[index] === response1[3]) {
            quitGame()

        }

    }






    function adventure2() {

        console.log(`${breaK} You put the phone back in your pocket. \n `)
        adventure2Start()

        function adventure2Start() {
            let direction = readline1.question("Do you want to stay in the room or explore the house?\n")
            let direction2 = direction.toLowerCase()

            if (direction2 === "stay" || direction2 === "stay in the room" || direction2 === "room") {
                reDirection()

            } else if (direction2 === "explore" || direction2 === "explore the house" || direction2 === "explore house" || direction2 === "house") {
                reDirection()

            } else {
                console.log(breaK)
                console.log(reprompt)
                console.log("simply input 'stay' or 'explore' ")
                adventure2Start()
            }
        }


    }


    function reDirection() {
        console.log(`${breaK} All of a sudden, the lights go out and it's pitch black. \n Luckily you can use your phone's flashlight.\n`)
        console.log("In order to open the phone, you have to enter a password. \n The password is simple enough. It's just a single number between 1 and 5.\n")

        for (let passwordAttempts = 3; passwordAttempts > 0; passwordAttempts--) {

            let passwordGuess = readline1.question("What number do you want to input? \n")

            if (passwordGuess !== phonePassword && passwordAttempts === 1) {
                console.log(`${breaK} Phone reads: TOO MANY TRIES. PHONE IS LOCKED.`)
                console.log("Guess you're stuck in the dark. \n")
                break;
            } else if (passwordGuess !== phonePassword) {
                console.log(`${breaK} Phone reads: TRY AGAIN`)

            } else if (passwordGuess === phonePassword) {
                console.log(`${breaK} Good job, you opened the phone. \n`)
                console.log("As soon as you go to turn on the flashlight, your phone dies.\n That's just bad luck.")
                break;
            }
        }
        console.log(`${breaK} You hear a loud thump behind you, in the room. \n`)
        if (readline1.keyInYN("Do you want to run out of the room? \n")) {
            console.log(`${breaK} You run out of the room as fast as you can.\n You run down a long, dark hallway and down the stairs.\n `)
            console.log("Once you make it downstairs, you hear your cousin Ethan and your friend Bethany, calling out for you from outside.\n")
            console.log("That's who called you a little while ago!!!! \n You jet out the door and right into your cousin.\n")
            runInTO()
            console.log(`Ethan rolls his eyes and turns to you saying 'Come on ${avatarName}, we're going to check out the abandoned house down on Dooms road to see if it's really haunted.'\n`)
            getGoing()
        } else {
            console.log(`${breaK} You slowly turn around to see where the noise came from. \n But because you can't see a thing, you trip over your own two feet and fall over. \n`)
            console.log("Just in time, you hear your cousin Ethan and your friend Bethany calling your name from outside. Thank goodness because things are starting to get weird.\n")
            hallwayScene()
            console.log(`'Come on ${avatarName}, we're going to check out the abandoned house on Dooms road to see if it's really haunted' says Ethan. \n`)
            getGoing()


        }


    }


    function goOut() {
        if (readline1.keyInYN("'Wanna come with?' \n")) {
            console.log(`${breaK} Ethan replies 'Okay, we're leaving my house in a few minutes. \n We'll give you a holler when we're in front of your house.'`)
            console.log("You hang up the phone and put it in your pocket. \n I guess you have a little bit of time to waste before they get there. \n ")

            choice1()

            function choice1() {
                let response2 = readline1.question("How are you going to spend it? \n Do you want to sit on the bed or look around the house? \n")
                let response2L = response2.toLowerCase()

                if (response2L === "sit" || response2L === "sit down" || response2L === "sit on the bed" || response2L === "sit on bed") {
                    console.log(`${breaK} You walk over to the bed and sit down.`)
                    console.log("Since there's nothing to do until Ethan and Bethany show up, you might as well play a game on your phone.")
                    let playOnPhone = readline1.keyInYN("Want to play on it? \n")
                    if (playOnPhone) {
                        console.log(`${breaK} You pull the phone back out of your pocket.`)
                        console.log("In order to open the phone, you have to enter a password. \n The password is simple enough. It's just a single number between 1 and 5.\n")

                        for (let passwordAttempts = 3; passwordAttempts > 0; passwordAttempts--) {

                            let passwordGuess = readline1.question("What number do you want to input? \n")

                            if (passwordGuess !== phonePassword && passwordAttempts === 1) {
                                console.log(`${breaK} Phone reads: TOO MANY TRIES. PHONE IS LOCKED.`)
                                console.log("Hahaha. Guess you'll just have to sit there twiddling your thumbs.\n")
                                console.log(`You hear a voice yell ${avatarNameU}!! \n Guess it's your lucky day. \n `)
                                hallwayScene()
                                getGoing()
                                break;
                            } else if (passwordGuess !== phonePassword) {
                                console.log(`${breaK} Phone reads: TRY AGAIN`)

                            } else if (passwordGuess === phonePassword) {
                                console.log(`${breaK} The phone opens up and you play a puzzle type game for all of five minutes before you hear your cousin screaming for you to come downstairs.`)
                                console.log("They must really be excited to go to this abandoned house.")
                                hallwayScene()
                                getGoing()
                                break;
                            }
                        }
                    } else {
                        console.log(` ${breaK} As you're just sitting there, you doze off. \n A little while later you hear your cousin yell your name.`)
                        hallwayScene()
                        getGoing()
                    }
                } else if (response2L === "look around" || response2L === "look around the house" || response2L === "take a look around" || response2L === "take a look around the house" || response2L === "look") {
                    console.log(`${breaK} You walk to the door. \n You go to turn the knob and hear a noise behind you.`)
                    console.log("You stop and quickly turn around. But you see nothing.")
                    console.log("Nervous, you speedily open the door, run down a long and dark hallway and straight down the stairs. \n")
                    console.log("You see a lightswitch at the end of the staircase, leading into the living roon. \n")

                    let turnLightOn = readline1.keyInYN("Do you want to turn on the light?")
                    if (turnLightOn) {
                        console.log(`${breaK} Wow. There are dozens of porcelain dolls in the living room. \n Their beady eyes glaring at you. \n Their menacing smiles almost taunting you.`)
                        console.log("Just in time, you hear your cousin yelling your name. \n You turn around and jet straight out the front door and right into Ethan. \n")
                        runInTO()
                        getGoing()
                    } else {
                        console.log(`${breaK} You walk around in the dark trying to make sense of all of the strange dark figures you see around you.\n`)
                        console.log("As you're walking, you bump into something and hear a loud crash. \n You wonder if there is anyone else in the house who might've heard you and you start to get nervous.\n")
                        console.log(`All of a sudden, You hear a girl's voice scream ${avatarNameU}!! You make a run straight out the front door and right into your cousin. \n`)
                        runInTO()
                        getGoing()
                    }
                } else {
                    console.log(breaK)
                    console.log(reprompt)
                    console.log(`Simply answer 'sit' or 'look around' \n ${breaK}`)
                    return choice1()
                }

            }

        } else {
            console.log(`${breaK} Ethan replies 'Whatever dude'. \n You hear Bethany in the back saying that you're no fun. \n`)
            console.log("You hang up the phone.")
            adventure2()

        }
    }



    function hallwayScene() {
        console.log(`${breaK} You get up and walk to the bedroom door. \n You turn the knob and open the door. \n`)
        console.log("You see a long and dark hallway. \n You look around for a light switch but don't see one anywhere.\n")
        console.log("Slowly, you make your way down the hallway. \n ")
        console.log("You hear something make a noise behind you. \n When you turn around to look, you see nothing. \n Alarmed, you run down the stairs and out the front door right into Ethan.\n")
        runInTO()
    }



    function runInTO() {
        console.log("Ethan says 'Whoa watch out, what is up with you today dude?' \n Before you can even speak, Bethany cuts you off saying 'Can we go already?'\n")
    }


    function avatarDone() {
        console.log(`${breaK} You are transported back into your own physical body. \n`)
        console.log("Told you that you wouldn't make it (ツ)_/¯ \n Fate will ALWAYS reign supreme!")
        if (readline1.keyInYN("Have the courage to give it another go?")) {
            gameLoop()
        } else {
            console.log(`${breaK} Of course not, puny human.\n`)
            quitGame()
        }
    }

    function getGoing() {
        console.log(`${breaK} The three of you start heading to this supposed haunted house. \n Bethany drops her phone but doesn't seem to notice\n`)
        pickUpFunc()
        function pickUpFunc() {
            let pickUpPhone = readline1.question("Do you want to pick it up? \n ")
            let pickUpPhone2 = pickUpPhone.toLowerCase()

            if (pickUpPhone2 === "yes" || pickUpPhone2 === "pick it up" || pickUpPhone2 === "y") {
                console.log(`${breaK} As you bend down to pick it up, a car speeds onto the sidewalk and right into you.. killing your avatar.\n`)
                avatarDone()

            } else if (pickUpPhone2 === "no" || pickUpPhone2 === "n") {
                console.log(`${breaK} You walk past it. \n Bethany realizes she doesn't have her phone.\n`)
                console.log("She turns around and starts to look for it. \n Ethan doesn't seem to care. He keeps on walking. \n")
                console.log("You decide you'll give it a couple of seconds before telling Bethany where her phone is, as to not look suspicious. \n")

                let seconds = ["1-5", "6-10"]
                let index = readline1.keyInSelect(seconds, "How many seconds do you want to wait? \n")

                if (seconds[index] === seconds[0]) {
                    console.log(`${breaK} You wait about 4 seconds and then bend down to pick up the phone.\n`)
                    console.log("As you grab the phone, a car speeds onto the sidewalk and right into you, killing your avatar.")
                    avatarDone()

                } else if (seconds[index] === seconds[1]) {
                    console.log(`${breaK} You slowly count to 7 and as you are about to walk over to the phone, Bethany pushes you out of the way and you both tumble to the ground.`)
                    console.log("A car crashes onto the sidewalk.. just a few feet away from the two of you. \n Bethany saved your life! \n")
                    console.log("You're in shock. Bethany exclaims 'I swear this town is just full of bad luck.' \n  You slowly stand up and help Bethany up as well. \n")
                    console.log("You both realize that Ethan went ahead without the two of you.")

                    bethQuestion()
                    function bethQuestion() {
                        let continueOn = readline1.question("Bethany asks if you still want to go to the haunted house or to just go home. \n")
                        let continueOn2 = continueOn.toLowerCase()

                        if (continueOn2 === "go to the haunted house" || continueOn2 === "haunted house") {
                            goToHauntedHouse()
                        } else if (continueOn2 === "home" || continueOn2 === "go home" || continueOn2 === "just go home") {
                            adventure2b()
                        } else {
                            console.log(breaK)
                            console.log(reprompt)
                            console.log("Simply respond 'home' or 'haunted house' \n")
                            bethQuestion()
                        }
                    }

                } else if (seconds[index] === seconds[2]) {
                    quitGame()
                }
            } else {
                console.log(breaK)
                console.log(reprompt)
                console.log("Simply input 'yes' or 'no' ")
                pickUpFunc()
            }
        }
    }

    function goToHauntedHouse() {
        console.log(`${breaK} You and Beth walk a couple blocks up until you make it to Dooms road.\n As soon as you hit Dooms road you see the abandoned house.\n`)
        console.log("No one has lived there in years.\n The windows are all shattered and the huge house looks dreary.\n You get a shiver down your spine. \n")
        console.log("Ethan yells from inside the house 'Are you two scaredy cats gonna come in or not?' \n")

        if (readline1.keyInYN("Do you want to go in?")) {
            console.log(`${breaK} You and Beth reluctantly head inside.`)
            console.log("As soon as you walk through the door, you lose sight of Bethany. \n You call out for her and for Ethan.\n You hear nothing in return.\n")

            oldLady()

            function oldLady() {
                let oldQues = readline1.question("Suddenly, you see what appears to be an old lady. You're confused. \n She says 'I can't find my son. Can you help me?' \n")
                let oldQues2 = oldQues.toLowerCase()
                if (oldQues2 === "okay" || oldQues2 === "sure" || oldQues2 === "yes" || oldQues2 === "y") {
                    console.log(`${breaK} She laughs maniacally and rushes towards you. \n You realize that she is a ghost! \n She's so fast that before you can even think about your next move, she possesses you.`)
                    console.log("Your avatar body can not survive without a living soul.\n")
                    avatarDone()
                } else if (oldQues2 === "nope" || oldQues2 === "no way" || oldQues2 === "no" || oldQues2 === "n") {
                    console.log(`${breaK} She looks sad and disappears into thin air. \n SPOOKY. \n As you begin to walk away, you fall through a hole in the floor. `)
                    console.log("Sorry to break it to ya but you don't make it. \n")
                    avatarDone()
                } else {
                    console.log(breaK)
                    console.log(reprompt)
                    console.log("simply input 'yes' or 'no' ")
                    oldLady()
                }
            }

        } else {
            console.log("You yell out to Ethan 'Sorry man, I'm just too scared' \n You turn to look at Beth and wish her good luck. \n")
            adventure2b()

        }


    }


    function adventure2b() {
        console.log(`${breaK} You head in the direction of your house. \n As you're walking away you scream out to Beth 'Thanks for saving my life!' \n`)
        console.log("You make it back to your house, safe and sound.")
        console.log("And lucky for you.. this is the end of the game. \n You are transported back into your own physical body. \n I don't know how you did it.\n")
        console.log("Lady Luck must've been on your side.\n Hmph. That's an unfair advantage! \n I'll have to take that up with her later.\n")
        console.log("Well.. I guess humans are.. UGH this is gonna be hard to get out.. \n They're not \n *cough \n as weak \n *cough *cough \n as I thought.\n")
        console.log("But I bet you can't beat me again!!")

        if (readline1.keyInYN("Want to try again?")) {
            gameLoop()
        } else {
            quitGame()
        }

    }
    

} else {
    console.log(breaK)
    console.log(reprompt)
    console.log("Simply enter what you want the name of your Avatar to be!\n")
    avatarStart()
}
}
} 




startGame()
