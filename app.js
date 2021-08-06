const dropDownNav = document.querySelector('.dropdownNav')
const navBar = document.querySelector('.navBar')
const jump = document.querySelector('.jump')

const isChecked = false
dropDownNav.addEventListener('click', ()=>{
    checkBox()
})

function checkBox() {
    if(jump.style.display == '' || jump.style.display == 'none') {
        navBar.style.height = '100%'
        navBar.style.backgroundColor = 'white'
        jump.style.display = 'grid'
    } else {
        navBar.style.height = ''
        navBar.style.backgroundColor = ''
        jump.style.display = 'none'
    }
}

window.addEventListener('resize',() =>{
    if(window.innerWidth > 720) {
        navBar.style.height = ''
        navBar.style.backgroundColor = ''
        jump.style.display = ''
    }
})
