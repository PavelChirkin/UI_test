$(function(){
    var product = $('#name');
    var type = $('#type');
    var info = $('#info');
    var dateFrom = $('#dateFrom');
    var dateTo = $('#dateTo');


    var products = JSON.parse(localStorage.getItem('products'));
    if (products === null) {
        products = [];
    }

    let productId = getUrlParameterByName('productId');
    loadReservationById();

    $('#registration-button').click(function(event) {
        event.preventDefault();

        if(isItemNotValid(product) || isItemNotValid(type) || isItemNotValid(info)
            || isItemNotValid(dateFrom) || isItemNotValid(dateTo)) {
            return;
        }

        let product = createProductObject(getUniqueId(), product.val(), type.val(), info.val(),
            dateFrom.val(), dateTo.val());

        saveProduct(product);
        cleanUp();
    });

    function saveProduct(product) {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

});