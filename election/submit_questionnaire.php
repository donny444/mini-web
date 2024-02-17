<?php
$servername = "localhost"; // Replace with your server name
$username = "root"; // Replace with your username
$password = ""; // Replace with your password
$dbname = "election";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO questionnaire (name, email, age, role, party, opinion) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssisss", $name, $email, $age, $role, $party, $opinion);

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$role = $_POST['role'];
$party = $_POST['party'];
$opinion = $_POST['opinion'];

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>