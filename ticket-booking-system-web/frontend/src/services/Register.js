// ===== Registration Logic =====
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    msg.textContent = "❌ Passwords do not match!";
    return;
  }
  try {
    const data = await apiRequest("/auth/register", "POST", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    msg.textContent = "✅ Registration successful! Redirecting to login...";
    setTimeout(() => {
      window.location.href = "Login.html";
    }, 1500);
  } catch (err) {
    msg.textContent = "❌ Registration failed!";
  }
});

// ===== Dark/Light Mode Toggle =====
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

// ===== Language Toggle (English ↔ Hindi) =====
document.getElementById("langToggle").addEventListener("click", () => {
  const labels = document.querySelectorAll("label");
  const btn = document.getElementById("langToggle");

  if (btn.textContent.includes("हिंदी")) {
    labels.forEach(l => l.textContent = l.dataset.hi);
    btn.textContent = "🌐 English";
  } else {
    labels.forEach(l => l.textContent = l.dataset.en);
    btn.textContent = "🌐 हिंदी";
  }
});
