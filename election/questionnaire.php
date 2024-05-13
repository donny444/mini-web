<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1 class="header">แบบสอบถาม</h1>
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
    <form action="submit_questionnaire.php" method="post">
        <div class="form-field">
            <label for="name">Name</label>
            <br>
            <input type="text" id="name" name="name" maxlength="20" placeholder="Your identified name" required>
        </div>
        <br>
        <div class="form-field">
            <label for="email">eMail</label>
            <br>
            <input type="email" id="email" name="email" placeholder="Your eMail for contact by government" required>
        </div>
        <br>
        <div class="form-field">
            <label for="age">Age</label>
            <br>
            <input type="number" id="age" name="age" placeholder="Your age" required>
        </div>
        <br>
        <div class="form-field">
            <label for="role">Role</label>
            <br>
            <select id="role" name="role" required>
                <option value="Marketing">Marketing</option>
                <option value="Manager">Manager</option>
                <option value="Engineer">Engineer</option>
                <option value="Artist">Artist</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <br>
        <div class="form-field" id="party">
            <label>Party</label>
            <br>
            <input type="radio" id="พรรคเสรีรวมไทย" name="party" value="9" required>
            <label for="พรรคเสรีรวมไทย">พรรคเสรีรวมไทย</label>
            <br>
            <input type="radio" id="พรรคประชาธิปัตย์" name="party" value="3" required>
            <label for="พรรคประชาธิปัตย์">พรรคประชาธิปัตย์</label>
            <br>
            <input type="radio" id="พรรครวมไทยสร้างชาติ" name="party" value="4" required>
            <label for="พรรครวมไทยสร้างชาติ">พรรครวมไทยสร้างชาติ</label>
            <br>
            <input type="radio" id="พรรคเพื่อไทย" name="party" value="5" required>
            <label for="พรรคเพื่อไทย">พรรคเพื่อไทย</label>
            <br>
            <input type="radio" id="พรรคไทยภักดี" name="party" value="6" required>
            <label for="พรรคไทยภักดี">พรรคไทยภักดี</label>
            <br>
            <input type="radio" id="พรรคก้าวไกล" name="party" value="7" required>
            <label for="พรรคก้าวไกล">พรรคก้าวไกล</label>
            <br>
            <input type="radio" id="พรรคชาติไทยพัฒนา" name="party" value="8" required>
            <label for="พรรคชาติไทยพัฒนา">พรรคชาติไทยพัฒนา</label>
            <br>
            <input type="radio" id="พรรคไทยสร้างไทย" name="party" value="9" required>
            <label for="พรรคไทยสร้างไทย">พรรคไทยสร้างไทย</label>
            <br>
            <input type="radio" id="พรรคชาติพัฒนากล้า" name="party" value="10" required>
            <label for="พรรคชาติพัฒนากล้า">พรรคชาติพัฒนากล้า</label>
            <br>
            <input type="radio" id="พรรคพลังประชารัฐ" name="party" value="11" required>
            <label for="พรรคพลังประชารัฐ">พรรคพลังประชารัฐ</label>
            <br>
            <input type="radio" id="พรรคภูมิใจไทย" name="party" value="22" required>
            <label for="พรรคภูมิใจไทย">พรรคภูมิใจไทย</label>
            <br>
            <input type="radio" id="อื่นๆ" name="party" value="อื่นๆ" required>
            <label for="อื่นๆ">อื่นๆ</label>
        </div>
        <br>
        <div class="form-field">
            <label for="opinion">Opinion</label>
            <br>
            <textarea id="opinion" name="opinion" maxlength="200" placeholder="free speech!"></textarea>
        </div>
        <br>
        <input id="form-submit" type="submit" value="Submit">
    </form>
    <footer>
        <p>Donny Galaxy <span>//</span> No Copyright</p>
    </footer>
</body>
</html>