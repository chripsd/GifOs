let data = 'https://api.giphy.com/v1';
let ApiKey = 'SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl';

async function searchGif() {
  let value = document.getElementById('search').value;
    let response = await fetch(`${data}/gifs/search?q=${value}&api_key=${ApiKey}&limit=11&rating=G&lang=en`);
    if(response.ok) {
      const resdata = await response.json()
     
      for( let i= 0; i < 11; i++) {
        cardsGeneretorSearch(i)
        let GalleryImg = document.querySelector(`#imagen${i}`);
        GalleryImg.setAttribute('src',resdata.data[i].images.original.url);
        
        let Galleryp = document.querySelector(`#titulos${i}`);
        Galleryp.innerHTML=resdata.data.title
      }
     
      
    } else {
      alert("¡gif no encontrado!");
    }

    
  };

let APIurl = "https://api.giphy.com/v1/gifs/";
let APIkey = "SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl";

// Resultados de busqueda

// Autocompletar

function resultadoSugerido() {
  autoComp = document.querySelector(".autocomplete-content");
  autoComp.style.display = "block";
  search = document.getElementById("search").value;
  if (search === "") {
    autoComp.style.display = "none";
  }
  fetch(`${APIurl}search?q=${search}&api_key=${APIkey}&limit=3`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      autoComp.innerHTML = "";
      for (let i = 0; i < data.data.length; i++) {
        imgTITLE = data.data[i].title;
        if (imgTITLE !== "") {
          imgURL = data.data[i].bitly_url;
          sug = document.createElement("p");
          autoComp.appendChild(sug);
          innerS = `<a href="${imgURL}" target='_blank'>${imgTITLE}</a>`;
          sug.innerHTML = innerS;
        }
      }
    });
}

// let btnSearch = document.getElementById('btnSearch');
// btnSearch.addEventListener('click',()=> {
// window.scroll (0,700);
// searchGif();

// });



///////////crerar elementos
var gallery2 = document.getElementById("resultado")
function cardsGeneretorSearch(i){
let gifos = document.createElement("section")
let sug_img = document.createElement("div")
let sug_imgi = document.createElement("img")
let sug_imgp = document.createElement("p")
let sug_img2 = document.createElement("section")
let sug_img2i = document.createElement("img")

/////////// organizan esos elementos
gallery2.appendChild(gifos)
gifos.appendChild(sug_img)
sug_img.appendChild(sug_imgi)
sug_img.appendChild(sug_imgp)
sug_img2.appendChild(sug_img2i)


/////////// se le aturubyen o incluyen las clases 
gifos.classList.add("gifos")
sug_img.classList.add("sug_img")
sug_imgi.classList.add("sug_gif")
sug_img2.classList.add("sug_gif")
// sug_imgi.classList.add("sug_gif2")

/////////// se incluyen id 

sug_imgi.id = `imagen${i}`
sug_imgp.id = `titulos${i}`

console.log(i);

}
