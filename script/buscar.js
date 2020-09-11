let data = 'https://api.giphy.com/v1';
let ApiKey = 'SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl';

async function searchGif() {
    let value = document.getElementById('search').value;
    let response = await fetch(`${data}/gifs/search?q=${value}&api_key=${ApiKey}&limit=10&rating=G&lang=en`);
    if(response.ok) {
      const resdata = await response.json()
     
      for( let i= 0; i < 11; i++) {
        cardsGeneretorSearch(i)
        let GalleryImg = document.querySelector(`#imagen${i}`);
        GalleryImg.setAttribute('src',resdata.data[i].images.original.url);
        
      }
     
     
      
    } else {
      alert("¡gif no encontrado!");
    }

    
  };



let btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click',()=> {
window.scroll (0,700);
searchGif();

});


///////////crerar elementos
var gallery2 = document.getElementById("resultado")
function cardsGeneretorSearch(i){
let gifos = document.createElement("section")
let sug_img = document.createElement("div")
let sug_imgi = document.createElement("img")
let sug_imgp = document.createElement("p")

/////////// organizan esos elementos
gallery2.appendChild(gifos)
gifos.appendChild(sug_img)
gifos.appendChild(sug_imgi)
gifos.appendChild(sug_imgp)
sug_img.appendChild(sug_imgi)
sug_img.appendChild(sug_imgp)

/////////// se le aturubyen o incluyen las clases 
gifos.classList.add("gifos")
sug_img.classList.add("sug_img")
sug_imgi.classList.add("sug_gif")
// sug_imgi.classList.add("sug_gif2")

/////////// se incluyen id 

sug_img.id = `imagen${i}`
sug_imgp.id = `titulos${i}`

console.log(i);



}


// async function searchGif() {
//     let value = document.getElementById('search').value;
//     let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl&q=&limit=25&offset=0&rating=g&lang=en`);
//     if(response.ok) {
//       const resdata = await response.json()
     
//       for( let i= 0; i < 11; i++) {   
//         let GalleryImg = document.querySelector(`#imagen${i}`);
//         GalleryImg.setAttribute('src',resdata.data.images.original.url);

//         let Galleryp = document.querySelector(`#titulos${i}`);
//         Galleryp.innerHTML=resdata.data.title
//       }

      
//     } else {
//       alert("¡gif no encontrado!");
//     }

    
//   };
