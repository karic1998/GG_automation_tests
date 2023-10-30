import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";


describe("auth - login", () => {

  beforeEach(() => {
    BasePage.open();
  })
  
  it("Login with valid credentials as a Vendor", () => {
    cy.fixture('auth').then((data) => {
      LoginPage.enterEmail(data.email);
      LoginPage.enterPassword(data.password);
      LoginPage.clickLoginButton();
    })
  });

});
