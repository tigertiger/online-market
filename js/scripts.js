$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    const customerNameInput = $("input#customerName").val();
    const customerAddressInput = $("input#customerAddress").val();
    const customerItemInput = $("input#customerItem").val();
    const quantityInput = $("#quantity").val();
    const colorInput = $("input:radio[name=color]:checked").val();
    
    $(".customerName").append(customerNameInput);
    $(".customerAddress").append(customerAddressInput);
    $(".customerItem").append(customerItemInput);
    $(".quantity").append(quantityInput);
    $(".color").append(colorInput);

    $("#receipt").show();
  });
});