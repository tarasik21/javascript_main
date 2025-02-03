function multiplyOdds(m, n) {
    let product = 1;
    for (let i = m; i <= n; i++) {
        if (i % 2 !== 0) {
            product *= i;
        }
    }
    return product;
}