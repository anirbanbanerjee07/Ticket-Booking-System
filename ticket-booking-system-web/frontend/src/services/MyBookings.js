const bookingsContainer = document.getElementById("bookings");

// Dark / Light Mode Toggle
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

// Hindi / English Toggle
const langBtn = document.getElementById("langToggle");
let isHindi = false;
langBtn.addEventListener("click", () => {
  isHindi = !isHindi;
  if (isHindi) {
    document.getElementById("title").textContent = "📑 मेरी बुकिंग्स";
    langBtn.textContent = "🌐 English";
  } else {
    document.getElementById("title").textContent = "📑 My Bookings";
    langBtn.textContent = "🌐 Hindi";
  }
});

// Load bookings from API
window.onload = async () => {
  try {
    const token = localStorage.getItem("token");
    const data = await apiRequest("/booking/my", "GET", null, token);

    if (!data.length) {
      bookingsContainer.innerHTML = "<p>❌ No bookings found!</p>";
      return;
    }

    bookingsContainer.innerHTML = data.map(b => `
      <div class="booking-card">
        <div class="booking-info">
          <h3>${b.bus.name}</h3>
          <p>🪑 Seats: ${b.seats}</p>
          <p>🗓️ Date: ${b.date || "Not specified"}</p>
        </div>
        <div class="booking-actions">
          <a href="Booking.html?id=${b._id}">✏️ Edit</a>
          <a href="#" onclick="cancelBooking('${b._id}')">❌ Cancel</a>
        </div>
      </div>
    `).join("");
  } catch (err) {
    bookingsContainer.innerHTML = "<p>❌ Could not load bookings!</p>";
  }
};

// Cancel booking placeholder
function cancelBooking(id) {
  alert(`Booking ${id} cancelled (demo).`);
}
