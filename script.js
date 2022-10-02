const randomColor = () => {
    const color = Math.floor(Math.random()*16777215).toString(16);

    const hashColor = '#' + color;

    return hashColor;
}

const changeSvgFill = () => {
    const svgElement = document.getElementById('svg');

    svgElement.style.fill = randomColor();
}