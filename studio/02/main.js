var bubbles =[];
var margin = 120; 

window.onload = function(){
    const doSomething = function() {
    console.log('did something');
  };
  
    inView('h3')
        .on('enter', el => {
        el.style.color ='white';
        })
        .on('exit',el =>{
        el.style.color ='rgb(61, 63, 192)';
        })

    inView('h4')
        .on('enter', el => {
        el.style.color ='white';
        })
        .on('exit',el =>{
        el.style.color ='rgb(61, 63, 192)';
        })

    for( var i = 0; i < 10; i++){
        //create bubble div

        var el = document.createElement('img');
        var xClass = "x" +(i+1);
        el.src = "assets/bubble.png";
        el.style.width = "300px";
        el.style.height = "300px";
        el.style.backgroundColor = "transparent";
        el.className= xClass;
        bubbles.push(el);
        document.getElementById('firstcontainer').appendChild(el);
    }  
    var title = document.getElementById('title');
    title.addEventListener('click', function(){
        console.log('a click!!! ')
        for(var i = i; i < bubbles.length; i++) {
            var el = bubbles[i];
            // el.style.display = "inline-block";
        }
    });
};

// setInterval(function(){
//     animateBubbles();
// }, 100);
// function animateBubbles() {
//     for( var i = 0; i < bubbles.length; i++){
//         bubbles[i].style.marginTop = margin;
//     }

//     margin--;
// }