import { BasePage } from "../pageObjects/basePage";
    
export class SearchPage extends BasePage {
    static get url() {
        return "/#/";
    }
    static get searchButton() {
        return cy.get('.mat-search_icon-search')
      }
    static get searchType() {
        return cy.get('#mat-input-0')
    }
    static get closeDialog() {
        return cy.get('.close-dialog')
    }
    static get searchCard() {
        return cy.get('.mat-card')
      }
    static get validationCard() {
        return cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
      }
    static get card() {
        return cy.get("[aria-label='Click for more information about the product']");
      }
    static get reviewButton() {
        return cy.get("[class='mat-content ng-tns-c42-14']");
    }
    static get reviewInputField() {
        return cy.get('#mat-input-1')
    }   
    static get submitButton() {
        return cy.get('#submitButton')
    }
    static get reviewBody() {
        return cy.get('.mat-expansion-panel-body')
    }
    static get cardList() {
        return cy.get('.mat-grid-list mat-card')
    }
    static get cardTile() {
        return cy.get('mat-grid-tile')
    }
    static get cardDropdown() {
        return cy.get('#mat-select-value-1')
    }
    static get cardDropdown24() {
        return cy.get('#mat-option-1 > .mat-option-text')
    }
    static get cardDropdown36() {
        return cy.get('#mat-option-2 > .mat-option-text')
    }
    static get addToBasket() {
        return cy.get("[aria-label='Add to Basket']");
    }
    static get showBasket() {
        return cy.get("[aria-label='Show the shopping cart']");
    }
}