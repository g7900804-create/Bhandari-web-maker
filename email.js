(function(){
emailjs.init("P-o9t5qlEaUxhErqV");
})();

document.querySelector(".contact-form").addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("service_0pfct48","template_a9tf3gj",{
name:this.querySelector("input[type='text']").value,
email:this.querySelector("input[type='email']").value,
message:this.querySelector("textarea").value
})

.then(function(){
alert("Message Sent Successfully!");
});

this.reset();

});