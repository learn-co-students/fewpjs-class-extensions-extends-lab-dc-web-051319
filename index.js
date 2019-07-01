// Your code here

class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
    this.count = this.sidesArray.length;
  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter() {
    let totalPerim = 0;
    for (let i = 0; i < this.sidesArray.length; i++) {
      totalPerim += this.sidesArray[i];
    }
    return totalPerim;
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.count == 3) {
      let side1 = this.sidesArray[0]
      let side2 = this.sidesArray[1]
      let side3 = this.sidesArray[2]
        if ((side1+side2 > side3) && (side1+side3 > side2) && (side2 +side3 > side1)) {
          return true;
        } else {
          return false;
        }
      }
  }
}


class Square extends Polygon {

  get isValid() {
    if (this.count == 4) {
      let side1 = this.sidesArray[0]
      let side2 = this.sidesArray[1]
      let side3 = this.sidesArray[2]
      let side4 = this.sidesArray[3]
        if ((side1 === side2) && (side1 === side3) && (side1 === side4)) {
          return true;
        } else {
          return false;
        }
      }
  }

  get area() {
      if (this.count !== 4) return;
      return this.sidesArray[0] * this.sidesArray[0]
    }
}
