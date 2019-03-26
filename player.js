class Player{
    constructor(){
        this.x = 50;
        this.y = 50;
        this.height = 50;
        this.width = 50;
        this.diameter = this.width * 2;

        this.speed = 10; //Movement speed
        this.hp = 3;
    }

    move(){
        if(keyIsPressed == true){
            if(key == 'w'){ //Move left
                this.y -= this.speed;
            } else if(key == 's'){
                this.y += this.speed;
            } else if(key == 'a'){
                this.x -= this.speed;
            } else if(key == 'd'){
                this.x += this.speed;
            } else if(key == 'p'){
                this.shoot();
            }
        }
    }

    shoot(){
        let newBullet = new Bullet(this.x, this.y);
        newBullet.move();
    }

    display(){
        fill(200,0,230);
        if(this.hp > 0){
            ellipse(this.x, this.y, this.height, this.width);
        }
    }
}