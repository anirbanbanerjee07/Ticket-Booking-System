const bookForm = document.getElementById("bookForm");
const msg = document.getElementById("msg");

// Get bus ID from URL
const params = new URLSearchParams(window.location.search);
const busId = params.get("id");

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
    document.getElementById("title").textContent = "🎫 टिकट बुक करें";
    document.getElementById("seatsLabel").textContent = "सीटें:";
    bookForm.querySelector(".btn").textContent = "✅ बुकिंग करें";
    langBtn.textContent = "🌐 English";
  } else {
    document.getElementById("title").textContent = "🎫 Book Ticket";
    document.getElementById("seatsLabel").textContent = "Seats:";
    bookForm.querySelector(".btn").textContent = "✅ Confirm Booking";
    langBtn.textContent = "🌐 Hindi";
  }
});

// Submit booking
bookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    await apiRequest("/booking", "POST", {
      busId,
      seats: seats.value,
    }, token);
    msg.style.color = "green";
    msg.textContent = isHindi ? "✅ बुकिंग सफल!" : "✅ Booking successful!";
  } catch (err) {
    msg.style.color = "red";
    msg.textContent = isHindi ? "❌ बुकिंग असफल!" : "❌ Booking failed!";
  }
});
