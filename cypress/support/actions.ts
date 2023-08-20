export class Actions {
  /**
   * Click on element
   * @param {any} element DOM element selector
   * @return Cypress.Chainable object
   */
  public static click(element: Cypress.Chainable<JQuery<HTMLElement>>, force = false): Cypress.Chainable {
    return element.click({ force });
  }

  /**
   * Type text into an input field
   * @param element Input field selector
   * @param text Text to type into the input field
   * @param force Whether to force the action (default: false)
   */
  public static typeInput(element: Cypress.Chainable<JQuery<HTMLElement>>, text: string, force = false): void {
    element.clear({ force });
    element.type(text, { force });
  }

  public static clearField(element: Cypress.Chainable<JQuery<HTMLElement>>, force = false): void {
    element.clear({ force });
  }

  /**
   * Select an option from a dropdown element
   * @param dropdownElement Dropdown element selector
   * @param option Option to select from the dropdown
   */
  public static selectDropdownOption(
    dropdownElement: Cypress.Chainable<JQuery<HTMLElement>>,
    option: string,
    force = false,
  ) {
    // Click on the dropdown to open the options
    dropdownElement.click({ force });

    // Find the option within the dropdown and click on it
    cy.get(`[role="option"]`).contains(option).click();
  }

  /**
   * Attach a file to a file input element
   * @param fileInput The file input element
   * @param filePath The path to the file to attach
   */
  public static attachFile(fileInput: Cypress.Chainable<JQuery<HTMLElement>>, filePath: string): void {
    fileInput.selectFile(filePath), { force: true };
  }
}