const order={ drink:"matcha", size:"medium", milk:"regular",
    extras:[] };
const extraLabels = {
  extrashot: "Extra Shot",
  vanilla: "Vanilla Syrup",
  caramel: "Caramel Syrup",
  whipped: "Whipped Cream",
};
const drinkColors = {
    espresso: "#6f4e37",
    latte: "#d3bfa0",
    cappuccino: "#c0a080",
    chai: "#f5deb3",
    mocha: "#3e2723",
    matcha: "#90ee90"
};
const sizeHeight = {
    small: "40%",
    medium: "65%",
    large: "90%"
};
const prices1 = {
    espresso: 2.5,
    latte: 3.5,
    cappuccino: 3.0,
    chai: 3.0,
    mocha: 3.5,
    matcha: 4.0,
    medium: 0.5,
    large: 0.75,
    carmel: 0.5,
    vanilla: 0.5,
    whipped: 0.5,
    extrashot: .75
};

const prices = {
  espresso: 2.5,
  latte: 3.8,
  cappuccino: 3.6,
  matcha: 4.0,
  chai: 3.4,
  small: 0.0,
  medium: 0.5,
  large: 1.0,
  extrashot: 0.75,
  vanilla: 0.6,
  caramel: 0.6,
  whipped: 0.5,
};
document.querySelectorAll('input[name="milk"]').forEach((input) => {
  input.addEventListener("change", function () {
    order.milk = this.value;
    updateCup();
    updateSummary();
  });
});
const cup = document.getElementById("cup");
const summary = document.getElementById("summary");


document.querySelectorAll("input[name='drink']").forEach((input) => {
    input.addEventListener("change", function (){        
        order.drink = this.value;   
        console.log(order.drink);
            updateCup();
    updateSummary();
    });
});
    
function updateCup() {
    cup.style.setProperty("--fill-color", drinkColors[order.drink]);
    cup.style.setProperty("--fill-height", sizeHeight[order.size]);
    Object.keys(extraLabels).forEach((extras) => {
        document.getElementById("badge-" + extras).classList.toggle("visible", order.extras.includes(extras));
    });
    
}
document.querySelectorAll('input[name="extras"]').forEach((input) => {
  input.addEventListener("change", function () {
    if (this.checked) {
      order.extras.push(this.value);
    } else {
      const i = order.extras.indexOf(this.value);
      order.extras.splice(i, 1);
    }
    console.log(order);
    updateCup();
    updateSummary();
  });
});
// document.querySelectorAll('input[name="extras"]').forEach((input) => {5
//     input.addEventListener("change", function () {
//         const extra = this.value;
//         if (this.checked) {
//             order.extras.push(extra);
//         } else {
//             const i = order.extras.indexOf(this.value);
//             order.extras.splice(i, 1);
            
//         }
//         console.log(order.extras);
//         updateCup();
//     });
// });

function updateSummary1() {
    let total = prices[order.drink] + prices[order.size];
    order.extras.forEach((e) => {
        total += prices[e];
    });

    const extraRows = order.extras.map((e) => `
        <div class="summary-row">
            <span>${extraLabels[e]}</span>
            <span>+$${prices[e].toFixed(2)}</span>
        </div>
    `).join("");
    summary.innerHTML = `
        <h3>Your Order</h3>
        <div class="summary-row">
            <span>${order.drink}</span>
            <span>+$${prices[order.drink].toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>${order.size}</span>
            <span>+$${prices[order.size].toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>${order.milk}</span>
            <span>—</span>
        </div>
        <div class="summary-row">
             <span>${order.extras.join(", ")}</span>
            <span>—</span>
        </div>
        ${extraRows}
        <div class="summary-row total">
            <strong>Total</strong>
            <strong>+$${total.toFixed(2)}</strong>
        </div>
    `;  
}
function updateSummary() {
  const cap = (s) => s[0].toUpperCase() + s.slice(1);
  const milkLabel =
    order.milk === "none" ? "No Milk" : cap(order.milk) + " Milk";

  let total = prices[order.drink] + prices[order.size];
  order.extras.forEach((e) => {
    total += prices[e];
  });

  const extraRows = order.extras
    .map(
      (e) => `
      <div class="summary-row">
        <span>${extraLabels[e]}</span>
        <span>+$${prices[e].toFixed(2)}</span>
      </div>`,
    )
    .join("");

  summary.innerHTML = `
    <h3>Your Order</h3>
    <div class="summary-row">
      <span>${cap(order.drink)}</span>
      <span>$${prices[order.drink].toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>${cap(order.size)}</span>
      <span>${prices[order.size] > 0 ? "+$" + prices[order.size].toFixed(2) : "—"}</span>
    </div>
    <div class="summary-row">
      <span>${milkLabel}</span>
      <span>—</span>
    </div>
    ${extraRows}
    <hr class="summary-divider" />
    <div class="summary-total">
      <span>Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;
}
document.querySelectorAll('input[name="size"]').forEach((input) => {
  input.addEventListener("change", function () {
    order.size = this.value;
    console.log(order);
    updateCup();
    updateSummary();
  });
});
document.querySelectorAll('input[name="size"]').forEach((input) => {
  input.addEventListener("change", function () {
    order.size = this.value;
    console.log(order);
    updateCup();
    //updateSummary();
  });
});

