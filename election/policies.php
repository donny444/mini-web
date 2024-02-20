<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1>Featured Policy</h1>
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

    $sql = "SELECT name, party, detail, fileName FROM policies";
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
                <div>
                    <h3>{$row['name']}</h3>
                    <b>{$row['party']}</b>
                    <img src='assets/{$row['fileName']}' alt='{$row["fileName"]}'>
                    <p>{$row['detail']}</p>
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