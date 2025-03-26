let testBox = document.querySelector(".test");
let h1 = document.querySelector("h1");
let h4 = document.querySelector("h4");

testBox.onmousedown = function test() {
    h1.innerHTML = "Wait For Green...";
    h4.innerHTML = "";
    this.style.backgroundColor = "rgb(206, 38, 54)";
    testBox.onmousedown = function () {
        h1.innerHTML = "Wait For Green Please";
        this.style.backgroundColor = "rgb(43, 135, 209)";
        testBox.onmousedown = test;
        clearTimeout(time);
    };
    let delay = Math.floor(Math.random() * 5000) + 1000;
    let time = setTimeout(function () {
        testBox.style.backgroundColor = "rgb(75, 219, 106)";
        h1.innerHTML = "Click";
        const t0 = performance.now();
        testBox.onmousedown = function () {
            h1.innerHTML = `${Math.trunc(performance.now() - t0)} ms`;
            testBox.onmousedown = test;
        };
    }, delay);
};
