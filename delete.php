<?php
require 'connect.php';
$id = $GET['id'];

$sql = "DELETE FROM `students` WHERE `sId` ='{$id}' LIMIT 1";

if(mysqli_query($con,$sql))
{
    http_response_code(204);
}
else{
    return http_response_code(422);
}