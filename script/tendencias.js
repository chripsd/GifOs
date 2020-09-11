async function trendGif() {

  try{
      let value = document.getElementById('search').value;
      console.log('value', value);
  
      let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl&limit=11&rating=g`);
      let resdata = await response.json()
      console.log(resdata);
  
        for( let i= 0; i < 11; i++) {
          let TrendsImg = document.querySelector(`#imagen${i+0}`);
          TrendsImg.setAttribute('src' ,resdata.data[i].images.original.url);
        }
  }
  catch(error){
    console.log(error)
  }
  
    };
  
    trendGif();
  