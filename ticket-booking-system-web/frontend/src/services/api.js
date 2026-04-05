const API_URL = "http://localhost:5000/api";

async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (data) options.body = JSON.stringify(data);
  if (token) options.headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}