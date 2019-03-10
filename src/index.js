
import html2canvas from 'html2canvas';
var node = document.getElementById('frame_container');
var url = './../process.php';
var image_avatar = document.getElementById('avatar');
var download_container = document.getElementById('download_container');
var download_span = document.getElementById('download_span');
image_avatar.addEventListener('input', function(e){
    download_span.innerHTML = "Processing...";
var myImage = new Image();
myImage.src = e.target.files[0];
var formData = new FormData();
formData.append('files', e.target.files[0]);
fetch(url, {
    method: 'POST',
    body: formData
})
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myImage.src = myJson.filename;
    document.getElementById('avatar_container').innerHTML = "";
    document.getElementById('avatar_container').appendChild(myImage);
html2canvas(node, {
    allowTaint: true,
    foreignObjectRendering: true
}).then(canvas => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = myJson.filename;
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.innerText = 'Download'
    download_span.innerHTML = "";
    download_container.style.display = "block";
    download_span.append(link)
    // link.click();
});
});


})

