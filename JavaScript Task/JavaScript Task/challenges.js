//Task - 1
//Swap Two Number without using third variable..

var x = 10;
var y = 20;
console.log("Before Swap x ="+x+" and Y ="+y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap x ="+x+" and Y ="+y);


//Task - 2
document.write("Task - 2")
document.write("<br>")
//Calculate Total Marks and update the status student is pass,fail,and grade
var mark1,mark2,mark3,sum,avg;
mark1 = 55;
mark2 = 70;
mark3 = 87;

sum = mark1+mark2+mark3;
document.write("Total Marks is = "+sum)
document.write("<br>")
avg = (sum/300)*100;
document.write("Averge is = "+avg)
document.write("<br>")
console.log("Average is = "+avg)
if (avg > 70) {
    console.log("A grade");
    document.write("A grade")
} else if(avg > 60) {
    console.log("B grade")
    document.write("B grade")
}else if(avg > 50){
    console.log("c grade")
    document.write("C grade")
}else if(avg > 40){
    console.log("d grade")
    document.write("D grade")
}else if(avg >30){
    console.log(" Pass")
    document.write("Rssult is Pass")
}
else{
    console.log("Fail")
    document.write("Result is Fail")
}


//Task - 3
document.write("<br><br><br>")
document.write("Task - 3")
document.write("<br>")
function EvenOrOdd(x){
    if (x%2==0) {
        console.log("This Num is Even");
        document.write("This Num is Even")
    } else {
        console.log("This Num is Odd");
        document.write("This Num is Odd")
    }
}

EvenOrOdd(5)

//Task - 4
document.write("<br><br><br>")
document.write("Task - 4<br>")
document.write("Write a program that prints the numbers from 1 to 100.<br> But for multiples of three, print 'Fizz' instead ofthe number and for the multiples of five,<br> print 'Buzz'.For numbers which are multiples of both three andfive, <br>print 'FizzBuzz'.<br>");
for (let i = 1; i <= 100; i++) {
    if (i%3==0) {
        console.log("Fizz")
        document.write("Fizz"+"<br>");
    } else if(i%5==0){
        console.log("Buzz")
        document.write("Buzz<br>");
    }else if(i%15==0){
        console.log("FizzBuzz")
        document.write("FizzBuzz<br>");
    }else{
        console.log(i);
        document.write(i+"<br>");
    }
    
}


//Task - 5
document.write("<br></br>");
document.write("Task - 5<br>")
document.write("Calculate total marks and percentage. (Input to be in array)<br>")
var marks = [70,40,60,39,60];
var sum = 0;
for (const i of marks) {
   sum += i ;
}
document.write("Total Marks is = "+sum+"<br>")
console.log("Total Marks is = "+sum)
var totalmark = marks.length*100;
var average = (sum/totalmark)*100;
document.write("Average is = "+average+"<br>")
console.log("Average is "+average)

//Task - 6 
var arr1 = [1,3,4,3,4,2,7,8]

function removeDublicate(arr1){
    var arr2 = []
for (let i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) {
    arr2.push(arr1[i]);
  }
    }
    console.log(arr2)
}
removeDublicate(arr1)


//Task - 7
document.write("<br></br>");
document.write("Task - 7<br>")

var num = [10,13,8,10,23]
console.log("Maximum Difference is "+maxDiff(num,5))
document.write("Maximum Difference is "+maxDiff(num,5))

function maxDiff(num,size){
    let max_diff = 0;
    var i,j;
    for (let i = 0; i < size; i++) {
        for (let j = i+1; j < size; j++) {
            if (num[i] < num[j]) {
                max_diff=Math.max(max_diff,num[j] - num[i])
            }
            
        }
        
    }
    return max_diff;
}