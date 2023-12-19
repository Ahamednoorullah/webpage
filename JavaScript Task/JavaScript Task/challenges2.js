//Task - 9


function cabFare(userkm,cab){
    var userkm = prompt("How Much Your Travel Distance")
    var cab = prompt("Enter Cab No :  1,Micro  2,Mini  3,Prime")

var cabSelect;

var totalpay ;

   
   switch (cab) {
    case '1':
        cabSelect="Micro";
        totalpay=userkm*10;
        break;
    case '2':
        cabSelect="Mini";
        totalpay=userkm*10;
        break;
    case '3':
        cabSelect="Prime";
        totalpay=userkm*10;
        break;
    default:
        alert("Please Enter 1 to 3 in Available  vehicle..")
        break;
   }
   alert("Your Travel Amount is "+totalpay)

document.write("Task - 8 "+"<br><br>");
document.write("User Travel Cab Is : "+cabSelect+"<br>");
document.write("User Travel Distance Is : "+userkm+" Km<br>");
document.write("Travel Total Amount Is : Rs"+totalpay+"<br>");

}
cabFare(userkm,cab);

// var btn = document.getElementById("btn");

    
// const changeColor = (e) =>{
//     const isButton = e.target.nodeName === 'BUTTON';
//     if(!isButton){
//         return
//     }
//     document.body.style.backgroundColor = e.target.value;
//     e.target.style.backgroundColor = e.target.value;

// }
// btn.addEventListener('click',changeColor);



//Task - 11
//Create a simple webpage with a button. On buttonclick, change the color of a paragraph text to arandom color

function changeColor(){
    console.log("Hello")
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background = "rgb("+red + ", " + green + ", " + blue + ")";
}

//Task - 12
//Write a function called smallestCommonMultiple thattakes two numbers as its parameters and returns thesmallest common multiple of those numbers.

// var num1 = prompt("Enter First Number");
// var num2 = prompt("Enter 2nd Number");

// function smallestCommonMultiple(num1,num2){
//     let max = num1 > num2 ? num1:num2;
//     while (true) {
        
//         if ((max%num1==0)&&(max%num2==0)) {
//            alert("This Numbers Smallest Common Multiply is : "+max)
//             break;
//         }
//         max++;
//     }
        
//     }
   
// smallestCommonMultiple(num1,num2)


function scm(){
    let firstNumber = document.getElementById("firstInput").value;
    let secondNumber = document.getElementById("secondInput").value;
    var result = document.getElementById("result");
    let max = firstNumber > secondNumber ? firstNumber:secondNumber;
    console.log(max)
    while (true) {
       
                if ((max%firstNumber==0)&&(max%secondNumber==0)) {
                    result.innerHTML="This Numbers Smallest Common Multiply is : "+max;
                    break;
                }
                max++;
            }
    
}

