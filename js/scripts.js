$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    const customerNameInput = $("input#customerName").val();
    const customerAddressInput = $("input#customerAddress").val();
    const customerItemInput = $("input#customerItem").val();
    
    $(".customerName").append(customerNameInput);
    $(".customerAddress").append(customerAddressInput);
    $(".customerItem").append(customerItemInput);

    $("#receipt").show();
  });
});