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
}
