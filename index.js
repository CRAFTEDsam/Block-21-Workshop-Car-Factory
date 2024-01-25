function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.getDescription = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};
function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}
ElectricCar.prototype.getDescription = function () {
  return `${Car.prototype.getDescription.call(this)}, ${this.range}`;
};
const penisbreath = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(penisbreath.getDescription());
