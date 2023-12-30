let repeat = true;

while (repeat) {
    let age = prompt("Enter the age ");

    if (parseInt(age) >= 18) {
        alert("You are eligible to drive");
    } else {
        alert("You are not eligible to drive");
    }

    repeat = confirm("Do you want to re-enter the age");
}


