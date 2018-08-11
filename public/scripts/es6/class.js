// class.js
// 8. Classes
class Pony {
  constructor(color) {
    this.color = color;
  };
  get color() {
    console.log('get color');
    return this._color;
  }
  set color(newColor) {
    //console.log("set color ${newColor}");
    this._color = newColor;
    console.log("set color: " + newColor);
  }
  static defaultSpeed() {
    return 10;
  }
  toString() {
    //return '${this.color} pony';
    return "Pony's color: " + this.color;
  }
}
const bluePony = new Pony('blue');
console.log(bluePony.toString());
 
const speed = Pony.defaultSpeed();
console.log("Pony's speed: " + speed);
 
const pony2 = new Pony();
pony2.color = 'red';
console.log("Pony2's color: " + pony2.color);
 
class Animal {
  speed() {
    return 10;
  }
}
class PonyB extends Animal {
  // override
  speed() {
    return super.speed() * 10;
  }
}
const pony3 = new PonyB();
console.log("Pony3's speed: " + pony3.speed());

// The super keyword can also be used in constructors,
// to call the base class constructor;
class AnimalB {
  constructor(speed) {
    this.speed = speed;
  }
}
class PonyC extends AnimalB {
  constructor(speed, color) {
    super(speed);
    this.color = color;
  }
}
const pony4 = new PonyC(20*100, 'white');
console.log("Pony4's speed: " + pony4.speed + "and the color: " + pony4.color)
// eof
