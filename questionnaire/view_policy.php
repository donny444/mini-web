<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "log";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn -> connect_error)
    {
        die("Connection failed: " . $conn -> connect_error);
    }

    $sql = "SELECT name, party, fileName, detail FROM policies";
    $result = $conn->query($sql);

    if(result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            echo `
                <div>
                    <h3>$row["name"]</h3>
                    <b>$row["party"]</b>
                    <img src="$row["fileName"] alt="$row["fileName"]>
                    <p>$row["detail"]</p>
                </div>
            `;
        }
    }
    else
    {
        echo "0 results";
    }
?>