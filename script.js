function menu (class_selector) {
        const menu_btn = document.querySelector(class_selector)
        if(menu_btn) {
            menu_btn.addEventListener('click', () => {
                const menu_items = document.querySelector('.navbar ul')
                menu_items.classList.toggle('show')
            })
        }
}

addEventListener('DOMContentLoaded', () => {
    menu('.menu-icon');
    menu('.navbar ul');
})
