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
    static get lemonCard() {
        return cy.get("[aria-label='Click for more information about the product']").contains('Lemon Juice (500ml)');
      }
    static get eggfruitCard() {
        return cy.get("[aria-label='Click for more information about the product']").contains('Eggfruit Juice (500ml)');
      }
    static get strawberryCard() {
        return cy.get("[aria-label='Click for more information about the product']").contains('Strawberry Juice (500ml)');
      }
    static get kothCard() {
        return cy.get("[aria-label='Click for more information about the product']").contains('OWASP Juice Shop "King of the Hill" Facemask');
    }
    static get reviewButton() {
        return cy.get("[class='mat-content ng-tns-c42-14']");
    }
    static get review1Content() {
        return cy.get(':nth-child(1) > [fxlayout="row"] > .mat-tooltip-trigger > p')
    }
    static get raspberryCard() {
        //return cy.get("[aria-label='Click for more information about the product']").contains('Raspberry Juice(1000ml)');
    }
    static get reviewInputField() {
        return cy.get('#mat-input-1')
    }   
    static get submitButton() {
        return cy.get('#submitButton')
    }
    static get cardByName() {
        return cy.get('[class="item-name"]');
    }
    static get cardList() {
        return cy.get('.mat-grid-list mat-card');
    }
    static get reviewBody() {
        return cy.get('.mat-expansion-panel-body')
    }


}