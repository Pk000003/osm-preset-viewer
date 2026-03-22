const dataContainer = document.getElementById("categories");
const searchInput = document.getElementById("search");

let data;

// Load JSON
fetch('data.json')
.then(res => res.json())
.then(json => {
    data = json;
    displayPresets(data);
});

//Highlight matched search terms
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Display presets in the container
function displayPresets(filteredData, query = "") {
    dataContainer.innerHTML = "";

    for (let category in filteredData) {
        if (filteredData[category].length === 0) continue;

        let catTitle = document.createElement("h2");
        catTitle.className = "category-title";
        catTitle.textContent = category;
        dataContainer.appendChild(catTitle);

        let grid = document.createElement("div");
        grid.className = "preset-grid";

        filteredData[category].forEach(preset => {
            let card = document.createElement("div");
            card.className = "preset-card";

            let title = document.createElement("h2");
            title.innerHTML = `${preset.icon} ` + highlightText(preset.name, query);
            card.appendChild(title);

            let termsDiv = document.createElement("div");
            termsDiv.className = "terms";

            preset.terms.forEach(term => {
                let span = document.createElement("span");
                span.innerHTML = highlightText(term, query);
                termsDiv.appendChild(span);
            });

            card.appendChild(termsDiv);
            grid.appendChild(card);
        });

        dataContainer.appendChild(grid);
    }
}

// Search filter
searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const filtered = {};

    for (let category in data) {
        filtered[category] = data[category].filter(preset => {
            return preset.name.toLowerCase().includes(query) ||
                preset.terms.some(term => term.toLowerCase().includes(query));
        });
    }

    displayPresets(filtered, query);
});

// Category buttons
document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const query = searchInput.value.toLowerCase();
        const filtered = {};

        for (let cat in data) {
            if(category === "All" || cat === category) {
                filtered[cat] = data[cat].filter(preset => {
                    return preset.name.toLowerCase().includes(query) ||
                        preset.terms.some(term => term.toLowerCase().includes(query));
                });
            } else {
                filtered[cat] = [];
            }
        }

        displayPresets(filtered, query);
    });
});
