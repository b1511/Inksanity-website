var btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var msg = document.getElementById('message').value;
    var body = 'name:' + name + '<br/> email: ' + email + '<br/> message:' + '<br/> subject: ' + subject + msg;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "borislava.ph@gmail.com",
        Password : "xcyzsreqomrrvxuj",
        To : 'borislava.ph@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(msg)
    );
});


fetch("./data.js")
.then(response => {
  return response.json()
})
.then(jsondata => console.log(jsondata))
 
