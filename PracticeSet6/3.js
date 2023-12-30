let repeat = true;

while (repeat) {
    let age = prompt("Enter the age ");

    if (parseInt(age) >= 18) {
        alert("You are eligible to drive");
    }else if(age <= 0){
        console.error("Please enter valid age");
        break;
    } else {
        alert("You are not eligible to drive");
    }

    repeat = confirm("Do you want to re-enter the age");
}

// The loop will continue as long as the user clicks "OK" in the confirm dialog.
