import { Actions } from "../support/actions";
import { Assertions } from "../support/assertions";


export class LoginPage {

    private static emailInput(){
       return cy.get('input[name="email"]');
    }

    private static passwordInput(){
        return cy.get('input[name="password"]');
    }
    
    private static showPasswordButton(){
        return cy.get('.input-wrapper > :nth-child(3) > .icon-24');
    }

    private static loginButton(){
        return cy.get('button[type="submit"]');
    }

    private static forgotPasswordButton(){
        return cy.get('p[class="forgot-password mt-8"]');
    }

    private static termsConditionsLink(){
        return cy.get('[routerlink="/terms-and-conditions"]');
    }

    private static privacyPolicyLink(){
        return cy.get('[routerlink="/privacy-policy"]');
    }

    private static profileIcon(){
        return cy.get('div[class="avatar-man-icon icon-24"]');
    }

    ////////////////
    //PAGE ACTIONS//
    ////////////////

    public static enterEmail(value: string){
        Actions.typeInput(this.emailInput(),value);
    }

     public static enterPassword(value: string){
        Actions.typeInput(this.passwordInput(), value)
    }

    public static clickShowPasswordButton(){
        Actions.click(this.showPasswordButton());
    }

    public static clickLoginButton(){
        Actions.click(this.loginButton());
    }

    public static clickForgotPasswordButton(){
        Actions.click(this.forgotPasswordButton());
    }

    public static clickTermsConditionsLink(){
        Actions.click(this.termsConditionsLink());
    }

    public static clickPrivacyPolicyLink(){
        Actions.click(this.privacyPolicyLink());
    }

    ////////////////////
    //PAGE ASSERTIONS//
    ///////////////////

    public static isUserLoggedInSuccessfully(){
        Assertions.elementShouldBeVisible(this.profileIcon());
    }

}
