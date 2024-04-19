import { BasePage } from "../pageObjects/basePage";
    
export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/";
    }
    static get chooseCard() {
        return cy.get("[class='mat-cell cdk-cell cdk-column-Number mat-column-Number ng-star-inserted']")
    }
    static get cardContinue() {
        return cy.get('.nextButton')
    }
    static selectCreditCard(int) {
        return this.chooseCard.contains(int).parent('mat-row').find('.mat-radio-button');
    }


}