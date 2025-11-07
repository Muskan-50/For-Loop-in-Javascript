const tbody = document.querySelector("#loopTable tbody");
document.getElementById("runBtn").onclick = () => {
  tbody.innerHTML = ""; // reset table
  for (let i = 0; i < 5; i++) {
    const condition = `${i} < 5 → ${i < 5}`;
    const action = i < 5 ? `Console logs ${i}` : "Loop ends";
    console.log(i);
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${i}</td>
        <td>${condition}</td>
        <td>${action}</td>
      </tr>`;
  }
  // after loop finishes
  tbody.innerHTML += `
    <tr style="color:${getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')}">
      <td colspan="4"><b>✅ Loop finished after 5 iterations</b></td>
    </tr>`;
};

// FOR LOOP
// 1: Counting from 0 to 1000 
 for(let i = 0; i<=1000; i++) {
  console.log(i)
 }

 // 2.Collect user data
users = ["Sara",  "Sania", "Sawera", "Saira" ]

for (let i = 0; i < users.length; i++){
  console.log(`Sending welcome email to ${users[i]}`)
}

// 3. calculate total 
let user = ["Saima", "faria", "Sara", "Saba"]

const numbers = [10, 20, 30, 40]
let total = 0;

for(let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
 console.log("Total:" , total)


//  Calculate discount from total
let prices = [100, 200, 400, 80];
let discountedPrices = [];

for(let i = 0; i < prices.length; i++) {
  let discount = prices[i] * 0.10          //10% off
  let finalPrice = prices[i] - discount;
  discountedPrices.push(finalPrice);
}

console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);

