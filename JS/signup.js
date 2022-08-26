function validateform() {
    let flag = true;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let password = document.getElementById("pass").value;
    let age =  document.getElementById("age").value;
    let weight =  document.getElementById("weight").value;
    let ft =  document.getElementById("ft").value;
    let inches = document.getElementById("in").value;
    let gender =  document.getElementById("gender").value;
    let occupation =  document.getElementById("occupation").value;
    let tandc =  document.getElementById("TandC").checked;
    let submitInfo =  document.getElementById("SubInfo").checked;

    if (firstName == "") {
        document.getElementById("fname-txt").className = "text-danger";
        flag = false
    }
    else{
        document.getElementById("fname-txt").className = "visually-hidden";
    }

    if(lastName == "") {
        document.getElementById("lname-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("lname-txt").className = "visually-hidden";
    }

    if(password.length <= 8) {
        document.getElementById("pass-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("pass-txt").className = "visually-hidden";
    }

    if(age < 15 || age > 100) {
        document.getElementById("age-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("age-txt").className = "visually-hidden";
    }

    if(weight <= 0 ) {
        document.getElementById("weight-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("weight-txt").className = "visually-hidden";
    }

    if(ft <= 0 || ft>=15 || inches < 0 || inches>=13) {
        document.getElementById("height-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("height-txt").className = "visually-hidden";
    }

    if(gender=="" || gender == null) {
        document.getElementById("gender-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("gender-txt").className = "visually-hidden";
    }

    if(occupation=="" || occupation == null) {
        document.getElementById("occupation-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("occupation-txt").className = "visually-hidden";
    }

    if(tandc==false) {
        document.getElementById("tandc-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("tandc-txt").className = "visually-hidden";
    }

    if(submitInfo==false) {
        document.getElementById("submitInfo-txt").className = "text-danger";
        flag = false;
    }
    else{
        document.getElementById("submitInfo-txt").className = "visually-hidden";
    }

    if (flag == false){
        alert("We may have ran into one or more problems!");
        return flag;
    }
    else{
        alert("You are now a FitNice member");
        return flag;
    }
}