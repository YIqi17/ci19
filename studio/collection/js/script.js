// $(function() {
//     var controller = new ScrollMagic.Controller();
//     var wipeAnimation = new TimelineMax()
//     .fromTo("section.panel.first",1,{x:"-100%"},{x:"0", ease: Linear.easeNone})
//     .fromTo("section.panel.second",1,{x:"100%"},{x:"0", ease: Linear.easeNone})
//     .fromTo("section.panel.third",1,{y:"-100%"},{y:"0", ease: Linear.easeNone});
//     new ScrollMagic.Scene({
//         tiggerElement:"#pinContainer",
//         tiggerHook:"onLeave",
//         duration:"300%"
//     })
//     .setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addIndicators()
//     .addTo(controller);
// });


var url = "https://raw.githubusercontent.com/YIqi17/ci19/master/studio/collection/newcollectiondata.json";
fetch(url)
    .then(function (data) { return data.json(); })
    .then(function (json) { displayimage(json); })


function hideEverything() {
    var heading = document.querySelectorAll("h1");
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.opacity = 0;
    }
    var spans = document.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.opacity = 0;
    }
}

function showEverything() {
    var heading = document.querySelectorAll("h1");
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.opacity = 1;
    }
    var spans = document.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.opacity = 1;
    }
}

function playaudio(audioElement1,name){
    var a=audioElement1.currentSrc;
    var arr = a.split('/');
    var song = arr[arr.length-1];
    if(song!=name){
        audioElement1.setAttribute('src','assets/'+name);
        audioElement1.setAttribute('autoplay','autoplay');
    }
}
// document.getElementsByClassName("name1").playaudio();
function stopaudio(){

}
function displayimage(json) {
    var image = document.createElement("img");
    var audioElement1 = document.createElement('audio');
    for (var i = 0; i < 20; i += 1) {
        var names = document.createElement("span");
        names.classList.add("name1");
        var linebreak = document.createElement("br");
        names.innerHTML = json[i].name;
        names.counter = i;
        document.getElementById("time1").appendChild(names);
        document.getElementById("time1").appendChild(linebreak);
        names.onmouseover = function (event) {
            image.setAttribute("src", json[event.target.counter].url);
            document.getElementById("displayimage").appendChild(image);
            hideEverything();
            event.target.style.opacity = 1;
            document.getElementById("text1").style.opacity = 1;
            image.style.display = "block";
            image.classList.add("image1");
            
            playaudio(audioElement1,'minguo.wav');
        }
        names.onmouseleave = function (event) {
            showEverything();
            image.style.display = "none";
        }
    }
document.getElementById("time1").onmouseover = function(event){
        if(!play) playaudio();
        else stopaudio();
        play =!play;

    }
    for (var i = 20; i < 40; i += 1) {
        var names = document.createElement("span");
        names.classList.add("name2");
        var linebreak = document.createElement("br");
        names.innerHTML = json[i].name;
        names.counter = i;
        document.getElementById("time2").appendChild(names);
        document.getElementById("time2").appendChild(linebreak);
        names.onmouseover = function (event) {
            image.setAttribute("src", json[event.target.counter].url);
            hideEverything();
            event.target.style.opacity = 1;
            document.getElementById("text2").style.opacity = 1;
            image.style.display = "block";
            playaudio(audioElement1,'war.mp4');
        }
        names.onmouseleave = function (event) {
            showEverything();
            image.style.display = "none";
        }
    }

    for (var i = 40; i < 60; i += 1) {
        var names = document.createElement("span");
        names.classList.add("name3");
        var linebreak = document.createElement("br");
        names.innerHTML = json[i].name;
        names.counter = i;
        document.getElementById("time3").appendChild(names);
        document.getElementById("time3").appendChild(linebreak);
        names.onmouseover = function (event) {
            image.setAttribute("src", json[event.target.counter].url);
            document.body.appendChild(image);
            hideEverything();
            event.target.style.opacity = 1;
            document.getElementById("text3").style.opacity = 1;
            image.style.display = "block";
            playaudio(audioElement1,'communist.mp4');
        }
        names.onmouseleave = function (event) {
            showEverything();
            image.style.display = "none";
        }
    }
    //max/min height/
    //name4: opacity:0 hover;
    //item opacity;
    //mouseleave
    for (var i = 60; i < 80; i += 1) {
        var names = document.createElement("span");
        names.classList.add("name4");
        var linebreak = document.createElement("br");
        names.innerHTML = json[i].name;
        names.counter = i;
        document.getElementById("time4").appendChild(names);
        document.getElementById("time4").appendChild(linebreak);
        names.onmouseover = function (event) {
            image.setAttribute("src", json[event.target.counter].url);
            document.body.appendChild(image);
            hideEverything();
            event.target.style.opacity = 1;
            document.getElementById("text4").style.opacity = 1;
            image.style.display = "block";
            playaudio(audioElement1,'hongge.wav');
        }
        names.onmouseleave = function (event) {
            showEverything();
            image.style.display = "none";
        }
    }
    for (var i = 80; i < 100; i += 1) {
        var names = document.createElement("span");

        var linebreak = document.createElement("br");
        names.classList.add("name5");
        names.innerHTML = json[i].name;
        names.counter = i;
        document.getElementById("time5").appendChild(names);
        document.getElementById("time5").appendChild(linebreak);
        names.onmouseover = function (event) {
            image.setAttribute("src", json[event.target.counter].url);
            document.body.appendChild(image);
            hideEverything();
            document.getElementById("text5").style.opacity = 1;
            event.target.style.opacity = 1;
            image.style.display = "block";
            playaudio(audioElement1,'macao.mp4');
        }
        names.onmouseleave = function (event) {
            showEverything();
            image.style.display = "none";
        }
    }
}

// img.setAttribute("src", json[i].url);
// 從某種意義上來説，每個人的人生都是一樣的。一樣的開頭，一樣的結局。人們津津樂道的也不過是這兩件事情的延申。我一直不甚瞭解，中國人爲什麽這麽着急，急著往前走，往不知道的地方狂奔。終點不過都是死亡，而我們在做的事情不過是再用現在可以感受到的確確實實的痛苦去賭一個沒有保障的未來。

