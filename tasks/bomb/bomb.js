// Сейчас console выводит "undefined", нужно это исправить


function Bomb(message, delay) {
    this.message = message;
    setTimeout(this.blowUp, delay * 1000); // взрываем через delay sec
}


Bomb.prototype.blowUp = function () {
    console.log(this.message);
};


new Bomb("Allahu akbar!", .5);
