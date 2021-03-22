class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.a=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10)
    {
    var b = [this.body.position.x,this.body.position.y];
    this.a.push(b);
    }
    for(var i = 0;i<this.a.length;i++)
    {
      image(this.smokeimage,this.a[i][0],this.a[i][1])
    }
  }
}
