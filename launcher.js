class launcher{

    constructor(body1,pointB)
    {
        var options={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:50
        }
        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    } 
    
    fly()
    {
        this.launcher.bodyA=null;
    }
    
    display(){
        if(this.sling.bodyA){  
        var point1=this.launcher.bodyA.position;
        var point2=this.pointB;
        strokeWeight(4);
        line(point1.x,point1.y,point2.x,point2.y);
    }
    }
    }