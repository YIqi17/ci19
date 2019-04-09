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


var url ="https://raw.githubusercontent.com/YIqi17/ci19/master/studio/collection/collectiondata.json";
fetch(url)
.then(function(data){return data.json();})
.then(function(json){displayimage(json);})

function displayimage(json){
    var image = document.createElement("img");

for(var i =0; i < url.length; i+=1){
    var names = document.createElement("span");
    var linebreak = document.createElement("br");
    document.body.appendChild(linebreak);
    names.innerHTML = json[i].name;
    names.counter=i;
    document.body.appendChild(names);
    names.onmouseover = function(event){
        image.setAttribute("src", json[event.target.counter].url);
        document.body.appendChild(image);
    }
}
}

// img.setAttribute("src", json[i].url);

