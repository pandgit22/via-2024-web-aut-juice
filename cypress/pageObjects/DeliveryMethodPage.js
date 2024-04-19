import { BasePage } from "../pageObjects/basePage";
    
export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/";
    }

    static get selectDelivery() {
        return cy.get(':nth-child(4) > .cdk-column-Name')
    }
    static get deliveryContinue() {
        return cy.get('.nextButton')
    }

}