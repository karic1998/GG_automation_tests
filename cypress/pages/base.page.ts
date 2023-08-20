export class BasePage {

  public static open(){
    cy.visit('https://app.qa.gogoods.io/');
  }
}
