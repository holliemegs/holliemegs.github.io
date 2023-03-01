let emailform = document.getElementById("emailform");
const simpleEmailRegex= /\S+@\S+\.\S+/;

emailform.addEventListener("submit", (e) => {
    e.preventDefault ();

    var useremail = document.getElementById('emailaddress');
   

    //if (useremail.value ==""){ 
    //alert ("Please enter an email address!");
   // }
    //else {
     //alert ("Thank you for subscribing");

    //console.log(useremail)
    //}

  
    const emailIsValid = simpleEmailRegex.test(useremail.value);
    

    if (emailIsValid === true) {
        alert ("Thank you for Subscribing!");
        console.log(useremail.value);
    }

    //if  (useremail.value =""){ 
     //  alert ("Please enter an email address!");
//}
    else {
       alert ("Please enter a valid email address");
     }
    });
