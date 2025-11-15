// Dynamically insert the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
onst temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893",
    area: 253015,
    image: "images/salt-lake-temple.jpg"


  },
  {
    name: "Nauvoo Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "1846",
    area: 54000,
    image: "images/nauvoo-temple.jpg"

  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    image: "images/accra-ghana-temple.jpg"
  },
  {
    name: "Nairobi Kenya Temple",
    location: "Nairobi,Kenya",
    dedicated: "2024",
    area: 35000,
    image: "images/nairobi-kenya-temple.jpg"
  }
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44175,
    image: "images/paris-france-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    image: "images/rome-italy-temple.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980",
    area: 52590,
    image: "images/tokyo-japan-temple.jpg"

  },
  {
    name: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983",
    area: 116642,
    image: "images/mexico-city-temple,jpg"

  },
  {
    name: "Johannesburg Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985",
    area: 19000,
    image: "images/johannesburg-temple.jpg"
  },

  // EXTRA 3 (as required)
  {
    name: "Dubai Temple",
    location: "Dubai, United Arab Emirates",
    dedicated: "2024",
    area: 28000,
    image: "images/dubai-temple.jpg"
  },
  {
    name: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986",
    area: 96000,
    image: "images/lima-peru-temple.jpg"
  },
  {
    name: "Seattle Washington Temple",
    location: "Seattle, Washington, USA",
    dedicated: "1980",
    area: 110000,
    image: "images/seattle-washington-temple.jpg"
  }
];

// DISPLAY FUNCTION
function displayTemples(list) {
  const container = document.querySelector("#temples-container");
  container.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${t.image}" alt="${t.name}" loading="lazy">
            <h2>${t.name}</h2>
            <p><strong>Location:</strong> ${t.location}</p>
            <p><strong>Dedicated:</strong> ${t.dedicated}</p>
            <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
        `;

    container.appendChild(card);
  });
}

// FILTER BUTTONS
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    let result = temples;

    if (filter === "old") {
      result = temples.filter(t => parseInt(t.dedicated) < 1900);
    } else if (filter === "new") {
      result = temples.filter(t => parseInt(t.dedicated) > 2000);
    } else if (filter === "large") {
      result = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      result = temples.filter(t => t.area < 10000);
    }

    displayTemples(result);
  });
});

// INITIAL LOAD
displayTemples(temples);

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
