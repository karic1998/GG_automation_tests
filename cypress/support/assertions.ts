export class Assertions {
  /**
   * Check if an element has a specific class
   * @param {string} selector DOM element selector
   * @param {string} className The class name to check for
   */
  public static elementShouldHaveClass(element: Cypress.Chainable<JQuery<HTMLElement>>, className: string): void {
    element.should("have.class", className);
  }

  /**
   * Check if the current URL contains the specified text
   * @param {string} urlText The text to check for in the URL
   */
  public static urlShouldContain(urlText: string): void {
    cy.url().should("include", urlText);
  }

  /**
   * Assert that a element is disabled
   * @param {string} selector Button selector
   */
  public static elementShouldBeDisabled(selector: string): void {
    cy.get(selector).should("be.disabled");
  }

  /**
   * Assert that an element is visible
   * @param {Cypress.Chainable<JQuery<HTMLElement>>} element DOM element
   */
  public static elementShouldBeVisible(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should("be.visible");
  }

  /**
   * Check if an element contains specific text
   * @param {Element} element DOM element
   * @param {string} expectedText The text to check for
   */
  public static elementShouldContainText(element: Cypress.Chainable<JQuery<HTMLElement>>, expectedText: string): void {
    element.should("contain", expectedText);
  }

  /**
   * Wait for an element to disappear from the DOM
   * @param {Cypress.Chainable<JQuery<HTMLElement>>} element DOM element
   */
  public static waitForElementToDisappear(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should("not.exist");
  }

  public static numberOfItems(element: Cypress.Chainable<JQuery<HTMLElement>>, counter: number): void {
    element.should("have.length", counter);
  }

  public static elementShouldBeEnabled(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should("be.enabled");
  }
}