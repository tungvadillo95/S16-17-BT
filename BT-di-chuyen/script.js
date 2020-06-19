/**
 * Created by nhatnk on 4/26/17.
 */
function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('ok ' + this.left);
    }
    this.moveDown = function () {
        this.top += 20;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('ball.png', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top == 20) {
        hero.moveRight();
    }
    else if (hero.top < window.innerHeight - hero.size && hero.left == 1350) {
        hero.moveDown();
    }
    else if (hero.left > 20) {
        hero.moveLeft();
    }
    else if (hero.top > 20) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10);
}
start();
