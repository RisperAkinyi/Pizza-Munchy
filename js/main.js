function order(size, crust, meatyTopping, veggyTopping ){
    this.size = size;
    this.crust = crust;
    this.meatyTopping = meatyTopping;
    this.veggyTopping = veggyTopping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaMeatyTopping = ["Pepperoni", "Sausage", "Chicken",];
var pizzaVeggyTopping = ["Onion", "Pineapple", "Spinach",];

order.prototype.cost = function(){
    if (this.size === pizzaSize[0]){
        this.prize += 300;
    }
    else if (this.size === pizzaSize[1]){
        this.prize += 500;
    }
    else if (this.size === pizzaSize[2]){
        this.prize += 600;
    }

    if (this.crust === pizzaCrust[0]){
        this.prize += 100;
    }
    else if (this.size === pizzaCrust[1]){
        this.prize += 130;
    }
    else if (this.size === pizzaCrust[2]){
        this.prize += 150;
    }

    if (this.meatyTopping === pizzaMeatyTopping[0]){
        this.prize += 100;
    }
    else if (this.size === pizzaMeatyTopping[1]){
        this.prize += 100;
    }
    else if (this.size === pizzaMeatyTopping[2]){
        this.prize += 100;
    }


}
