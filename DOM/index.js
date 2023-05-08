// Selecteurs 

// document.querySelector('h4').style.background = 'yellow';
// const baliseHTML =  document.querySelector('h4');
// baliseHTML.style.background = 'yellow';
// Click event
const questionContainer = document.querySelector('.click-event')
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector('p')

questionContainer.addEventListener('click', () => {
      // questionContainer.style.background ="red";
      // questionContainer.style.border ="3px solid teal";
      questionContainer.classList.toggle('question-clicked')
});
btn1.addEventListener('click', () => {
      reponse.classList.add('show-response');
      reponse.style.background = 'green'
});
btn2.addEventListener('click', () => {
      reponse.classList.add('show-response');
      reponse.style.background = 'red'
});
//-------------------------------------------------------
// mouse events
const mouseMove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
     mouseMove.style.left = `${e.pageX}px`;
     mouseMove.style.top = `${e.pageY}px`;
});
window.addEventListener('mousedown', ()=> {
      mouseMove.style.transform = "scale(2) translate(-25%, -25%)"
});
window.addEventListener('mouseup', ()=> {
      mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
      mouseMove.style.border = "2px solid teal"
});
questionContainer.addEventListener("mouseenter",() =>{
      questionContainer.style.background = "rgb(0,0,0,0.6) "
} );
questionContainer.addEventListener("mouseout",() =>{
      questionContainer.style.background = "pink"
} );
reponse.addEventListener("mouseover",() =>{
      reponse.style.transform = "rotate(2deg)"
} );
// ------------------------------------------------
// KEYPRESS
const keypresContainer = document.querySelector(".keypress");
const Key = document.getElementById("key");
document.addEventListener('keypress', (e) => {
     Key.textContent = e.key;

     if (e.key === "j"){
      keypresContainer.style.background ="pink";
} else if (e.key === "h"){
      keypresContainer.style.background ="teal";
}else {
      keypresContainer.style.background ="red";
}
// ring();
});

// const ring = (key) =>{
//       const audio = new Audio();
//       audio.src = `./${key}.mp3`;
//       audio.play();
// }

//-----------------------------------------------------------------
// Scroll event 
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
      if (window.scrollY >  120){
            nav.style.top = 0;
      } else{
            nav.style.top = "-50px";
      }
      
} );

//------------------------------------------------------------------------
// Form event
const inputName = document.querySelector("input[type='text']");
const select = document.querySelector('select');
const form = document.querySelector('form')
let pseudo = "";
let language = "";
inputName.addEventListener("input", (e) => {
    pseudo=  e.target.value;
    console.log(pseudo);
});

select.addEventListener("input", (e) => {
      language = e.target.value;

  }); 
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log('yes');
      if (cgv.checked) {
            document.querySelector("form > div").innerHTML = `
            <h3>pseudo : ${pseudo}</h3>
            <h3>Language preferé : ${language}</h3>
            
            `
      }else {
            alert("Veillez accepter les CGV")
      }

  }); 


// Load event

window.addEventListener('load', () => {
      console.log("document chargé !");
});
// Foreach
//const boxes = document.getElementsByClassName("box");

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
      e.target.style.transform = "scale(0.7)";
} );
});

// BUBLING
document.addEventListener('click',  () => {
      console.log("click 1");
}, false );
// USECAPTURE
document.addEventListener('click',  () => {
      console.log("click 2");
}, true );

// Stop 

questionContainer.addEventListener("click", (e) => {
      alert("test !");
      e.stopPropagation()
});

//Removez event listeenr

//-----------------------------------------------------------------------------------------------------------------------BOM-------------------------------------------------------------------
// window.open('http://google.com', 'cours js', "height= 300, width=800")

// Les evenenments adossés à window
/* 
allert
confirm
prompt
setTimeout
setInterval

*/


//location
/* 
location.
href
host
pathname
search
replace("http:www.google.com")
*/
//Navogator
/* 
geolalisation
history

*/
console.log();