//Ejecutando funciones
document.getElementById("search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador)

bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("search");
box_search =        document.getElementById("box-search");

//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


function lookforSearch (){
    
    let value = document.getElementById('search').value;
    console.log('value', value);

    var filter = search.value.toUpperCase();
    console.log('filter', filter);

    var li = box_search.getElementByTageName("");
    console.log('li', li);


    for( let i= 0; i < li.length; i++) {
        let a = li[i].getElementByTageName("a")[0];
        textValue = a.textContent || a.innerText;
      }
      if(textValue.toUpperCase().indexOf(filter) > -1){

        li[i].style.display = "";
        box_search.style.display = "block";

        if (inputSearch.value === ""){
            box_search.style.display = "none";
        }

    }else{
        li[i].style.display = "none";

    }
}