<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name  = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $password = $_POST["password"] ?? "";

    if (!$name || !$email || !$password) {
        echo "⚠️ All fields are required!";
        exit;
    }

    // Hash password
    $hashed = password_hash($password, PASSWORD_DEFAULT);

    // Insert user
    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $hashed);

    if ($stmt->execute()) {
        echo "✅ Registration successful! You can now login.";
    } else {
        if ($conn->errno == 1062) {
            echo "⚠️ Email already registered.";
        } else {
            echo "❌ Error: " . $conn->error;
        }
    }
}
?>
