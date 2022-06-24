import place from './place.js'

const pcPlay = (test) => {
    let pcChoice = Math.floor(Math.random() * 7)
    if (test){
        return pcChoice
    }
    place.play(pcChoice)
} 

export default { 
    pcPlay
}


