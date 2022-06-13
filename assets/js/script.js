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

/* attempt to get image url from local data file and use it for img src
fetch('http://127.0.0.1:5500/assets/js/data.js')
  .then(response => response.json())
  .then(data => console.log(data));
*/

/*attempt to display images from Wordpres*/
console.log("Fetch about to begin");

function getLogo(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/156")
  .then((Response) => Response.json())
  .then((data) => {
    renderLogo(data);
  })
}
getLogo()


function renderLogo(data) {
  const url = data.acf;
  const logoEl = document.createElement('img');
  logoEl.setAttribute('src', url.image);
  logoEl.setAttribute('alt', 'logo');
  logoEl.classList.add('logo');

  const mainHead = document.getElementById("mainHead"); 
  const videoEl = mainHead.firstElementChild; /*at this moment of execution the video is the first child element*/
  mainHead.insertBefore(logoEl, videoEl); /*here we make the content as first child element */
}

