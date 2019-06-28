class Polygon {
    constructor(sides){
        this.sides = sides;
        this.sortSides();
    };

    sortSides() {
        this.sides.sort( (a, b) => {
            if (Number.parseInt(a) < Number.parseInt(b)) {
                return -1;
            } else if (Number.parseInt(a) > Number.parseInt(b)) {
                return 1;
            } else {
                return 0;
            };
        });
    };

    get countSides() {
        return this.sides.length;
    };

    get perimeter() {
        return this.sides.reduce( (side, perimeter) => side + perimeter );
    };
};

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3 ) {
            return false;
        } else {
            return this.sides[2] < this.sides[1] + this.sides[0];
        };
    };
};