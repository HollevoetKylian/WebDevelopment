const update = () => {
    // Grab the current values of the three sliders
    // Note: getElementById returns a single element, so no [0] needed!
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    let colorDemos = document.getElementsByClassName("colorDemo");

    // Apply the values to the background style
    if (colorDemos.length > 0) {
        colorDemos[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    // Loop through all sliders (Red, Green, and Blue)
    // This ensures every slider triggers the update function
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    // Run update once on load so the box isn't empty/white at the start
    update();
}

window.addEventListener("load", setup);