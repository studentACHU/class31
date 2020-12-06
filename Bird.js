class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.simage=loadImage("sprites/smoke.png");
  this.trojectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){



    
    var position=[this.body.position.x,this.body.position.y];
    this.trojectory.push(position);
    }
    for(var i=0;i<this.trojectory.length;i++){
    image(this.simage,this.trojectory[i][0],this.trojectory[i][1]);


    }
  
}
}
