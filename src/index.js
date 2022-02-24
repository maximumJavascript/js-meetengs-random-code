function* test() {
    // yield 1;
    // yield 2;
    // yield 3;
}

const iter = test();

for (let i of iter) {
    if (i == 2) break;
    iter.next();
}

new Promise.resolve()
    .then(x => 1)
    .then(x => 2)
    .then(x => 3);