let vf = new VideoFilter(
    document.getElementById('mainCanvas'),
    document.getElementById('videoObj'),
);

let filterButton = document.getElementById("capture");
filterButton.addEventListener('click', () => {
    vf.capture()
});

let lightnessButton = document.getElementById("lightness");
lightnessButton.addEventListener('click', (e) => {
    vf.filter(e.target.id);
});

let luminosityButton = document.getElementById("luminosity");
luminosityButton.addEventListener('click', (e) => {
    vf.filter(e.target.id);
});

let averageButton = document.getElementById("average");
averageButton.addEventListener('click', (e) => {
    vf.filter(e.target.id);
});

let blurButton = document.getElementById("blur");
blurButton.addEventListener('click', (e) => {
    vf.filter(e.target.id);
});



