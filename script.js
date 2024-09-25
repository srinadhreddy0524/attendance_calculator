function calculateAttendance() {
    // Get input values
    const total = parseInt(document.getElementById('total').value);
    const present = parseInt(document.getElementById('present').value);
    const absent = parseInt(document.getElementById('absent').value);
    const weeklyClasses = parseInt(document.getElementById('weekly-classes').value);

    if (isNaN(total) || isNaN(present) || isNaN(absent) || isNaN(weeklyClasses)) {
        document.getElementById('result').innerHTML = "Please fill all fields with valid numbers.";
        return;
    }

    // Step 1: Calculate current attendance percentage
    const currentAttendance = (present / total) * 100;

    // Step 2: Calculate classes needed for 75% attendance
    const requiredAttendance = 0.75 * total;
    const classesNeeded = Math.max(0, Math.ceil(requiredAttendance - present));

    // Step 3: Calculate days needed
    const classesPerDay = weeklyClasses / 5;
    const daysNeeded = Math.ceil(classesNeeded / classesPerDay);

    // Display results
    document.getElementById('result').innerHTML = `
        <p>Current Attendance: ${currentAttendance.toFixed(2)}%</p>
        <p>Classes Needed to reach 75%: ${classesNeeded} classes </p>
        <p>Days Needed to reach 75%: ${daysNeeded} days</p>
    `;
}
