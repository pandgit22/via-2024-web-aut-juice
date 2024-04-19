import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

    static get setCountry() {
        return cy.get('#mat-input-1')
    }
    static get setName() {
        return cy.get('#mat-input-2')
    }
    static get setNumber() {
        return cy.get('#mat-input-3')
    }
    static get setZIP() {
        return cy.get('#mat-input-4')
    }
    static get setAddress() {
        return cy.get('#address')
    }
    static get setCity() {
        return cy.get('#mat-input-6')
    }
    static get setState() {
        return cy.get('#mat-input-7')
    }
    static get submitButton() {
        return cy.get('#submitButton')
    }
    
}
