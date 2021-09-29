/*----------- get vistors count -----------------*/
function myFunction(){
    fetch("https://api.rajanpanchal.net/Prod/getVisitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor").innerHTML=body
    })
    .catch(function(error) {
      console.log(error); 
    });  
}  
