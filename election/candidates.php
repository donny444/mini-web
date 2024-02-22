<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1>แคนดิเดตนายก</h1>
    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "election";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if($conn -> connect_error)
        {
            die("Connection failed: " . $conn -> connect_error);
        }

        $sql = "SELECT name, party FROM candidates";
        $result = $conn->query($sql);

        if($result->num_rows > 0)
        {
            while($row = $result->fetch_assoc())
            {
                echo "
                    <div class='candidate'>
                        <img class='candidate-image' src='assets/{$row['file_name']} alt='{$row['file_name']}'>
                        <div class='candidate-text'>
                            <h3 class='candidate-name'>{$row['name']}</h3>
                            <p class='candidate-party'>สังกัดพรรค: {$row['party']}</p>
                        </div>
                    </div>
                ";
            }
        }
        else
        {
            echo "0 results";
        }
    ?>
</body>
</html>