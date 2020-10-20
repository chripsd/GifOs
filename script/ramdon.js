async function randomGif() {

try{
  for( let i= 0; i < 4; i++) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl&tag=&rating=g`);
    let resdata = await response.json()
   
    cardsGeneretor(i)
        let RandomImg = document.querySelector(`#random${i}`);
        RandomImg.setAttribute('src',resdata.data.images.original.url);
      
      let Randomp = document.querySelector(`#numeral${i}`);
      Randomp.innerHTML=resdata.data.title
    }
}

catch(error){
  console.log(error)
}

  };

  randomGif();

  
///////////crerar elementos 
  var gallery = document.getElementById("primero")
  function cardsGeneretor(i){
    let sug_one = document.createElement("section")
    let sug_title = document.createElement("div")
    let sug_titlep = document.createElement("p")
    let sug_titleclouse = document.createElement("img")
    let sug_img = document.createElement("div")
    let sug_imgp = document.createElement("p")
    let sug_imgrandon = document.createElement("img")
    let see = document.createElement("div")
    
/////////// organizan esos elementos 
gallery.appendChild(sug_one)
sug_one.appendChild(sug_title)
sug_one.appendChild(sug_img)
sug_title.appendChild(sug_titlep)
sug_title.appendChild(sug_titleclouse)
sug_img.appendChild(sug_imgp)
sug_img.appendChild(sug_imgrandon)
sug_img.appendChild(see)

/////////// se le aturubyen o incluyen las clases 
sug_one.classList.add("sug_one")
sug_img.classList.add("sug_img")
sug_title.classList.add("sug_title")
see.classList.add("see")
sug_titleclouse.classList.add("clouse")
sug_imgrandon.classList.add("sug_gif")

/////////// se incluyen id 
sug_imgrandon.id = `random${i}`
sug_titlep.id = `numeral${i}`
/////////// se incluyen elementos 

sug_titleclouse.setAttribute("src","assets/button3.svg")
sug_titleclouse.setAttribute("alt","cerrar")
see.innerHTML="Ver más..."
see.setAttribute("alt", "Ver más...")

console.log(i);

}


let seeMore = document.getElementsByClassName('see')
for (let i = 0; i < seeMore.length; i++) {

    seeMore[i].addEventListener('click', openGiphyPage)

    function openGiphyPage() {
        window.open("https://giphy.com/")
    }
}
