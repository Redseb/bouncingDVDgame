class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.h = 10;
        this.w = 10;
        this.speed = 20;
    }

    move(){
        this.y += this.speed; //Move up at speed of 'speed'
        fill(255);
        ellipse(this.x, this.y, this.w, this.h);
    }


}