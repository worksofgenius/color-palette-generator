let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
}

for ( let i = 1; i <= 10; i++ ) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${randomRGB(randomValue)}</div>`;
}

document.querySelector('main').innerHTML = html;