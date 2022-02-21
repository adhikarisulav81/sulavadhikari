/* script for mode */
function myFunction() {
    var element = document.body;
    element.classList.toggle("change-mode");
 }

 /* prints the website template if a button with this function is clicked */
 function clicked() {
     var confirmation;
    var ask = confirm("Do You Want To Print My Website emplate?");
    if(ask == true){
       confirmation = window.print();
    }else{
        confirmation = alert("You Pressed Cancel!!");
    }
 }