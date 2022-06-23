import place from './place.js'

const pcPlay = () => {
    let pcChoice = Math.floor(Math.random() * 7)
    place.play(pcChoice)
} 

export default { 
    pcPlay
}


