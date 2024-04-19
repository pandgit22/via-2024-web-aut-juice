import { BasePage } from "../pageObjects/basePage";
    
export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/";
    }
    static get selectAddress() {
        return cy.get("[class='mat-row cdk-row ng-star-inserted']")
    }
    static get selectContinue() {
        return cy.get("[class='mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color']")
    }
}
