// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    // a starts as 0, shovel left to right each item
    return this.sides.reduce((a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0]))
  }
}

class Square extends Polygon {
  get isValid() {
    return ((this.sides[0] == this.sides[1]) && (this.sides[0] == this.sides[2]) && (this.sides[0] == this.sides[3]))
  }
  get area() {
    return this.sides[0] * this.sides[0]
  }
}