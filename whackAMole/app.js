const grid = document.querySelector('.grid');

for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.innerText = `${i}`;
    div.className = 'square';
    grid.append(div);
}

