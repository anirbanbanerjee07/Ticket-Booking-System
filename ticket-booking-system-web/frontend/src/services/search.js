// === Dark/Light Mode Toggle ===
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

// === Language Toggle ===
const langBtn = document.getElementById("langToggle");
let isHindi = false;
langBtn.addEventListener("click", () => {
  isHindi = !isHindi;
  if (isHindi) {
    document.getElementById("title").textContent = "बस खोजें";
    document.getElementById("fromLabel").textContent = "से:";
    document.getElementById("toLabel").textContent = "तक:";
    document.getElementById("searchBtn").textContent = "🔍 खोजें";
    langBtn.textContent = "🌐 English";
  } else {
    document.getElementById("title").textContent = "Search Buses";
    document.getElementById("fromLabel").textContent = "From:";
    document.getElementById("toLabel").textContent = "To:";
    document.getElementById("searchBtn").textContent = "🔍 Search";
    langBtn.textContent = "🌐 Hindi";
  }
});

// === Search Functionality ===
document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const results = document.getElementById("results");

  try {
    // Placeholder API call (replace with real backend)
    const buses = [
      { _id: 1, name: "Express Line", seats: 20 },
      { _id: 2, name: "Comfort Travels", seats: 15 }
    ];
    
    results.innerHTML = buses.map(b => `
      <div class="card">
        <div>
          <h3>${b.name}</h3>
          <p>🪑 Seats: ${b.seats}</p>
        </div>
        <div class="actions">
          <a href="Booking.html?id=${b._id}">Book</a>
          <a href="#">Details</a>
        </div>
      </div>
    `).join("");
  } catch (err) {
    results.innerHTML = "<p>❌ No results found!</p>";
  }
});
