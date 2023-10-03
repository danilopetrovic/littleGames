/*
* TODO Treba napraviti php skriptu koja uzima ajaxom link sa polovniAutomobili i vraca HTML...
*  */

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
    console.log(link);
    const iframe = document.createElement('iframe');
    iframe.id = 'externalPage1';
    iframe.src = link;
    iframeDiv1.innerHTML = '';
    iframeDiv1.appendChild(iframe);
    iframe.onload = () => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        // console.log(this);
        // console.log(e);
        const pokupiSliku1 = document.querySelector('#externalPage1').ownerDocument.images[3].currentSrc;
        // console.log(pokupiSliku1);

    }

});

