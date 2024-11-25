<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set the content type to application/json
header('Content-Type: application/json');

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is received correctly
if ($data === null) {
    echo json_encode(['message' => 'Error: No data received.']);
    exit;
}

// Check for required fields
$requiredFields = ['studentId', 'firstName', 'lastName', 'email', 'password'];
foreach ($requiredFields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        echo json_encode(['message' => "Error: Missing required field - $field."]);
        exit;
    }
}

// Here you can process the data, such as saving it to a database
// For demonstration purposes, we will just return a success message
echo json_encode(['message' => 'Form submitted successfully!']);
?>