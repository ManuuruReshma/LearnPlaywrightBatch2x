let islogginedIn = true;
let userRole = "xyz";
if (islogginedIn) {

    if (userRole === "admin") {
        console.log("admin can access all features");
    }
    else if (userRole === "editor") {
        console.log("editor can access editing features");
    } else {
        console.log("viewer can access viewing features");

    }
} else {
    console.log("Please log in to access features");
}