const a = 4;
const b = 2;
console.log('a:' a);
console.log('b:', b);
console.log('a - b =', a - b);
console.log('a + b =', a + b);
console.log('a / b =', a / b);
console.log('a * b =', a * b);

console.log("false || true:", false || true);
console.log("false || false || false:", false || false || false);
console.log("true || false:", true || false);
console.log("false && true:", false && true);
console.log("true && false:", true && false);
console.log("true && true:", true && true);
console.log("'text' || false:", 'text' || false);
console.log("true || 'text':", true || 'text');
console.log("undefined || null || '':", undefined || null || '');
console.log("'text' && false && '':", 'text' && false && '');
console.log("true && 'text':", true && 'text');
console.log("undefined && null && false:", undefined && null && false);
console.log("!true:", !true);
console.log("!false:", !false);
console.log("!'text':", !'text');
console.log("!'':", !'');
console.log("undefined || null || 0 || '':", undefined || null || 0 || '');
console.log("amount:", null || 0 || 'default');
console.log("'text' && false:", 'text' && false);
console.log("undefined && null && 0 && false:", undefined && null && 0 && false);

console.log("false || true || false:", false || true || false);
console.log("false && true && false:", false && true && false);
console.log("true && true && true:", true && true && true);
console.log("undefined || null || 0 || '' || null:", undefined || null || 0 || '' || null);

const amount = null || 0 || 'default';
console.log("amount:", amount);

console.log("undefined && null && 0 && '' && null:", undefined && null && 0 && '' && null);
console.log("!!'text':", !!'text');
