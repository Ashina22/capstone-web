const buildings = {
    library: {
        title: "University Library",
        description: "The library offers a wide range of academic resources including books, journals, and study areas."
    },
    gym: {
        title: "University Gym",
        description: "The gym is equipped with modern fitness equipment and offers various sports activities."
    },
    auditorium: {
        title: "Main Auditorium",
        description: "The auditorium is used for university events, guest lectures, and cultural programs."
    }
};

// Event listener for dropdown change
document.getElementById("buildingSelect").addEventListener("change", function() {
    const selectedBuilding = this.value;
    if (buildings[selectedBuilding]) {
        document.getElementById("buildingTitle").textContent = buildings[selectedBuilding].title;
        document.getElementById("buildingDescription").textContent = buildings[selectedBuilding].description;
    }
});
