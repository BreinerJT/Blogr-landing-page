const showMenu = document.querySelector(".show-menu")
const closeMenu = document.querySelector(".close-menu")
const links = document.querySelector(".links")
const drops = document.querySelectorAll(".drop")



showMenu.addEventListener("click", () => {
    links.classList.remove("hide")
    closeMenu.classList.remove("hide")
    showMenu.classList.add("hide")
})
closeMenu.addEventListener("click", () => {
    links.classList.add("hide")
    closeMenu.classList.add("hide")
    showMenu.classList.remove("hide")
})

drops.forEach(drop => {
    drop.addEventListener("click", (e) => {
        const element = e.currentTarget
        const dropdown = element.querySelector(".dropdown")
        const arrow = element.querySelector(".js-arrow")
        arrow.classList.toggle("rotate")
        drops.forEach(item => {
            if(item !== element){
                const dropdownItem = item.querySelector(".dropdown")
                dropdownItem.classList.add("hide")
                arrow.classList.toggle("rotate")
            }
            dropdown.classList.toggle("hide")
        })
    })
})