let capture = document.getElementById("capture")
let camera = document.getElementById("activar")

let btncomenzar = document.getElementById("comenzar")
btncomenzar.addEventListener("click" ,()=>{
    capture.style.display="none"
    camera.style.display="block"
})
 
navigator.mediaDevices.getUserMedia({audio: false, video: true }).then((stream)=>{
    console.log(stream)

    let video = document.getElementById('video')
    video.srcObject = stream
}).catch((error)=>console.log(error))


// let btnCaptura = document.getElementById('captura');
// btnCaptura.addEventListener('click', searchGif);

console.log();





// ///////////crerar elementos
// let cam = document.getElementById("activar")
// function cardsCamera(){
// cam = document.getElementById("activar")
// let camtitle = document.createElement("div")
// let camtitlep = document.createElement("p")
// let clouse = document.createElement("div")
// let clouseimg = document.createElement("img")
// let caming = document.createElement("div")
// let camingvideo = document.createElement("video")
// let camicon = document.createElement("div")
// let icon = document.createElement("div")
// let iconimg = document.createElement("img")
// let iconbutton = document.createElement("input")

// console.log(cam)
// console.log(camtitle)
// cam.appendChild(camtitle)
// camtitle.appendChild(camtitlep)
// camtitle.appendChild(clouse)
// clouse.appendChild(clouseimg)
// caming.appendChild(camingvideo)
// camicon.appendChild(icon)
// icon.appendChild(iconimg)
// icon.appendChild(iconbutton)

// /////////// se le aturubyen o incluyen las clases 
// cam.classList.add("camera")
// camtitle.classList.add("camtitlep")
// clouse.classList.add("clouseimg")
// camimg.classList.add("video")

// cam.style.display="block"

// }