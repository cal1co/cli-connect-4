import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'
import cliProgress from 'cli-progress'
import gameState from './gameState.js'
import settings from './settings.js'
import place from './place.js'
import pc from './pc.js'

const load = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
const start = (ms = 1000) => new Promise((r) => setTimeout(r, ms))

async function winMsg(winner){
    const spinner = createSpinner('Checking for winner').start()
    await load()
    console.clear()
    spinner.success({text: 'Winner found!'})
    // console.clear();

    const msg = `${winner} WINS!`

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
    
    process.exit(1)
}

const placed = (col) => {
    const str = `${gameState.params.currentPlayer} PLACED IN COLUMN ${col}`
    const placedMsg = chalkAnimation.karaoke(str)
    if (gameState.params.playerTurn === 1){
        console.log(chalk.blue.bold.underline("Player X placed in column", col))
    } else {
        console.log(chalk.red.bold.underline("Player O placed in column", col))
    }
}

async function welcome(){
    console.clear();
    const msg = `CLI-CONNECT-FOUR`

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
    await start()
    
} 

async function gameTypePrompt(){
    const options = await inquirer.prompt({
        name:'gamemode',
        type: 'list',
        message:'Would you like to play Single or Multiplayer? \n',
        choices:[
            'Singleplayer',
            'Multiplayer',
        ]
    })
    settings.setPcPlayer(options.gamemode === 'Singleplayer')
}

async function playPrompt(){
    if (settings.params.pcPlayer){
        gameState.params.currentPlayer = 'X'
    }
    const playChoice = await inquirer.prompt({
        name:'move',
        type:'input',
        message:`Player ${gameState.params.currentPlayer}, place your token in a position from 0 to 6: `
    })
    place.play(playChoice.move)

    if (gameState.params.inPlay){
        await playPrompt()
    }

}


// let loadStr = 'Thinking of a move'
//     const rainbow = chalkAnimation.neon(loadStr)

//     let loadingDots = setInterval(() => {
//         rainbow.replace(loadStr += '.')
//         if (loadStr.length >= 10){
//             clearInterval(loadingDots)
//         }
//     }, 1000)



async function pcMoveMsg(){
    
    const spinner = createSpinner('Calculating the best move...').start()
    await load()
    console.clear()
    spinner.success({text: 'I have made up my mind'})
    
    
    pc.pcPlay()
}

export default {
    winMsg,
    placed,
    welcome, 
    gameTypePrompt,
    playPrompt,
    pcMoveMsg,
}