const range = document.getElementById('range');
const label = document.getElementById('label');
// getComputedStyle() - funkcija koja uzima style iz css-a i getPropertyValue() uzima vrednost od style koji nam treba...
const range_width = getComputedStyle(range).getPropertyValue('width');
const label_width = getComputedStyle(label).getPropertyValue('width');
// pretvaramo u broj posto range_width i label width je string sa "px" na kraju...
const num_range_width = +range_width.substring(0, range_width.length - 2);
const num_label_width = +label_width.substring(0, label_width.length - 2);

range.addEventListener('input', (e) => {
    const value = +e.target.value; // plus + konvertuje u broj

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_range_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}