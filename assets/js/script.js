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

/*home page api calls--------------------------------- */

/*logo*/
function getLogo(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/156")
  .then((Response) => Response.json())
  .then((data) => {
    renderLogo(data);
  })
}
getLogo();


function renderLogo(data) {
  const url = data.acf;
  const logoEl = document.createElement('img');
  logoEl.setAttribute('src', url.image);
  logoEl.setAttribute('alt', 'logo');
  logoEl.classList.add('logo');

  const mainHead = document.getElementById("mainHead"); 
  const childEl = mainHead.firstElementChild; 
  mainHead.insertBefore(logoEl, childEl);   /* here we send the received content to go as first child element in the header section */
};


/*collage1*/
function getColl(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/233")
  .then((Response) => Response.json())
  .then((data) => {
    renderColl(data);
  })
}
getColl();


function renderColl(data) {
  const url = data.acf;
  const collEl = document.createElement('img');
  collEl.setAttribute('src', url.image);
  collEl.setAttribute('alt', 'collage');
  collEl.classList.add('collage');

  document.getElementById("box").appendChild(collEl);
};


/*about page api calls----------------------------------*/

/*exterior image*/
function getExtImg(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/244")
  .then((Response) => Response.json())
  .then((data) => {
    renderExtImg(data);
  })
}
getExtImg();


function renderExtImg(data) {
  const url = data.acf;
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', url.image);
  imgEl.setAttribute('alt', 'exterior');

  document.getElementById("ext").appendChild(imgEl);
};



/*interior image*/
function getIntImg(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/248")
  .then((Response) => Response.json())
  .then((data) => {
    renderIntImg(data);
  })
}
getIntImg();


function renderIntImg(data) {
  const url = data.acf;
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', url.image);
  imgEl.setAttribute('alt', 'interior');

  document.getElementById("int").appendChild(imgEl);
};



/*collage2 */
function getSecColl(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/238")
  .then((Response) => Response.json())
  .then((data) => {
    renderSecColl(data);
  })
}
getSecColl();


function renderSecColl(data) {
  const url = data.acf;
  const collEl = document.createElement('img');
  collEl.setAttribute('src', url.image);
  collEl.setAttribute('alt', 'collage');
  collEl.classList.add('collage');

  document.getElementById("box2").appendChild(collEl);
};

/*video */
function getVid(){
  fetch("https://bo1511.one/wp-json/wp/v2/posts/255")
  .then((Response) => Response.json())
  .then((data) => {
    renderVid(data);
  })
}
getVid();


function renderVid(data) {
  const url = data.acf;
  const content = `
  <video autoplay muted slowed loop plays-inline class="video" src="${url.video}" alt="video"/>`;
  displayVid('header', content)
}
renderVid();

function displayVid(selector, newContent) {
  document.querySelector(selector).innerHTML += newContent;
};