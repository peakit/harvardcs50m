class Set {

    constructor(arr) {
        this.arr = arr
    }

    add(val) {
        if (!this.has(val)) {
            this.arr.push(val)
        }
    }

    has(val) {
        return this.arr.includes(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x!== val)
    }

    get size() {
        return this.arr.length
    }
}

const s = new Set([1,2,3,4])

s.add(1)
console.log("After s.add(1), size is", s.size)

s.add(6)
console.log("After s.add(6), size is", s.size)
console.log("Does s contains 6", s.has(6))

s.delete(6)
console.log("After s.delete(6), now the size is", s.size, "and does s contains 6", s.has(6))

// in case you want to extend this Set further..
class MySet extends Set {

}