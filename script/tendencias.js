async function trendGif() {

  try{
    for( let i= 0; i < 11; i++) {
      let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl&limit=11&rating=g
      `);
      let resdata = await response.json()
      
      cardsGeneretortrendings(i)
          let TrendsImg = document.querySelector(`#imagen${i+0}`);
          TrendsImg.setAttribute('src' ,resdata.data[i].images.original.url);
          
          let Trendsp = document.querySelector(`#titulos${i+0}`);
          Trendsp.innerHTML=resdata.data.title
        }
  }
  catch(error){
    console.log(error)
  }
  
    };
  
    trendGif();

    ///////////crerar elementos
    var trendings = document.getElementById("trendings")
    function cardsGeneretortrendings(i){
      let gifos = document.createElement("section")
      let sug_cards = document.createElement("div")
      let sug_imgi = document.createElement("img")
      let sug_imgp = document.createElement("p")
      let sug_img2 = document.createElement("section")
      let sug_img2i = document.createElement("img")
      let sughove = document.createElement("div")
      let sughovep = document.createElement("div")
      
      /////////// organizan esos elementos
      trendings.appendChild(gifos)
      gifos.appendChild(sug_cards)
      sug_cards.appendChild(sug_imgi)
      sug_cards.appendChild(sug_imgp)
      sug_img2.appendChild(sug_img2i)
      gifos.appendChild(sughove)
      sughove.appendChild(sughovep)
      
      
      
      /////////// se le aturubyen o incluyen las clases 
      gifos.classList.add("gifos")
      sug_cards.classList.add("sug_cards")
      sug_imgi.classList.add("sug_cards1")
      sug_img2.classList.add("sug_cards1")
      sughove.classList.add("sughove")
      sughovep.classList.add("sughovep")
      // sug_imgi.classList.add("sug_gif2")
      
      /////////// se incluyen id 
      sug_imgi.id = `imagen${i}`
      sug_imgp.id = `titulos${i}`
      
      console.log(i);
}
    
    
    
  