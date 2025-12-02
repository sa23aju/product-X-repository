// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Handle form submission
document.getElementById("buy-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const qty = Number(document.getElementById("qty").value);
  const message = document.getElementById("message");

  if (qty < 1 || qty > 10) {
    message.textContent = "Quantity must be between 1 and 10.";
    return;
  }

  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  message.textContent = `${qty} × Product X (${color}, ${size}) added to cart.`;
});
