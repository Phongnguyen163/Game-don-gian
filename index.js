function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }



    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveUp = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }


}

let hero = new Hero('pikachu.png', 20, 20, 200, 10)
function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top === 20 || hero.top < 20) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth - hero.size || hero.left === window.innerWidth - hero.size && hero.top === 20 || hero.top < 20) {
        hero.moveDown();

    }
    if (hero.top > window.innerHeight - hero.size || hero.top === window.innerHeight - hero.size) {
        hero.moveLeft();
    }
    if (hero.left < 0 && hero.top > 20) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(start)
}
start();