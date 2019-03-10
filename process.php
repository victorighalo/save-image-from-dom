<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['files'])) {
$errors = [];
$path = './';
$extensions = ['jpg', 'jpeg', 'png', 'gif'];

$file_name = $_FILES['files']['name'];
$file_tmp = $_FILES['files']['tmp_name'];
$file_type = $_FILES['files']['type'];
$file_size = $_FILES['files']['size'];
$f = $_FILES['files']['name'];
$file_ext = (explode('.', $f));
$file_ext = strtolower(end($file_ext));
$file = date('mds').'_'.$file_name;

if (!in_array($file_ext, $extensions)) {
    $errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
}

if ($file_size > 2097152) {
    $errors[] = 'File size exceeds limit: ' . $file_name . ' ' . $file_type;
}
if (empty($errors)) {
    move_uploaded_file($file_tmp, $file);
    header('Content-type: application/json');
    echo(json_encode(['filename' => $file]));
}

if ($errors) print_r($errors);
    }
 }else{
    print_r("Error! Invalid HTTP Method");
 }