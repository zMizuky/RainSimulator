var img = [
    "Anastasia Shuraeva",
    "Lucas Craig",
    "Pixabay",
    "Stefan Stefancik",
    "Stein Egil Liland"
];
var rain = document.getElementById("rain");
var rain1 = document.getElementById("rain1");
var thunder1 = document.getElementById("thunder1");
var thunder = document.getElementById("thunder");

var soundsR = ["rain-01", "rain-02", "rain-03", "rain-06"];
var soundsT = ["thunder", "thunder-02"]

function theRain(){
    if (rain.checked == true){
        rain1.play();
    }else{
        rain1.pause();
    }
}

function theThunder(){
    if (thunder.checked == true){
        thunder1.play();
    }else{
        thunder1.pause();
    }
}

function changeT(sound){
    thunder1.src = "sounds/" + soundsT[sound] + ".mp3";
}

function changeR(sound){
    rain1.src = "sounds/" + soundsR[sound] + ".mp3";
}

function aleatoryR(){
    rain1.pause();
    var x = Math.floor((Math.random() * 3));
    changeR(x)
    if (rain.checked == true){
        rain1.play();
    }
}

function aleatoryT(){
    thunder1.pause();
    var x = Math.floor((Math.random() * 2));
    changeT(x)
    if (thunder.checked == true){
        thunder1.play();
    }
}



function aleatoryImg(){
    var x = Math.floor((Math.random() * 5));
    var alImg = img[x]
    setImage(alImg)
}

var txtN = document.getElementById("txtN")
function setImage(img){
    document.getElementById("html").style.backgroundImage = "url('https://raw.githubusercontent.com/zMizuky/RainSimulator/master/imgs/" + img + ".jpeg')"
    txtN.innerHTML = "Image by: " + img;
}

aleatoryImg()

