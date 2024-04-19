import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/";
  }
    static get addNewAddressButton() {
        return cy.get("[aria-label='Add a new address']");
    }
    static get validateNewAddress() {
        return cy.get('.mat-card')
    }
    
}
