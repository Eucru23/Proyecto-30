class Block{
  constructor(x, y, width, height) {
      var options = {
          friction:20,
          density: 2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);

      this.image = loadImage("block.png");
    }
   

    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
 
      
      if(this.body.speed < 3){
   
        push();
         translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();    
  }
  else {
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    World.remove(world, this.body);
    pop();
  }
  }
} 