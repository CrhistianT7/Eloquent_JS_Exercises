/** A Vector Type */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(another) {
        return new Vec(this.x + another.x, this.y + another.y);
    }

    minus(another) {
        return new Vec(this.x - another.x, this.y - another.y);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));

/** Group */

class Group {
    constructor() {
        this.items = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.items.push(value);
        }
    }

    delete(value) {
        this.items = this.items.filter( item => item !== value);
    }

    has(value) {
        return this.items.includes(value);
    }

    static from(object) {
        let group = new Group;
        for (let i = 0; i < object.length; i++) {
            group.add(object[i]);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));

/** iterable Groups */

/** Borrowing a Method */

let map = {one: true, two: true, hasOwnProperty: true};

// Call to be fixed:
// console.log(map.hasOwnProperty("one"));

//Call fixed:
// console.log(Object.prototype.hasOwnProperty.call(map, "one"));