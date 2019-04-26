function setup() {

    let canvasDiv = document.getElementById('canvas');
    let width = canvasDiv.offsetWidth;
    let sketchCanvas = createCanvas(width,450);
    // console.log(sketchCanvas);
    sketchCanvas.parent("canvas");
    // frameRate(10000);

    let button = document.getElementById('clear-btn')
    button.addEventListener('click', function(e) {
        background('#FDECF3')
    })

}

function draw() {

    colors = ['#f05b87', '#ed572d', '#d2e4f5', '#55c1ef', '#f68b1f', '#f2c72f']

    if(mouseIsPressed && mouseX < width && mouseY < height && mouseY > 0 && mouseX > 0) {
        randomTriangle()
    }
}

function randomTriangle() {
    fill(colors[Math.floor(Math.random() * colors.length)]);
    noStroke();
    rand = Math.floor(Math.random()*5)
    // console.log(rand);
    switch(rand) {

        case 0:
            triangle(mouseX - 50, mouseY - 50, mouseX + 50, mouseY - 50, mouseX + 50, mouseY + 50)
            break;
        case 1:
            triangle(mouseX - 20, mouseY - 20, mouseX + 50, mouseY - 50, mouseX + 50, mouseY + 50)
            break;
        case 2:
            triangle(mouseX - 50, mouseY - 50, mouseX + 20, mouseY - 20, mouseX + 50, mouseY + 50)
            break;
        case 3:
            triangle(mouseX - 50, mouseY - 50, mouseX + 50, mouseY - 50, mouseX + 20, mouseY + 20)
            break;
        case 4:
            triangle(mouseX - 20, mouseY - 50, mouseX + 50, mouseY - 50, mouseX + 20, mouseY + 50)
            break;

    }

}