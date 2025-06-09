let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";

let warning = document.getElementById("warningMessage");

let size = document.getElementById("imageWidth");

size.textContent = defaultImageWidth + "px";

function dec() {
    let widthh = parseInt(defaultImageWidth) - 5;

    if (widthh >= 100) {
        warning.textContent = "";
        imageElement.style.width = widthh + "px";
        size.textContent = widthh + "px";
        defaultImageWidth = widthh;
    } else {
        warning.textContent = "Can't visible increase size of an image";
        warning.style.color = "red";
    }

}

function inc() {
    let widthh = parseInt(defaultImageWidth) + 5;

    if (widthh <= 300) {
        warning.textContent = "";
        imageElement.style.width = widthh + "px";
        size.textContent = widthh + "px";
        defaultImageWidth = widthh;
    } else {
        warning.textContent = "Too big increse size of an image";
        warning.style.color = "red";
    }

}
