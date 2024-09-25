// Function to calculate age based on the provided date of birth
function calculateAge(dob) {
    // Convert the date of birth from string to Date object
    const birthDate = new Date(dob);
    const today = new Date();

    // Calculate the difference in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Calculate the difference in months and days
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

// Function to get and validate the user's input
function getUserInputAndCalculateAge() {
    // Prompt the user to enter their date of birth
    const dob = prompt("Please enter your Date of Birth in the format YYYY-MM-DD:");

    // Check if the user entered a valid date
    if (dob === null || dob.trim() === "") {
        alert("You didn't enter any date. Please try again.");
        return;
    }

    const birthDate = new Date(dob);

    // Check if the entered date is a valid date
    if (isNaN(birthDate.getTime())) {
        alert("Invalid date format. Please enter the date in the format YYYY-MM-DD.");
        return;
    }

    // Calculate the age using the calculateAge function
    const age = calculateAge(dob);

    // Display the calculated age to the user
    alert(`You are ${age} years old.`);
}

// Run the function to interact with the user
getUserInputAndCalculateAge();