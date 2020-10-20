let logo = document.getElementById("logo");

function day(){
    document.documentElement.setAttribute('data-theme', 'light');
    logo.setAttribute("src","./assets/gifOF_logo.png");
}

function nigth(){
    document.documentElement.setAttribute('data-theme', 'dark');
    logo.setAttribute("src","./assets/gifOF_logo_dark.png");
    
}

