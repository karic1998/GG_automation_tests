import { Actions } from "../support/actions";
import { Assertions } from "../support/assertions";


export class LoginPage {

    private static emailInput(){
       return cy.get('input[name="email"]');
    }

    private static passwordInput(){
        return cy.get('input[name="password"]');
    }

    private static loginButton(){
        return cy.get('button[class="login-button"]');
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

    public static clickLoginButton(){
        Actions.click(this.loginButton());
    }

    ////////////////////
    //PAGE ASSERTIONS//
    ///////////////////


}
