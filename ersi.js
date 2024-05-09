require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
    const map = new Map({
        basemap: "streets-night-vector" // Initial basemap
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 12,
        center: [-123.0868, 44.0521]
    });

    const toggleButton = document.getElementById("toggleBasemap");

    // Function to toggle the basemap and button appearance
    const toggleBasemap = () => {
        if (map.basemap.id === "streets-night-vector") {
            map.basemap = "streets-vector";
            toggleButton.classList.remove("night-mode");
            toggleButton.classList.add("active");
        } else {
            map.basemap = "streets-night-vector";
            toggleButton.classList.add("night-mode");
            toggleButton.classList.remove("active");
        }
    };

    // Set up a click event listener on the button
    toggleButton.addEventListener("click", toggleBasemap);

    // Initial check to apply the night mode class if the night basemap is loaded by default
    if (map.basemap.id === "streets-night-vector") {
        toggleButton.classList.add("night-mode");
    }
});
