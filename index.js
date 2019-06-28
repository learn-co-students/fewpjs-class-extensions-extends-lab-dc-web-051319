// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, curVal) => acc + curVal, 0)
    }
}

let rectangle = new Polygon([4, 5, 4, 5])
console.log(rectangle.perimeter)

class Triangle extends Polygon {
    get isValid() {
        let a = this.array
        if (a[0] + a[1] > a[2] && a[1] + a[2] > a[0] && a[2] + a[0] > a[1]) {
            return true
        } else {
            return false
        }
    }
}

let triangle = new Triangle([10, 5, 6])
console.log(triangle.isValid)

class Square extends Polygon {
    get isValid() {
        let a = this.array
        if (a[0] === a[1] && a[1] === a[2] && a[2] === a[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0]**2
    }
}