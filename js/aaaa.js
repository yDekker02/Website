// the text change button
function BA() {
    if (document.getElementById('1').innerText != "BBBBBB") {
        document.getElementById('1').innerText='BBBBBB' 
    }
    else {
        document.getElementById('1').innerText="AAAAAA"
    }
}

// the frog button code is a mess but no other way to do it
function AB() {
    if (document.getElementById('2').innerText != "frogger happy") {
        document.getElementById('2').innerText="frogger happy"
        document.getElementById('3').src = "img/frog2.png"
        document.getElementById("body").style.backgroundImage = "radial-gradient(#f00, #000)"
        document.getElementById("5").innerText = "angry rotating frog"
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
        document.getElementById('2').innerText = "frogger angry"
        document.getElementById('3').src = "img/frog.png"
        document.getElementById("body").style.backgroundImage = "radial-gradient(#fff, #f6f)"
        document.getElementById("5").innerText = "rotating frog"
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