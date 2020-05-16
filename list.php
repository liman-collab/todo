<?php

require 'connect.php';

error_reporting(E_ERROR);

$students =[];

$sql ="SELECT * FROM students";

$result = mysqli_query($con,$sql)

if($result)
{
    $cr = 0;
    $row = mysqli_fetch_assoc($result);
    while($row){
        $students[$cr]['sId']=$row['sId'];
        $students[$cr]['fName']=$row['fName'];
        $students[$cr]['lName']=$row['lName'];
        $students[$cr]['email']=$row['email'];
        $cr++;
    }

    echo json_encode($students);
}else{
    http_response_code(404);
}
?>