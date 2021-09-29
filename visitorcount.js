/*----------- get vistors count -----------------*/
function myFunction(){
    fetch("https://8v5ru96fbe.execute-api.us-east-1.amazonaws.com/Prod/get-visitor")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor").innerHTML=body
    })
    .catch(function(error) {
      console.log(error); 
    });  
}  
