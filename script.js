console.log("JS loaded");


/* Data (localStorage) */
let skiDays = JSON.parse(localStorage.getItem("skiDays")) || [];

/*  DOM elements */
const form = document.getElementById("skiForm");
const skiList = document.getElementById("skiList");
const conditionsStats = document.getElementById("conditionsStats");
const conditionsGuide = document.getElementById("conditionsGuide");

/* Inital load functions */
if (document.getElementById("stats")) {
    loadDashboardStats();
}

if (skiList) {
    displaySkiDays();
}

if (conditionsGuide) {
    loadConditionsGuide();
}

if (conditionsStats) {
    loadConditionsStats();
}

/* Form handling */
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const conditions = document.getElementById("conditions").value;
        const runs = document.getElementById("runs").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // Validation
        if (!location || !date || !rating) {
            alert("Please fill in required fields");
            return;
        }

        if (rating < 1 || rating > 5) {
            alert("Rating must be between 1 and 5");
            return;
        }

        if (runs < 0) {
            alert("Runs cannot be negative");
            return;
        }

        const newDay = {
            location,
            date,
            conditions,
            runs,
            rating,
            comment
        };

        skiDays.push(newDay);

        localStorage.setItem("skiDays", JSON.stringify(skiDays));

        document.getElementById("message").textContent = "Saved successfully!";

        form.reset();

        displaySkiDays();
    });
}

/* Display season overview (dashboard) */
function loadDashboardStats() {
    const statsDiv = document.getElementById("stats");
    if (!statsDiv) return;

    if (skiDays.length === 0) {
        statsDiv.innerHTML = "<p>No ski days logged yet.</p>";
        return;
    }

    // Total days
    const totalDays = skiDays.length;

    // Total runs
    const totalRuns = skiDays.reduce((sum, day) => sum + Number(day.runs || 0), 0);

    // Average rating
    const avgRating =
        (skiDays.reduce((sum, day) => sum + Number(day.rating || 0), 0) / totalDays).toFixed(1);

    // Most common condition
    const conditionCount = {};

    skiDays.forEach(day => {
        if (day.conditions) {
            conditionCount[day.conditions] = (conditionCount[day.conditions] || 0) + 1;
        }
    });

    let topCondition = "N/A";
    let max = 0;

    for (let condition in conditionCount) {
        if (conditionCount[condition] > max) {
            max = conditionCount[condition];
            topCondition = condition;
        }
    }

    // Render stats
    statsDiv.innerHTML = `
        <p><strong>Total Days:</strong> ${totalDays}</p>
        <p><strong>Total Runs:</strong> ${totalRuns}</p>
        <p><strong>Avg Rating:</strong> ${avgRating}</p>
        <p><strong>Top Condition:</strong> ${topCondition}</p>
    `;
}


/* Display ski days (dashboard) */
function displaySkiDays() {
    if (!skiList) return;

    skiList.innerHTML = "";

    skiDays.forEach((day, index) => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${day.location}</h3>
            <p><strong>Date:</strong> ${day.date}</p>
            <p><strong>Conditions:</strong> ${day.conditions || "N/A"}</p>
            <p><strong>Runs:</strong> ${day.runs || 0}</p>
            <p><strong>Rating:</strong> ${day.rating}</p>
            <p><strong>Comment:</strong> ${day.comment || "No comment"}</p>
            <button onclick="deleteDay(${index})">Delete</button>
        `;

        skiList.appendChild(card);
    });
}

/* Delete entry */
function deleteDay(index) {
    skiDays.splice(index, 1);
    localStorage.setItem("skiDays", JSON.stringify(skiDays));
    displaySkiDays();
    loadDashboardStats();
}


/* Conditions stats */
function loadConditionsStats() {
    const counts = {};

    skiDays.forEach(day => {
        if (day.conditions) {
            counts[day.conditions] = (counts[day.conditions] || 0) + 1;
        }
    });

    const entries = Object.entries(counts);

    if (entries.length === 0) {
        conditionsStats.innerHTML = "<p>No data yet.</p>";
        return;
    }

    entries.forEach(([condition, count]) => {
        const p = document.createElement("p");
        p.textContent = `${condition}: ${count} day(s)`;
        conditionsStats.appendChild(p);
    });
}