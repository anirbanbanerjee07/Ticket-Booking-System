<?php
// Database connection file

$host = "localhost";   // XAMPP default
$user = "root";        // XAMPP default
$pass = "";            // XAMPP default password is empty
$db   = "ticket_booking"; // Database name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("❌ Database connection failed: " . $conn->connect_error);
}

$conn->set_charset("utf8"); // Ensure UTF-8 encoding
?>
