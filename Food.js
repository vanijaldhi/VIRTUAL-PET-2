class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed = 0;
        this.image = loadImage("Milk.png");

     }
    
    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){
        this.foodStock = this.foodStock - 1;

    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        

        text("food" + this.foodStock, 100,100);

        if(this.foodStock != 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 == 0){
                    x = 80;
                    y = y+50;
                 } 
                 image(this.image,x,y,70,70);
                 x = x +  30;

            }
        }
        fill("white");
        textSize(15);
        if(lastFed >= 12){
            test("Last Feed : " + lastFed % 12 + " PM ", 350,30);
         }
         else if(lastFed == 0){
             text("Last Feed : 12 AM",350,30);
         }
         else{
            text("Last Fed : " + lastFed +" AM ",350,30);
         }
    }
}