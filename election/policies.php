<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1>นโยบายโดดเด่น</h1>
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

        $sql = "SELECT name, party, detail, file_name FROM policies";
        $result = $conn->query($sql);

        if($result->num_rows > 0)
        {
            while($row = $result->fetch_assoc())
            {
                if($row['party'] == NULL)
                {
                    $row['party'] = "หลายพรรค";
                }
                echo "
                    <div class='policy'>
                        <img class='policy-image' src='assets/{$row['file_name']}' alt='{$row["file_name"]}'>
                        <h3 class='policy-name'>{$row['name']}</h3>
                        <b class='policy-party'>{$row['party']}</b>
                        <p class='policy-detail>{$row['detail']}</p>
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