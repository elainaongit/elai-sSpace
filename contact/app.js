const socialMedia = document.querySelectorAll('.container')

const dropDownNav = document.querySelector('.dropdownNav')
const navBar = document.querySelector('.navBar')
const jump = document.querySelector('.jump')

socialMedia.forEach(div => {
    div.addEventListener("click", () => {
        if(div.id == 'discord') {
            //copy to clipboard
            navigator.clipboard.writeText('3laina#3591')
            let copyAlert = document.getElementById('alert')
            copyAlert.style.display = 'block'
            setTimeout(function(){ 
                copyAlert.style.display = 'none'; 
            },3000)
        } else if (div.id == 'reddit') {
            window.location.href='https://www.reddit.com/user/HaReeL'
        } else if (div.id == 'steam') {
            window.location.href='https://www.steamcommunity.com/id/3lainawa'
        } else if (div.id == 'facebook') {
            window.location.href='https://www.facebook.com/profile.php?id=100014623566775'
        } else if (div.id == 'stackOverFlow') {
            window.location.href='https://stackoverflow.com/users/16432325/elainastackoverflow'
        }
    })
})

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
