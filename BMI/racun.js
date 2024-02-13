let wp = document.getElementById("wP");
let wm = document.getElementById("wM");
let ap = document.getElementById("aP");
let am = document.getElementById("aM");
let godine = document.getElementById("godine");
let tezina = document.getElementById("tezina");
let male = document.getElementById("male");
let female = document.getElementById("female");
let visinaBr = document.getElementById("visinaBr");
let slider = document.getElementById("slider");
// let cal = document.getElementById("cal");
let muski;
let zenski;
let brW = 70;
let brA = 20;





slider.addEventListener("change", function () {
    visinaBr.innerHTML = parseInt(slider.value) + " cm";
});



male.addEventListener("click", function () {
    male.style.backgroundColor = "rgb(20, 20, 20)";
    female.style.backgroundColor = "rgb(59, 59, 59)";
    muski = true;
    zenski = false;
});


female.addEventListener("click", function () {
    female.style.backgroundColor = "rgb(20, 20, 20)";
    male.style.backgroundColor = "rgb(59, 59, 59)";
    muski = false;
    zenski = true;
});

wp.addEventListener("click", function () {
    brW++;
    tezina.innerHTML = brW;
});

ap.addEventListener("click", function () {
    brA++;
    godine.innerHTML = brA;
});

wm.addEventListener("click", function () {
    brW--;
    if (brW <= 0) {
        brW = 0;
    }
    tezina.innerHTML = brW;
});

am.addEventListener("click", function () {
    brA--;
    if (brA <= 0) {
        brA = 0;
    }
    godine.innerHTML = brA;
});


let rez = document.getElementById("rezultat");
let rezultat = function () {
    rez.classList.add("rezultat");
    rez.classList.remove("rezNone")
}

let restart = function () {
    rez.classList.add("rezNone");
    rez.classList.remove("rezultat");
}

let izr = document.getElementById("izr");

let izracun = function () {
    let dr = (parseInt(slider.value) * parseInt(slider.value) / 10000);
    let bmi = brW / dr;
    izr.innerHTML = "BMI " + bmi.toFixed(1);
    return bmi.toFixed(1);
}


let ocj = document.getElementById("ocjena");


let ocjena = function () {
    let bmi = izracun();
    console.log(bmi);
    let ocjena;
    let izr = document.getElementById("izracun");
    if (bmi < 16) {
        ocjena = "Ozbiljna pothranjenost";
        izr.style.backgroundColor = "red";
    } else if (bmi < 18.5) {
        ocjena = "Umjerena pothranjenost";
        izr.style.backgroundColor = "rgb(140, 140, 3)";
    } else if (bmi < 24.9) {
        ocjena = "Normalan";
        izr.style.backgroundColor = "green";
    } else if (bmi < 29.9) {
        ocjena = "Prekomjerna masa";
        izr.style.backgroundColor = "rgb(140, 140, 3)";
    } else if (bmi < 34.9) {
        ocjena = "Pretilost";
        izr.style.backgroundColor = "red";
    } else {
        ocjena = "Opasna pretilost";
        izr.style.backgroundColor = "red";
    }

    ocj.innerHTML = ocjena;


    // console.log(ocjena);

}


