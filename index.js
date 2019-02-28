
import html2canvas from 'html2canvas';
var node = document.getElementById('frame_container');
var image_avatar = document.getElementById('avatar');
var download_container = document.getElementById('download_container');

image_avatar.addEventListener('input', function(e){
var myImage = new Image();
myImage.src = e.target.files[0].name;

document.getElementById('avatar_container').appendChild(myImage);
html2canvas(node, {
    allowTaint: true,
    foreignObjectRendering: true
}).then(canvas => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "nobs_poster.jpg";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.innerText = 'Download'
    download_container.style.display = "block";
    download_container.append(link)
    // link.click();
});
})

