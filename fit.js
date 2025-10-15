function checkGender() {
  var name =document.getElementById("name").value
  var age = document.getElementById("Age").value
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var result = document.getElementById("result");
  var height = document.getElementById("Height").value.trim();
 var isNameValid = /^[A-Za-z\s]+$/.test(name);
 var isAgeValid = /^[0-9]+$/.test(age) && age >= 0 && age <= 120;
  var isHeightValid = /^[0-9]+$/.test(height) && height > 50 && height < 300; 
  if (isNameValid && isAgeValid &&isHeightValid ) {
  if (male.checked) {
    var height1=height/2.54;
    var wei=50+2.3*(height1-60);
 result.innerHTML = `<p> <b>1. If Your Weight is ${Math.round(wei)} kg To ${Math.round(wei) + 15} kg is an Normal</b></p>
<p><b>2. If Your Weight is ${Math.round(wei) - 7} Below is an Underweight</b></p>
<p><b>3. If Your Weight is ${Math.round(wei) + 15} Above is an Overweight</b></p>`;
  } 
  else if (female.checked) {
 var height2=height/2.54;
    var wei=45+2.3*(height2-60);
result.innerHTML = `<p><b>1. If Your Weight is ${Math.round(wei)} kg To ${Math.round(wei) + 15} kg is an Normal</b></p>
<p><b>2. If Your Weight is ${Math.round(wei) - 4} Below is an Underweight<b></p>
<p><b>3. If Your Weight is ${Math.round(wei) + 15} Above is an Overweight</b></p>`;

  } 
  else {
    alert("⚠️ Invalid. Please select Male or Female");
  }
}
  else{
       alert("❌ Invalid Input.Please Enter name, age and height corectly");
  }

}
