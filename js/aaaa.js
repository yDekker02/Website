// the text change button
function BA() {
    var one = document.getElementById('1')

    if (one.innerText != "BBBBBB") {
        one.innerText='BBBBBB' 
    }
    else {
        one.innerText="AAAAAA"
    }
}

// the frog button code is a mess but no other way to do it
function AB() {
    var btext = document.getElementById('2');
    var image = document.getElementById('3');
    var utext = document.getElementById('5');
    var body = document.getElementById("body").style;


    if (btext.innerText != "frogger happy") {
        btext.innerText = "frogger happy"
        image.src = "img/frog2.png"
        body.backgroundImage = "radial-gradient(#f00, #000)"
        utext.innerText = "angry rotating frog"
        css().bind(".frog", {
            "border-radius" : "20%",
            "background-color" : "#FF002A"
          });
        css().bind(".frog:hover", {
            "background" : "#b80000"
        });
        css().bind(".frog:active", {
            "background": "#ee2b2b"
        })
    }
    else {
        btext.innerText = "frogger angry"
        image.src = "img/frog.png"
        body.backgroundImage = "radial-gradient(#fff, #f6f)"
        utext.innerText = "rotating frog"
        css().bind(".frog", {
            "border-radius" : "20%",
            "background-color" : "#77B255"
          });
        css().bind(".frog:hover", {
            "background" : "#709e55"
        });
        css().bind(".frog:active", {
            "background": "#7abc54"
        })
    }
}