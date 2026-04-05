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
    document.getElementById("title").textContent = "🚍 उपयोगकर्ता डैशबोर्ड";
    document.getElementById("welcomeText").textContent = "वापसी पर स्वागत है! आसानी से अपनी बस बुकिंग प्रबंधित करें 🚀";
    document.getElementById("searchBtn").textContent = "🔍 बस खोजें";
    document.getElementById("bookingsBtn").textContent = "📑 मेरी बुकिंग्स";
    document.getElementById("card1Title").textContent = "🔎 खोजें";
    document.getElementById("card1Text").textContent = "उपलब्ध बसें खोजें और तुरंत टिकट बुक करें।";
    document.getElementById("card2Title").textContent = "🚌 मेरी बुकिंग्स";
    document.getElementById("card2Text").textContent = "अपनी आगामी और पिछली यात्राएँ देखें और प्रबंधित करें।";
    document.getElementById("card3Title").textContent = "⚙️ सेटिंग्स";
    document.getElementById("card3Text").textContent = "अपने खाता विवरण और प्राथमिकताएँ अपडेट करें।";
    langBtn.textContent = "🌐 English";
  } else {
    document.getElementById("title").textContent = "🚍 User Dashboard";
    document.getElementById("welcomeText").textContent = "Welcome back! Manage your bus bookings with ease 🚀";
    document.getElementById("searchBtn").textContent = "🔍 Search Buses";
    document.getElementById("bookingsBtn").textContent = "📑 My Bookings";
    document.getElementById("card1Title").textContent = "🔎 Search";
    document.getElementById("card1Text").textContent = "Find available buses and book your tickets quickly.";
    document.getElementById("card2Title").textContent = "🚌 My Bookings";
    document.getElementById("card2Text").textContent = "View and manage your upcoming and past trips.";
    document.getElementById("card3Title").textContent = "⚙️ Settings";
    document.getElementById("card3Text").textContent = "Update your account details and preferences.";
    langBtn.textContent = "🌐 हिंदी";
  }
});
