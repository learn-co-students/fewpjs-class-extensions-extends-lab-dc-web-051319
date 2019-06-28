// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((sum, side) => sum + side, 0)
    }


}

class Triangle extends Polygon {
    get isValid(){
        let [a,b,c] = this.sides 
        if (a + b < c || a + c < b || b + c < a ) {
            return false 
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid(){
        let [a,b,c,d] = this.sides
        if (a == b && b == c && c == d) {
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0]**2
    }
}