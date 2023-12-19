// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(json => console.log(json))

let stdDetails = [
    {
        "name":"Smith",
        "id":"1",
        "status":"pass",
        "sperc":"78"
    },
    {
        "name":"John",
        "id":"2",
        "status":"fail",
        "sperc":"32"
    },
    {
        "name":"adam",
        "id":"3",
        "status":"pass",
        "sperc":"72"
    },
    {
        "name":"David",
        "id":"4",
        "status":"pass",
        "sperc":"62"
    }
]

let dyHTMLcontent = '';
for (let row = 0; row < stdDetails.length; row++) {
    dyHTMLcontent += `<tr>
        <td>${row+1}</td>
        <td>${stdDetails[row].name}</td>
        <td>${stdDetails[row].id}</td>
        <td>${stdDetails[row].status}</td>
        <td>${stdDetails[row].sperc}</td>
    </tr>`
    
}

let ele = document.getElementById("dyTableRows");

ele.innerHTML = dyHTMLcontent;

function displayBlock(){
    document.getElementById("table").style.display="block";
}
function displayNone(){
    document.getElementById("table").style.display="none";
}


//Task - String - 10

const sentences = "The Quick brown fox jumps over the  lazy dog";
function longestWord(sentences){

 strArray = sentences.split(' ');
 strArraySorted=strArray.sort((a,b) => 
 b.length-a.length
)
return (strArraySorted[0])
}

console.log(longestWord(sentences))

//Task String - 11 
const words = "hello every one and the message"

function CapitalizedFirstLetter(words){

   
    const word =words.split(' ');

    for (let i = 0; i < word.length; i++) {
       
      
       word[i] = word[i][0].toUpperCase() + word[i].substring(1)
       if (word[i] == 'The' || word[i] == 'And') {
        word[i] = word[i][0].toLowerCase() + word[i].substring(1)
       }
     
     
      
    }
     const sentence = word.join(' ')
  return sentence;

}
   
console.log(CapitalizedFirstLetter(words))