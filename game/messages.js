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

const winMsg = () => {
    console.log(`%c${gameState.params.currentPlayer} WINS!`, "color:orange; font-family:sans-serif")
    gameState.params.winner = gameState.params.currentPlayer
    gameState.params.inPlay = false
}

const placed = (col) => {
    console.log('YOU PLACED IN COLUMN', col)
}

const load = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
const start = (ms = 1000) => new Promise((r) => setTimeout(r, ms))

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
    const playChoice = await inquirer.prompt({
        name:'move',
        type:'input',
        message:'Place your token in position 0 to 6'
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