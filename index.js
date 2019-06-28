class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );
    }
};

class Triangle extends Polygon{
    get isValid(){
        if ( this.array.length === 3 && (
            ((this.array[0]+this.array[1])>this.array[2]) && ((this.array[1]+this.array[2])>this.array[0]) && ((this.array[0]+this.array[2])>this.array[1])
            )){
            return true;
        }else{
            return false;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        //for some reason this.countSides() does not work.
       if ( this.array.length === 4 && this.array.filter(side => side === this.array[0]).length === 4){
           return true;
       }else{
           return false;
       }
    }

    get area(){
        return this.array[0] * this.array[0];
    }
}