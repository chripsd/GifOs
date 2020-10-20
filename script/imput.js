const APIurl = "https://api.giphy.com/v1/gifs/";
const APIkey = "SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl";

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

