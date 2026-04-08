document.addEventListener("DOMContentLoaded", function(){

(function(){
emailjs.init("P-o9t5qlEaUxhErqV");
})();

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("service_0pfct48","template_a9tf3gj",{
name: form.querySelector("input[type='text']").value,
email: form.querySelector("input[type='email']").value,
message: form.querySelector("textarea").value
})

.then(function(){
alert("Message Sent Successfully!");
form.reset();
})

.catch(function(error){
alert("Failed to send message");
console.log(error);
});

});

});