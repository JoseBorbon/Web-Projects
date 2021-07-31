function expandContract () {
  let checkbox = document.getElementById("checkbox");
  let mobileNavBar = document.getElementById("container2");
  document.getElementById("square").style.display = "inline";
  if (checkbox.checked == true){
    mobileNavBar.style.display = "flex";
  } else {
    mobileNavBar.style.display = "none";
  }
}