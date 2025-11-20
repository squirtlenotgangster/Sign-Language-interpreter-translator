// Bring elements, create setting etc

var video = document.getElementById('video');
var cameraShot = document.getElementById('camera-snapshot');
var canvasShot = document.getElementById('.canvas');

// Get access to the camera
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play()
    })
}


// Create functionality
// cameraShot.addEventListener('click', mouseOvershot);

// function mouseOvershot(e) {
//     // console.log(e.target)
//     Array.from(canvasShot).forEach(function(shot) {
//         console.log(shot)
//     })
// }

// Trigger photo take
document.getElementById('snap').addEventListener('click', function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d') 

    canvas.width = '280'
    canvas.height = '200'
    canvas.className = 'canvas'
    canvas.style.margin = '0px 1.5px'
    console.log(canvas)

    cameraShot.appendChild(canvas);
    context.drawImage(video, 0, 0, 280, 200)
})