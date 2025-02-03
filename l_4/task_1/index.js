function sumOf(a, n) {
    let sum = 0; 
    for (let i = a; i <= n; i++) { 
        sum += i; 
    }
    return sum; 
}


console.log(sumOf(1, 5)); 
