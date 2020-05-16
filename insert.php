<?php
require 'connect.php';

$postdata = file_get_contents("php://input");//GET DATA INPUT 

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize
    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $email = $request->email;  

    //Store
    $sql = "INSERT INTO  `students` (
        `fName`,
        `lName`,
        `email`
    ) VALUES
    (
        '{$fName}',
        '{$lName}',
        '{$email}',)
     ";

     if(mysqli_query($con,$sql))
     {
         http_response_code(201);
     }
     else{
         http_response_code(422);
     }

}

