class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}
class LoginPage extends BasePage {
    verify() {
        console.log("Verify:username field exists");
        console.log("Verify:password field exists");
        console.log("Verify:Login button is visible");
    }
}
class DashBoardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("verify: sidebar menu loaded");
    }
}
class CartPage extends BasePage {
    verify() {
        console.log("Verify : cart items");
        console.log("Verify: total price")
    }
}
let pages = [new LoginPage(), new DashBoardPage(), new CartPage()];
pages.forEach(function (page) {
    page.verify();
    console.log("-----");
});