<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Election</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <h1>Questionnaire</h1>
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
            <input type="radio" id="พรรคก้าวไกล" name="party" value="พรรคก้าวไกล" required>
            <label for="พรรคก้าวไกล">พรรคก้าวไกล</label>
            <br>
            <input type="radio" id="พรรคเพื่อไทย" name="party" value="พรรคเพื่อไทย" required>
            <label for="พรรคเพื่อไทย">พรรคเพื่อไทย</label>
            <br>
            <input type="radio" id="พรรครวมไทยสร้างชาติ" name="party" value="พรรครวมไทยสร้างชาติ" required>
            <label for="พรรครวมไทยสร้างชาติ">พรรครวมไทยสร้างชาติ</label>
            <br>
            <input type="radio" id="พรรคพลังประชารัฐ" name="party" value="พรรคพลังประชารัฐ" required>
            <label for="พรรคพลังประชารัฐ">พรรคพลังประชารัฐ</label>
            <br>
            <input type="radio" id="พรรคประชาธิปัตย์" name="party" value="พรรคประชาธิปัตย์" required>
            <label for="พรรคประชาธิปัตย์">พรรคประชาธิปัตย์</label>
            <br>
            <input type="radio" id="พรรคไทยภักดี" name="party" value="พรรคไทยภักดี" required>
            <label for="พรรคไทยภักดี">พรรคไทยภักดี</label>
            <br>
            <input type="radio" id="พรรคภูมิใจไทย" name="party" value="พรรคภูมิใจไทย" required>
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