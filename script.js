const menuButton = document.getElementById('console-menu-btn')
const consoleMenu = document.querySelector('.console-menu')

menuButton.addEventListener('click', () => {
    consoleMenu.classList.toggle('hidden')
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('console')) {
        consoleMenu.classList.toggle('hidden')
    }
})