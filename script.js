let text =document.querySelector('.text')
for (let index = 0; index < 24; index++) {
    let span = document.createElement('span')
    span.innerHTML = '<b> 3D </b> TEXT '
    span.style.setProperty('--i', index)
    text.appendChild(span)
}