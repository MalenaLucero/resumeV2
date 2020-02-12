const longDelay = 800
const shortDelay = 300

const initialize = () =>{
    intro()
}

const intro = () =>{
    const englishHi = document.getElementById('englishHi')
    const spanishHi = document.getElementById('spanishHi')
    const japaneseHi = document.getElementById('japaneseHi')
    const whoAmI = document.getElementById('whoAmI')
    englishHi.classList.replace('dissapear', 'appear')
    setTimeout(()=>spanishHi.classList.replace('dissapear', 'appear'), shortDelay)
    setTimeout(()=>japaneseHi.classList.replace('dissapear', 'appear'), shortDelay*2)
    setTimeout(()=>whoAmI.classList.replace('dissapear', 'appear'), shortDelay*2 + longDelay)
}

const transitionCurtain = () =>{
    const curtain = document.getElementById('transitionCurtain')
    setTimeout(()=>curtain.classList.replace('curtainOpacityDissapear', 'curtainOpacityAppear'), 0)
    setTimeout(()=> curtain.classList.replace('curtainOpacityAppear', 'curtainOpacityDissapear'),longDelay)

}