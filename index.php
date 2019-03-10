<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NOB Speicial</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css" rel="stylesheet">
    <style>
    body{
        background: linear-gradient(270deg, #8021c1, #42066b);
        margin:0px;
        padding:0px
    }
    #frame_container{
    height: 300px;
    width: 300px;
    margin: 50px auto;
    border: 3px solid #fff;
    border-radius: 5px;
}
h3{
    color: #ffffff;
    text-align: center
}
#imagebg{
    background:url('./bg.jpg');
    background-size: cover;
    height: 300px;
    width: 300px;
}
#avatar_container{
    text-align: center;
    width: 132px;
    height: 130px;
    margin: 0 auto;
    position: relative;
    top: 94px;
    right: 15px;
}
img {
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
}
#download_container{
    width: 80%;
    margin: 20px auto;
    display: none;
}
#controls{
    height: auto;
    width: 300px;
    margin: 0 auto;   
    text-align:center;
    border: 15px solid #fff;
    border-radius: 5px;
    background: #fff;
}
    </style>
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/utilities.min.css" rel="stylesheet">
</head>
<body>
    <div id="frame_container" class="max-w-sm overflow-hidden shadow-lg" >
        <div id="imagebg">
        
        <div id="avatar_container">

        </div>
    </div>
    </div>
    <div
    id="controls"
    class="max-w-sm overflow-hidden shadow-lg pb-5 pt-5 pl-1 pr-1 mb-20" 
    >
    <div class="font-bold text-xs mb-2">Choose an image to afix.</div>
        <input type="file" name="avatar" id="avatar" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        >
        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center rounded-full" id="download_container">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span id="download_span"></span>
</button>

    </div>
    <div class="flex text-white mt-20">
  <div class="w-full h-12 pl-3">
  <p>Night of Bliss Special 2019 - Poster Maker</p>
  <h6>New Media - Zone2 Christ Embasssy, Lagos Nigeria</h6>
  </div>
</div>
    <script src="main.js"></script>
</body>
</html>