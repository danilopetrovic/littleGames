const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
        removeActiveClasses();
        e.target.closest('div').classList.add("active")
    })
})

const removeActiveClasses = () => {
    panels.forEach(panel => panel.classList.remove("active"));
}