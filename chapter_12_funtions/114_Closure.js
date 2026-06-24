function makeCounter(start = 0) {
    let count = start;
    return {
        incr() { count++ },
        decr() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.incr();
counter.incr();
counter.incr();
console.log(counter.get());
counter.decr();
counter.decr();
console.log(counter.get());