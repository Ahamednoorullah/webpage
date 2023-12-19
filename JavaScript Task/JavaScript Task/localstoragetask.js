localStorage.setItem("name",'Abdul');
localStorage.setItem("id",'2');



const localtd1 = localStorage.getItem("name");
const loacaltd2 = localStorage.getItem("id");

const td1 = document.querySelector(".td1");
const td2 = document.querySelector(".td2");



td1.textContent = localtd1;
td2.textContent = loacaltd2;

let data = [{
    "name":"Ahamed",
    "id":"3",
    "email":"aha@gmail.com",
    "mobileNo":"7639513245"
},
{
    "name":"Raj",
    "id":"4",
    "email":"raj@gmail.com",
    "mobileNo":"7678993245"
},
{
    "name":"Muhammed",
    "id":"5",
    "email":"abc@gmail.com",
    "mobileNo":"6856513245"
}
]

localStorage.setItem('userinfo',JSON.stringify(data));


const user =JSON.parse(localStorage.getItem("userinfo"));

console.log(user)

let dyHTMLcontent = '';
for (let row = 0; row < user.length; row++) {
    dyHTMLcontent += `<tr>
        <td>${user[row].name}</td>
        <td>${user[row].id}</td>
        <td>${user[row].email}</td>
        <td>${user[row].mobileNo}</td>
    </tr>`
    
}

let ele = document.getElementById("dyTableRows");

ele.innerHTML = dyHTMLcontent;


function myFunction(){
     let dyHTMLcontent1 = '';
     const inputValue = document.querySelector("#inputUser").value;
     var count = 0;
    
    for (let i = 0; i < user.length; i++) {
       
        if (user[i].id == inputValue) {
           count++;
            dyHTMLcontent1 += `<tr>
        <td>${user[i].name}</td>
        <td>${user[i].id}</td>
        <td>${user[i].email}</td>
        <td>${user[i].mobileNo}</td>
        </tr>`
        break;
        }
        
    }
    if (count == 0 ) {
       
        document.getElementById("check").innerText="Invalid Credentials"
    }else{
        document.getElementById("check").innerText=""
    }
    let ele = document.getElementById("dyTableRows1");

ele.innerHTML = dyHTMLcontent1;

}

sessionStorage.setItem("para",JSON.stringify('This is Para'));

document.getElementById("ss").innerHTML= sessionStorage.getItem('para');

sessionStorage.removeItem('para');

