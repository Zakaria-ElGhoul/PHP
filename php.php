  
<?php

// Zakaria Elghoul Aadi GD1A
$FirstName = $_REQUEST["firstname"];
$LastName = $_REQUEST["lastname"];
$Age = $_REQUEST["age"];

if ($FirstName !== "" && $LastName !== "" && $Age !== "") {
    echo "<br><ul>
    <li>First Name: $FirstName</li>
    <li>Last Name: $LastName</li>
    <li>Age: $Age</li></ul><br><br>";

    echo "Recieved at: " . date("Y-m-d") . "<br>";
    echo "Time: " . date("h-m-s") . "<br>";
    return;
}
return;
?>