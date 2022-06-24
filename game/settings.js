
const params = {
    pcPlayer:null
}

const setPcPlayer = (bool) => {
    params.pcPlayer = bool
    // console.clear()
    return bool
}

export default {
    params,
    setPcPlayer
}