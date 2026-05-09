let sales = new Map();
sales.set("January", 150);
sales.set("February", 120);
sales.set("March", 180);
sales.set("April", 100);

// console.log(sales.get("February")); // 120
// console.log(sales.has("May")); // false

// console.log(sales.size); // 4
// sales.delete("April");
// console.log(sales.has("April")); // false
sales.clear();
console.log(sales);