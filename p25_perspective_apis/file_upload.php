<?php
$uploaddir = '/var/www/test-server/javascript-for-web-developers/p25_perspective_apis/uploaded_files/';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_FILES)) {

    foreach($_FILES as $filename => $data) {
        $uploadfile = $uploaddir . basename($data['name']);

        if (move_uploaded_file($data['tmp_name'], $uploadfile)) {
            echo "File succefully uploaded.\n";
        } else {
            echo "File wasn't uploaded \n";
        }   
    }
}

echo "DEBUG: \n";
print_r($_FILES);

?>