<?php
include "db.php";
session_start();

header("Content-Type: application/json");

// Example API router
$action = $_GET["action"] ?? "";

if ($action === "user") {
    if (isset($_SESSION["user_id"])) {
        echo json_encode([
            "id" => $_SESSION["user_id"],
            "name" => $_SESSION["name"]
        ]);
    } else {
        echo json_encode(["error" => "Not logged in"]);
    }
} 
elseif ($action === "logout") {
    session_destroy();
    echo json_encode(["message" => "✅ Logged out successfully"]);
} 
else {
    echo json_encode(["error" => "❌ Invalid action"]);
}
?>
