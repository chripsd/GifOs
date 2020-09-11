
// let data = 'https://api.giphy.com/v1';
// let ApiKey = 'SrF7Mwom6EWdYipqgJ9CU2gng0kUxUFl';



// async function permisoscam(){

//     let capture = document.getElementById('captura').value;
//     console.log('capture', capture);
    
//     var gumPromise = navigator.mediaDevices.getUserMedia({
//     video:true,
// });

//         var permiso = await gumPromise
//         console.log(permiso)

//         let recorder = new RecordRTCPromisesHandler(permiso, {
//             type: 'video',
//             save: function(fileName) {},
//         });
//         recorder.startRecording();

//         const sleep = m => new Promise(r => setTimeout(r, m));
//         await sleep(10000);

//         await recorder.stopRecording();
//         let blob = await recorder.getBlob();
//         var mime = blob.type

//         console.log(mime)

//         let response = await fetch(`${data}/gifs/search?q=${value}&api_key=${ApiKey}&limit=10&rating=G&lang=en`);
//         console.log(response);

// }

// let btnCaptura = document.getElementById('captura');
// btnCaptura.addEventListener('click', searchGif);






// async function permisoscam(){

//     var gumPromise = navigator.mediaDevices.getUserMedia({
//         video:true,
//     });
//     var permiso = await gumPromise
//     console.log(permiso)
    
//     let recorder = new RecordRTCPromisesHandler(permiso, {
//         type: 'video',
//         save: function(fileName) {},
//     });
//     recorder.startRecording();
    
//     const sleep = m => new Promise(r => setTimeout(r, m));
//     await sleep(10000);
    
//     await recorder.stopRecording();
//     let blob = await recorder.getBlob();
//     var mime = blob.type
    
//     console.log(mime)

//     let response = await fetch(`${data}/gifs/search?q=${value}&api_key=${ApiKey}&limit=10&rating=G&lang=en`);
//       console.log(response);
    
//     }
    
//     function captura(){
//     btnCaptura.addEventListener('click', captura);

    
// }

navigator.mediaDevices.getUserMedia({audio: false, video: true }).then((stream)=>{
    console.log(stream)

    let video = document.getElementById('video')
    video.srcObject = stream
}).catch((error)=>console.log(error))


let btnCaptura = document.getElementById('captura');
btnCaptura.addEventListener('click', searchGif);