function info() {
    // Retrieve values from form fields
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var employeeName = document.getElementById("employeeName").value;
    var salary = document.getElementById("salary").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var fatherName = document.getElementById("fatherName").value;
    var eduQualifications = document.getElementById("eduQualifications").value;
    var experience = document.getElementById("experience").value;
    var expectedSalary = document.getElementById("expectedSalary").value;
    var interests = document.getElementById("interests").value;
    var message = document.getElementById("message");

    // Simple validation, you can add more checks as needed
    if (fullName === "" || email === "" || phoneNumber === "" || employeeName === "" || salary === "" || dob === "" ||
        address === "" || age === "" || gender === "" || fatherName === "" || eduQualifications === "" ||
        experience === "" || expectedSalary === "" || interests === "") {
        message.innerHTML = "Please fill in all fields.";
        return false;
    }

    // Add more specific validation rules for each field as necessary.
    // For example, you can validate email format, age limits, or other constraints.

    return true;
}