#! /usr/bin/env node

import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'
import cliProgress from 'cli-progress'

// chalkAnimation.neon('Welcome to Connect 4')

const load = (ms = 3000) => new Promise((r) => setTimeout(r, ms))

// let playerName = null
// async function playerDecision() {
//     const options = await inquirer.prompt({
//         name: 'name',
//         type:'input',
//         message: 'What is your name?',
//         default(){
//             return 'Player';
//         }
//     })

//     playerName = options.player_name;
// }
// await playerDecision()


// chalk.bgAnsi256(playerName)


const msg = 'Welcome to CONNECT FOUR'
figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data))
})

async function gameTypePrompt(){
    const options = await inquirer.prompt({
        name:'Single or Multiplayer?',
        type: 'list',
        message:'Would you like to play Single or Multiplayer? \n',
        choices:[
            'Singleplayer',
            'Multiplayer',
        ]
    })
}
// await gameTypePrompt()

// let loadStr = 'Thinking of a move'
//     const rainbow = chalkAnimation.neon(loadStr)

//     let loadingDots = setInterval(() => {
//         rainbow.replace(loadStr += '.')
//         if (loadStr.length >= 10){
//             clearInterval(loadingDots)
//         }
//     }, 1000)



async function pcMoveLoad(){
    
    const spinner = createSpinner('Calculating the best move...').start()
    await load()

    // spinner.success({text: 'oh, correct!'})
    spinner.error({text: 'uh oh, incorrect!'})
    // process.exit(1)
    await load()

    console.clear()
}

// await pcMoveLoad()