var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 =  document.getElementById('id03');
var notebooknum = 0;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal3) {
        modal.style.display = "none";
    }
}

function check(form)
{
if(form.nbname.value == "Psych 201")
  {
    window.open('otheruser1.html')
  }
 else
 {
   alert("Not an Acceptable Notebook Name")
  }
}

function check2(form)
{
if(form.nbname.value == "EECS 212")
  {
    window.open('otheruser2.html')
  }
 else
 {
   alert("Not an Acceptable Notebook Name")
  }
}

function Notifications() {
  element = document.getElementById("SharedwithRicky");
  if(localStorage.getItem("SharedwithRicky")) {
    element.style.display= "block";
  }
  else {
    element.style.display= "none";
  }
  element = document.getElementById("SharedwithChuck");
  if(SharedwithChuck) {
    element.style.display= "block";
  }
  else {
    element.style.display= "none";
  }
  element = document.getElementById("CommentChuck");
  if(CommentChuck) {
    element.style.display= "block";
  }
  else {
    element.style.display= "none";
  }
  element = document.getElementById("CommentRicky");
  if(CommentRicky) {
    element.style.display= "block";
  }
  else {
    element.style.display= "none";
  }
}
