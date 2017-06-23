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
  const name = $("#name").val();
  const phoneNumber = $("#phoneNumber").val();
  const address = $("#address").val();

  if (!name || !phoneNumber || !address) {
    Materialize.toast('Name, phone number, and address fields must be completed.', 4000);
  }
  else if (subTotal === 0) {
    Materialize.toast('You must add items to the cart before checking out.', 4000);
  }
  else {
    Materialize.toast('Order placed!', 4000);
  }
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
