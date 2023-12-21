var productCode = document.getElementById("productCode");
var product = document.getElementById("product");
var qty = document.getElementById("qty");
var price = document.getElementById("price");
var form = document.getElementById("form");



function validateForm(){
    var productCodeVal = productCode.value.trim();
    var productVal = product.value.trim();
    var qtyVal = qty.value.trim();
    var priceVal = price.value.trim();

    let success = true;

    if (productCodeVal === '') {
        setError(productCode,"Product Code is Required")
        
        success =  false;
    }else if(productCodeVal < 1 ){
       setError(productCode,"Product code Not allowed in Negative")
       success =  false;
    }else if(isNaN(productCodeVal)){
        setError(productCode,"Product code only Allowed in Numeric")
       success =  false;
    }
    else{
        setSuccess(productCode)
    }

    if (productVal === "") {
        setError(product,"Product is Required")
       success =  false;
    }else if(!validateProduct(productVal)){
        setError(product,"Product Must be Letter ")
        success =  false;
    }
    else{
        setSuccess(product)
    }

    if (qtyVal === "") {
        setError(qty,"Qty is Required")
       success =  false;
    }else if(qtyVal < 1 ){
        setError(qty,"Qty Not allowed in Negative")
       success =  false;
    }else{
        setSuccess(qty)
    }

    if (priceVal === "") {
        setError(price,"Price is Required")
       success =  false;
    }else if(priceVal < 1 ){
        setError(price,"Price is Not allowed in Negative")
       success =  false;
    }else{
        setSuccess(price)
    }
    return success;

}

function setError(element,message){
 console.log('element == >'+element)
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error');
}



function showData(){
    var productList;

    if (localStorage.getItem("productList") == null) {
        productList = [];
    }else{
        productList = JSON.parse(localStorage.getItem("productList"))
    }

    var data = "";

    productList.forEach(function (element,index){
        data += "<tr>";
        data += "<td>"+ element.productCode +"</td>"
        data += "<td>"+ element.product +"</td>"
        data += "<td>"+ element.qty +"</td>"
        data += "<td>"+ element.price +"</td>"
        data += "<td><button id='deleteData' onClick='deleteData("+index+")'>Delete</button><button id='updateData' onClick='updateData("+index+")'>Update</button></td>";
        data += "</tr>"
        
    })

    document.querySelector("#crudTable tbody").innerHTML = data;

}

document.onload = showData();

function addData(){
    console.log("hi")
    if (validateForm() == true) {
        var productCode = document.getElementById("productCode").value;
        var product = document.getElementById("product").value;
        var qty = document.getElementById("qty").value;
        var price = document.getElementById("price").value;

        var productList;

    if (localStorage.getItem("productList") == null) {
        productList = [];
    }else{
        productList = JSON.parse(localStorage.getItem("productList"));
    }

    productList.push({
        productCode : productCode,
        product : product,
        qty : qty,
        price : price,
    });

    localStorage.setItem("productList",JSON.stringify(productList));
     showData();
     document.getElementById("productCode").value = "";
     document.getElementById("product").value = "";
     document.getElementById("qty").value = "";
     document.getElementById("price").value = "";

    }
}

function deleteData(index){
    var productList;

    if (localStorage.getItem("productList") == null) {
        productList = [];
    }else{
        productList = JSON.parse(localStorage.getItem("productList"));
    }

    productList.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productList));
    showData();
}

function updateData(index){

    document.getElementById("addData").style.display = "none";
    document.getElementById("update").style.display ="block";


    var productList;

    if (localStorage.getItem("productList") == null) {
        productList = [];
    }else{
        productList = JSON.parse(localStorage.getItem("productList"));
    }

    document.getElementById("productCode").value = productList[index].productCode;
    document.getElementById("product").value = productList[index].product;
    document.getElementById("qty").value = productList[index].qty;
    document.getElementById("price").value = productList[index].price;

    document.querySelector("#update").onclick = function(){
       
        
        if (validateForm()==true) {
            productList[index].productCode = document.getElementById("productCode").value;
            productList[index].product = document.getElementById("product").value;
            productList[index].qty = document.getElementById("qty").value ;
            productList[index].price = document.getElementById("price").value;

            localStorage.setItem("productList",JSON.stringify(productList));
            showData();
            document.getElementById("productCode").value = "";
            document.getElementById("product").value = "";
            document.getElementById("qty").value = "";
            document.getElementById("price").value = "";
            

            document.getElementById("update").style.display ="none";
            document.getElementById("addData").style.display = "block";
            
        }
    }
}

const validateProduct = (product) => {
    return String(product)
    .match(
        /^[A-Za-z][A-Za-z0-9]*(?:_+[A-Za-z0-9]+)*$/
    );
}