
// primer
//https://www.velikasrbija.net/en/muzika/Braca-Bajic-Ide-Pera-jase-konja-bela

const muzika = document.querySelectorAll('h4');
let niz = [];
let rez = '';

muzika.forEach(pesma => niz.push(pesma.firstChild.href));

niz = niz.map(el => el.split('littleGames/')[1]).map(item => 'https://www.velikasrbija.net/en/' + item + '<br>');

console.log(niz);

niz.forEach(el => rez += el);

document.querySelector('body').innerHTML = rez;