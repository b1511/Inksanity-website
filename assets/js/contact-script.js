/*attempt to make contact form working
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
*/

console.log("Fetch about to begin");
fetch('http://127.0.0.1:5500/images/logo.png')
  .then(Response => {
    console.log(Response);
    return Response.blob();
  })
  .then(blob => {
    console.log(blob);
    document.getElementById('logo').src = URL.createObjectURL(blob);
  });


