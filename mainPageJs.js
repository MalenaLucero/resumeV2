const longDelay = 800
const shortDelay = 300
const data = {
    sections: ['portfolio', 'technologies', 'education', 'languages', 'contact', 'download']
}

const initialize = () =>{
    curtainDissapear()
    if(window.innerWidth > 700){
        const menuBtn = document.getElementById('menuBtn')
        menuBtn.classList.replace('show', 'hide')
        toggleMobileMenu()
    }
}

const showSection = sectionName =>{
    const sectionsToHide = data.sections.filter(e => e !== sectionName)
    sectionsToHide.forEach(section=>{
        const sectionToHide = document.getElementById(`${section}Section`)
        sectionToHide.classList.replace('show', 'hide')
    })
    const sectionToShow = document.getElementById(`${sectionName}Section`)
    sectionToShow.classList.replace('hide', 'show')
    if(window.innerWidth < 700){
        toggleMobileMenu()
    }
}

const toggleMobileMenu = () =>{
    const menu = document.getElementById('menu')
    menu.classList.toggle('hide')
}

const curtainDissapear = () =>{
    const curtain = document.getElementById('transitionCurtain')
    setTimeout(()=>curtain.classList.replace('opacityAppear', 'opacityDisappear'),0)
    setTimeout(()=>curtain.classList.replace('show', 'hide'), longDelay)
}

const innerHTMLCleaner = (elementId) =>{
    const element = document.getElementById(elementId)
    element.innerHTML = ''
}