(function(){
emailjs.init("P-o9t5qlEaUxhErqV");
})();

document.querySelector(".contact-form").addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("service_0pfct48","template_a9tf3gj",{
name: document.querySelector("input[name='name']").value,
email: document.querySelector("input[name='email']").value,
message: document.querySelector("textarea[name='message']").value
})
.then(function(response){

alert("Message Sent Successfully!");

}, function(error){

alert("Failed to send message");

});

this.reset();

});