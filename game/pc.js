import place from './place.js'

const pcPlay = () => {
    let pcChoice = Math.floor(Math.random() * 7)
    console.log('%cCalculating best move...', "color:red; font-family:monaco, monospace")
    console.log(`PC played column ${pcChoice}`)
    place.play(pcChoice)
} 

export default { 
    pcPlay
}


