<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1 class="header">นโยบายโดดเด่น</h1>
    <a class="home-link" href="index.php">
        <svg
            class="home-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
        >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
        </svg>
    </a>
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

        $sql = "SELECT policies.name, parties.name AS party, policies.detail, policies.file_name FROM policies LEFT JOIN parties ON policies.party = parties.id";
        $result = $conn->query($sql);

        if($result->num_rows > 0)
        {

            echo "<div class='policies'>";

            while($row = $result->fetch_assoc())
            {
                if($row['party'] == NULL)
                {
                    $row['party'] = "หลายพรรค";
                }
                echo "
                    <div class='policy'>
                        <img class='policy-image' src='assets/policies/{$row['file_name']}' alt='{$row["file_name"]}'>
                        <h3 class='policy-name'>{$row['name']}</h3>
                        <b class='policy-party'>{$row['party']}</b>
                        <p class='policy-detail'>{$row['detail']}</p>
                    </div>
                ";
            }

            echo "</div>";

        }

        else
        {
            echo "0 results";
        }
    ?>
</body>
</html>