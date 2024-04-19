import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/";
  }
  static get addNewCard() {
    return cy.get('#mat-expansion-panel-header-0')
  }
  static get addName() {
    return cy.get('#mat-input-1')
  }
  static get addCardNumber() {
    return cy.get('#mat-input-2')
  }
  static get addExpiryMonth() {
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']")
  }
  static get expiryMonth() {
    return cy.get('select').eq(0)
  }
  static get addExpiryYear() {
    return cy.get("[class='mat-form-field-infix ng-tns-c22-15']")
  }
  static get expiryYear() {
    return cy.get('select').eq(1)
  }
  static get submitButton() {
    return cy.get('#submitButton')
  }
  static get validateNewCard() {
    return cy.get(':nth-child(3) > .cdk-column-Expiry')
  }
}