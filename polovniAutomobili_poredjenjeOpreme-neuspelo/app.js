/*
* TODO:
*  Napraviti u PHP-u API koji prima link i obradjuje ga tako sto vraca samo sliku i nizove opreme koje posle obradis u js-u
*  Kreirati polje za token tako da samo onaj sa tokenom moze da koristi aplikaciju
*  Kada ukucas token polje nestane i savuje se token u localStorage
*  Napraviti counter tokena tako da imas lupam 1000 poziva mesecno
*  Moze isto tako da se pamti sesija ili token zapamcen kod korisnika i u textualnom fajlu bekenda na osnovu verzije browsera $_SERVER...
*
* */

/*
let niz1 = [];
let niz2 = [];
let istaOprema = [];

submitButton.addEventListener('click', () => {
    let oprema1 = document.getElementById('oprema-1').value;
    niz1 = oprema1.split('\n').filter(item => item != '');
    let oprema2 = document.getElementById('oprema-2').value;
    niz2 = oprema2.split('\n').filter(item => item != '');
    // console.log(niz1, niz2)

    istaOprema = niz1.filter(val => niz2.includes(val));
    const niz1temp = niz1.filter(val => !niz2.includes(val));
    const niz2temp = niz2.filter(val => !niz1.includes(val));

    console.log(istaOprema, niz1temp, niz2temp);

    ispisiHtmlZaUl(document.getElementById('ista_oprema'), istaOprema);
    ispisiHtmlZaUl(document.getElementById('razlicita_oprema__1'), niz1temp);
    ispisiHtmlZaUl(document.getElementById('razlicita_oprema__2'), niz2temp);
})

const ispisiHtmlZaUl = (opremaUlId, niz) => {
    let opremaHTML = ''
    niz.forEach(item => {
        opremaHTML += `<li>${item}</li>`
    })
    opremaUlId.innerHTML = opremaHTML;
};
*/

const iframeDiv1 = document.getElementById('iframeDiv1');
const iframeDiv2 = document.getElementById('iframeDiv2');

const slika1 = document.getElementById('auto1_slika');
const slika2 = document.getElementById('auto2_slika');

const link1 = document.getElementById('oprema-1');
const link2 = document.getElementById('oprema-2');

link1.addEventListener('input', (e) => {
    const link = e.target.value;
    var url = 'https://api.api-ninjas.com/v1/webscraper?url=' + link;
    var apiKey = 'K1Z/8bkCfxYbv4kEN3PcxA==LTETBGjnFT6CiTkW';
    // console.log(link);
    // console.log(url);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Api-Key', apiKey);
    // xhr.setRequestHeader('text_only', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response);
            const response = JSON.parse(this.response);
            console.log(response);

            // let output = '';
            // document.querySelector('.jokes').innerHTML = output;
        }
    };

    xhr.onerror = function () {
        console.error('Network error occurred');
    };

    xhr.send();
});