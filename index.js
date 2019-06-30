// Your code here
class Polygon {
  constructor (array){
    this.array = array
  }
  get countSides(){
    return this.array.length
  }
  get perimeter(){
    let currentSum = 0
    for (var i = 0; i < this.array.length; i++) {
      currentSum += this.array[i];
    }
    return currentSum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.array.length = 3 ){
      if(this.array[0] == this.array[1] == this.array[2]){
        return true;
      }else {
      //get largest side of triangle
      let largestSide = Math.max.apply(null, this.array);
      //get index of largest side of triangle
      let indexOfLargest = this.array.indexOf(largestSide);
      //remove the largest side of the triangle from given array
      if(indexOfLargest > -1){
        this.array.splice(indexOfLargest, 1);
      }

      //sum the shorted array values
      let sum = 0;
      for (var i = 0; i < this.array.length; i++) {
        sum +=this.array[i]
      }

      if (sum > largestSide){
        this.array.push(largestSide);
        return true;
      } else{
        this.array.push(largestSide);
        return false;
      }
    }
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.array.length = 4){
      //get smallest side
      let smallestSide = Math.min.apply(null, this.array);

      //get sum of array
      let sum = 0;
      for (var i = 0; i < this.array.length; i++) {
        sum +=this.array[i];
      }
      let trueSum = sum;
      for (var i = 0; i < this.array.length; i++) {
        if(trueSum / this.array[i] > smallestSide ){
          return false;
        }else {
          return true;
        }
      }
    }

  }
  get area(){
    return this.array[0]*this.array[1];
  }
}
