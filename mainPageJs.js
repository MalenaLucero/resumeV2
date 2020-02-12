const longDelay = 800
const shortDelay = 300

const initialize = () =>{
    curtainDissapear()
}

const curtainDissapear = () =>{
    const curtain = document.getElementById('transitionCurtain')
    setTimeout(()=>curtain.classList.replace('opacityAppear', 'opacityDisappear'),0)
    setTimeout(()=>curtain.classList.replace('show', 'hide'), longDelay)
}