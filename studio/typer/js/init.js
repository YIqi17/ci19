
$(document).ready(function () {
    var entryCount = 0;
    var displayCount = 0;

    //capture key presses
    $(document).on("keypress", function (e) {
        e.preventDefault();
        entryCount++;
        displayCount++;

        //translate unicode to characters        
        var char = String.fromCharCode(e.which);

        console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
        createElement(char);
    });

    $(document).on("keydown", function (e) {
        //if pressed key is a backspace
        if (e.which == 8) {
            e.preventDefault();
            entryCount++;
            displayCount--;
            if (displayCount < 0) {
                displayCount = 0;
            }
            console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
            deleteElement();
        }
    });
});

function createElement(k) {
    var elem = $('#cursor');
    if (k == "a" || k == "A") { elem.before('<span class="inner"><embed src="assets/a.svg" class="svg"></span>'); }
    if (k == "b" || k == "B") { elem.before('<span class="inner"><embed src="assets/b.svg" class="svg"></span>'); }
    if (k == "c" || k == "C") { elem.before('<span class="inner"><embed src="assets/c.svg" class="svg"></span>'); }
    if (k == "d" || k == "D") { elem.before('<span class="inner"><embed src="assets/d.svg" class="svg"></span>'); }
    if (k == "e" || k == "E") { elem.before('<span class="inner"><embed src="assets/e.svg" class="svg"></span>'); }
    if (k == "f" || k == "F") { elem.before('<span class="inner"><embed src="assets/f.svg" class="svg"></span>'); }
    if (k == "g" || k == "G") { elem.before('<span class="inner"><embed src="assets/g.svg" class="svg"></span>'); }
    if (k == "h" || k == "H") { elem.before('<span class="inner"><embed src="assets/h.svg" class="svg"></span>'); }
    if (k == "i" || k == "I") { elem.before('<span class="inner"><embed src="assets/i.svg" class="svg"></span>'); }
    if (k == "j" || k == "J") { elem.before('<span class="inner"><embed src="assets/j.svg" class="svg"></span>'); }
    if (k == "k" || k == "K") { elem.before('<span class="inner"><embed src="assets/k.svg" class="svg"></span>'); }
    if (k == "l" || k == "L") { elem.before('<span class="inner"><embed src="assets/l.svg" class="svg"></span>'); }
    if (k == "m" || k == "M") { elem.before('<span class="inner"><embed src="assets/m.svg" class="svg"></span>'); }
    if (k == "n" || k == "N") { elem.before('<span class="inner"><embed src="assets/n.svg" class="svg"></span>'); }
    if (k == "o" || k == "O") { elem.before('<span class="inner"><embed src="assets/o.svg" class="svg"></span>'); }
    if (k == "p" || k == "P") { elem.before('<span class="inner"><embed src="assets/p.svg" class="svg"></span>'); }
    if (k == "q" || k == "Q") { elem.before('<span class="inner"><embed src="assets/q.svg" class="svg"></span>'); }
    if (k == "r" || k == "R") { elem.before('<span class="inner"><embed src="assets/r.svg" class="svg"></span>'); }
    if (k == "s" || k == "S") { elem.before('<span class="inner"><embed src="assets/s.svg" class="svg"></span>'); }
    if (k == "t" || k == "T") { elem.before('<span class="inner"><embed src="assets/t.svg" class="svg"></span>'); }
    if (k == "u" || k == "U") { elem.before('<span class="inner"><embed src="assets/u.svg" class="svg"></span>'); }
    if (k == "v" || k == "V") { elem.before('<span class="inner"><embed src="assets/v.svg" class="svg"></span>'); }
    if (k == "w" || k == "W") { elem.before('<span class="inner"><embed src="assets/w.svg" class="svg"></span>'); }
    if (k == "x" || k == "X") { elem.before('<span class="inner"><embed src="assets/x.svg" class="svg"></span>'); }
    if (k == "y" || k == "Y") { elem.before('<span class="inner"><embed src="assets/y.svg" class="svg"></span>'); }
    if (k == "z" || k == "Z") { elem.before('<span class="inner"><embed src="assets/z.svg" class="svg"></span>'); }
    if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
    if (k == "1") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(180deg) saturate(4) brightness(0.9)");
        $("#cursor").css("filter", "hue-rotate(180deg) saturate(4) brightness(0.9)");
        $("body").css("background-color", "#00ff90");
    }
    if (k == "2") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(90deg)");
        $("#cursor").css("filter", "hue-rotate(90deg)");
        $("body").css("background-color", "#ff5700");
    }
    if (k == "3") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(280deg) brightness(2)");
        $("#cursor").css("filter", "hue-rotate(280deg) brightness(2)");
        $("body").css("background-color", "#0044ff");
    }
    if (k == "4") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(45deg)");
        $("#cursor").css("filter", "hue-rotate(45deg)");
        $("body").css("background-color", "#ff19ad");
    }
    if (k == "5") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(310deg) saturate(4)");
        $("#cursor").css("filter", "hue-rotate(240deg) saturate(4)");
        $("body").css("background-color", "#D800FF");
    }
    if (k == "6") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(130deg) saturate(100) brightness(1)");
        $("#cursor").css("filter", "hue-rotate(130deg) saturate(100) brightness(1)");
        $("body").css("background-color", "#ffff00");
    }

    if (k == "7") {
        helpers.removeClass('animated');
        $(".svg").css("filter", "hue-rotate(280deg) saturate(3) brightness(1.3)");
        $("#cursor").css("filter", "hue-rotate(280deg) saturate(3) brightness(1.3)");
        $("body").css("background-color", "#ff00c2");
    }

    if (k == "8") {
        helpers.removeClass('animated');
        document.body.style.backgroundColor = generateRandomColorString();
    }
    if (k == "9") {
        helpers.removeClass('animated');
        document.body.classList.add('animated');
    }
    if (k == "0") {
        helpers.removeClass('animated');
        document.getElementsByClassName('.svg').classList.add('changefilter');
    }
}
function deleteElement() {
    $(".inner").last().remove();

}

setTimeout(function () {
    $("#text").fadeOut().empty();
}, 8000);

function generate() {
    var choices = ["Type a sentence!!!", "Roll your head on the keyboard!", "Type the keyboard like playing a piano", "What is the longest word you know?", "Type the keyboard with your feet!:)"];
    console.log(choices);
    var randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);
    document.querySelector("#text").innerHTML = choices[randomNumber];
}
function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1), 10) + min;
}
function generateRandomColorString() {
    var h = rand(1, 360);
    var s = rand(90, 100);
    var l = rand(50, 60);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
const helpers = {

    removeClass: (cssClass) => {

        if (document.body.classList.contains(cssClass)) {

            document.body.classList.remove(cssClass);

        }
    }
}
// function generateFilter(){
//     var h = rand(1, 360);
//     return 'hue-rotate(' + h + 'deg)';
// }