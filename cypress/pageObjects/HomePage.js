import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get accountButton() {
    return cy.get("[class='mat-focus-indicator mat-menu-trigger buttons mat-button mat-button-base']");
  }
  static get landingLoginButton() {
    return cy.get('#navbarLoginButton')
  }
  static get emailType() {
    return cy.get('#email')
  }
  static get passwordType() {
    return cy.get('#password')
  }
  static get loginButton() {
    return cy.get('#loginButton')
  }
  static get accountNameValidation() {
    return cy.get('.cdk-focused > span')
  }
  static get notYetCustomer() {
    return cy.get('#newCustomerLink > .primary-link')
  }
  static get passwordControl() {
    return cy.get('#passwordControl')
  }
  static get repeatPasswordControl() {
    return cy.get('#repeatPasswordControl')
  }
  static get secQuestion() {
    return cy.get('.mat-select-placeholder')
  }
  static get favouritePetQuestion() {
    return cy.get('#mat-option-9 > .mat-option-text')
  }
  static get securityAnswerControl() {
    return cy.get('#securityAnswerControl')
  }
  static get registerButton() {
    return cy.get('#registerButton')
  }
  static get emailControl() {
    return cy.get('#emailControl')
  }
}