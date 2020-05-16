<?php 
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id =  $_GET['id'];
    $fName = $request->first_name;
    $lName = $request->last_name;
    $email = $con,$request->email;

    $sql = "UPDATE `students` SET `fName`='$fName',
    `lName`='$lName',`email`='$email'  WHERE `sId`='{$id}' LIMIT 1 ";

    if(mysqli_query($con,$sql)){
        http_response_code(204);
    }
    else{
        return http_response_code(422);
    }
}