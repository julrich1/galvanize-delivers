let TAX_RATE = 10;

let subTotal = 0;

$(".card").on("click", "a", function(event) {
  const $tr = $("<tr>");
  const $tdProduct = $("<td>");
  const $tdPrice = $("<td>");

  const productName = $(event.target).parent().siblings(".card-content").children()[0].innerText;
  const productPrice = $(event.target).parent().siblings(".card-content").children()[1].innerText;

  $tdProduct.text(productName);
  $tdPrice.text(productPrice);
  subTotal += Number(productPrice.slice(1));

  $tr.append($tdProduct);
  $tr.append($tdPrice);

  $("#product-table").append($tr);

  calculateTotal();
});

$("#place-order").click(function() {
  
});

function calculateTotal() {
  $totalTable = $("#total-table");

  $totalTable.empty().append(createTr("Subtotal", subTotal));
  $totalTable.append(createTr("Tax", subTotal / TAX_RATE));
  $totalTable.append(createTr("Total", (subTotal / TAX_RATE) + subTotal));
}

function createTr(text, price) {
  const $tr = $("<tr>");
  const $tdSubtotal = $("<td>");
  const $tdSubtotalPrice = $("<td>");

  $tdSubtotal.text(text);
  $tdSubtotalPrice.text("$" + price.toFixed(2));

  $tr.append($tdSubtotal);
  $tr.append($tdSubtotalPrice);

  return $tr;
}
