/*----------- get vistors count -----------------*/
function myFunction() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("visits").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "https://8v5ru96fbe.execute-api.us-east-1.amazonaws.com/Prod/get-visitor", true);
  xhttp.send();
}
