class Polygon{
  constructor(arrayOfSides){
    this.arrayOfSides = arrayOfSides;
  }

  get countSides(){
    return this.arrayOfSides.length
  }

  get perimeter(){
    return this.arrayOfSides.reduce((accumulator, currentSide) => {return currentSide += accumulator})
  }
}

class Triangle extends Polygon{
  get isValid(){
  if (this.countSides === 3){
    if (this.arrayOfSides[0] + this.arrayOfSides[1] > this.arrayOfSides[2] &&
    this.arrayOfSides[0] + this.arrayOfSides[2] > this.arrayOfSides[1] &&
    this.arrayOfSides[1] + this.arrayOfSides[2] > this.arrayOfSides[0]) {
      return true
    } else {
    return false
    }
  }
  }
}

class Square extends Polygon{
  get isValid(){

  }
}
