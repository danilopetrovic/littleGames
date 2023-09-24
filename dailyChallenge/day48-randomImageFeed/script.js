const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5 // In case of augmenting this number, the images will repeat! The same is for getRandomNr() function if it generates the same number, then the images repeat!

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}