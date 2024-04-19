import { HomePage } from "../pageObjects/HomePage";
import { SearchPage } from "../pageObjects/SearchPage";
import { LoginPage } from "../pageObjects/LoginPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click(); 
      // Click Login button
      HomePage.landingLoginButton.click(); 
      // Set email value to "demo"
      HomePage.emailType.type("demo");
      // Set password value to "demo"
      HomePage.passwordType.type("demo");
      // Click Log in
      HomePage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click(); 
      // Validate that "demo" account name appears in the menu section
      HomePage.accountNameValidation.should("contain.text","demo")
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click(); 
      // Login button
      HomePage.landingLoginButton.click(); 
      // Click "Not yet a customer?"
      LoginPage.notYetCustomer.click();
      // Find - how to generate random number in JS
      const randomNumber = Math.floor(Math.random() * 9000) + 1000;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const email = `kakis_${randomNumber}@ebox.com`;
      // Fill in password field and repeat password field with same password
      LoginPage.passwordControl.type("demo5");
      // Click on Security Question menu
      LoginPage.secQuestion.click()
      // Select  "Name of your favorite pet?"
      LoginPage.favouritePetQuestion.click()
      // Fill in answer
      LoginPage.securityAnswerControl.type("kakis")
      // Set email value to previously created email
      LoginPage.emailControl.type(email)
      // Set password value to previously used password value
      LoginPage.repeatPasswordControl.type("demo5");
      // Click Register button
      LoginPage.registerButton.click()
      // Click login button
      LoginPage.emailType.type(email);
      LoginPage.passwordType.type("demo5");
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click(); 
      // Validate that account name (with previously created email address) appears in the menu section
      LoginPage.accountNameValidation.should("contain.text",email)
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      SearchPage.searchButton.click();
      // Search for Lemon
      SearchPage.searchType.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      SearchPage.searchCard.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.validationCard.should("contain.text","Sour but full of vitamins.")
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    context("Search 500ml and validate Lemon, while having multiple cards", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Search 500ml and validate Lemon, while having multiple cards", () => {
        // Click on search icon
        SearchPage.searchButton.click();
        // Search for 500ml
        SearchPage.searchType.type("500ml{enter}");
        // Select a product card - Lemon Juice (500ml)
        SearchPage.card.contains('Lemon Juice (500ml)').click();
        // Validate that the card (should) contains "Sour but full of vitamins."
        SearchPage.validationCard.should("contain.text","Sour but full of vitamins.")
      });
    });
    // Create scenario - Search 500ml and validate cards
    context("Search 500ml and validate cards", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Search 500ml and validate cards", () => {
        // Click on search icon
        SearchPage.searchButton.click();
        // Search for 500ml
        SearchPage.searchType.type("500ml{enter}");
        // Select a product card - Eggfruit Juice (500ml)
        SearchPage.card.contains('Eggfruit Juice (500ml)').click();
        // Validate that the card (should) contains "Now with even more exotic flavour."
        SearchPage.validationCard.should("contain.text","Now with even more exotic flavour.")
        // Close the card
        SearchPage.closeDialog.click()
        // Select a product card - Lemon Juice (500ml)
        SearchPage.card.contains('Lemon Juice (500ml)').click();
        // Validate that the card (should) contains "Sour but full of vitamins."
        SearchPage.validationCard.should("contain.text","Sour but full of vitamins.")
        // Close the card
        SearchPage.closeDialog.click()
        // Select a product card - Strawberry Juice (500ml)
        SearchPage.card.contains('Strawberry Juice (500ml)').click();
        // Validate that the card (should) contains "Sweet & tasty!"
      });
    });
    // Create scenario - Read a review
    context("Read a review", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Read a review", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for King
    SearchPage.searchType.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    SearchPage.card.contains('King of the Hill').click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(100)
    SearchPage.reviewButton.click()
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    SearchPage.reviewBody.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
      });
    });

    // Create scenario - Add a review
    context("Add a review", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Add a review", () => {
      // Click on search icon
      SearchPage.searchButton.click();
      // Search for Raspberry
      SearchPage.searchType.type("Raspberry{enter}");

      // Select a product card - Raspberry Juice (1000ml)
      SearchPage.card.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      cy.wait(1000)
      SearchPage.reviewInputField.type("Tastes like metal")
      // Click Submit
      SearchPage.submitButton.click()
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(100)
      // Validate review -  "Tastes like metal"
        SearchPage.reviewBody.should("contain.text","Tastes like metal")
      });
    });

    // Create scenario - Validate product card amount
    context("Validate product card amount", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    SearchPage.cardList.should("have.length",12)
    // Change items per page (at the bottom of page) to 24
    SearchPage.cardDropdown.click()
    SearchPage.cardDropdown24.click()
    // Validate that the amount of cards is 24
    SearchPage.cardList.should("have.length",24)
    // Change items per page (at the bottom of page) to 36
    SearchPage.cardDropdown.click()
    SearchPage.cardDropdown36.click()
    // Validate that the amount of cards is 35
    SearchPage.cardList.should("have.length",35)
     });
  });
  
    // Create scenario - Buy Girlie T-shirt
    context("Create scenario - Buy Girlie T-shirt", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Create scenario - Buy Girlie T-shirt", () => {
        // Click on search icon
        SearchPage.searchButton.click();
        // Search for Girlie
        SearchPage.searchType.type("Girlie{enter}");
        // Add to basket "Girlie"
        SearchPage.addToBasket.click()
        // Click on "Your Basket" button
        SearchPage.showBasket.click()
        // Create page object - BasketPage
        // Click on "Checkout" button
        BasketPage.checkoutButton.click()
        // Create page object - SelectAddressPage
        // Select address containing "United Fakedom"
        SelectAddressPage.selectAddress.contains("United Fakedom").click()
        // Click Continue button
        SelectAddressPage.selectContinue.contains("navigate_next").click()
        // Create page object - DeliveryMethodPage
        // Select delivery speed Standard Delivery
        DeliveryMethodPage.selectDelivery.contains("Standard Delivery").click()
        // Click Continue button
        DeliveryMethodPage.deliveryContinue.click()
        // Create page object - PaymentOptionsPage
        // Select card that ends with "5678"
        PaymentOptionsPage.selectCreditCard("5678").click()
        // Click Continue button
        PaymentOptionsPage.cardContinue.click()
        // Create page object - OrderSummaryPage
        // Click on "Place your order and pay"
        OrderSummaryPage.checkoutButton.click()
        // Create page object - OrderCompletionPage
        // Validate confirmation - "Thank you for your purchase!"
        OrderCompletionPage.validateCompletion.should("contain.text","Thank you for your purchase!")
      });
    });
// Create scenario - Add address
    context("Create scenario - Add address", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Create scenario - Add address", () => {
        // Click on Account
        HomePage.accountButton.click(); 
        // Click on Orders & Payment
        cy.wait(100)
        HomePage.orderPaymentButton.click();
        // Click on My saved addresses
        cy.wait(100)
        HomePage.mySavedAddresses.click();
        // Create page object - SavedAddressesPage
        // Click on Add New Address
        SavedAddressesPage.addNewAddressButton.click()
        // Create page object - CreateAddressPage
        // Fill in the necessary information
        CreateAddressPage.setCountry.type("United Fakedom")
        CreateAddressPage.setName.type("John")
        CreateAddressPage.setNumber.type("34564365")
        CreateAddressPage.setZIP.type("3245234")
        CreateAddressPage.setAddress.type("United Fakedom")
        CreateAddressPage.setCity.type("Womanchester")
        CreateAddressPage.setState.type("idk")
        // Click Submit button
        CreateAddressPage.submitButton.click()
        // Validate that previously added address is visible
        SavedAddressesPage.validateNewAddress.should("contain.text","Womanchester")
      });
    });

    // Create scenario - Add payment option
    context("Add payment option", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it("Add payment option", () => {
        // Click on Account
        HomePage.accountButton.click(); 
        // Click on Orders & Payment
        cy.wait(100)
        HomePage.orderPaymentButton.click();
        // Click on My payment options
        HomePage.myPaymentOptions.click()
        // Create page object - SavedPaymentMethodsPage
        // Click Add new card
        SavedPaymentMethodsPage.addNewCard.click()
        // Fill in Name
        SavedPaymentMethodsPage.addName.type("demo")
        // Fill in Card Number
        SavedPaymentMethodsPage.addCardNumber.type("3456345634563456")
        // Set expiry month to 7
        SavedPaymentMethodsPage.addExpiryMonth.click()
        SavedPaymentMethodsPage.expiryMonth.select(6)
        // Set expiry year to 2090
        SavedPaymentMethodsPage.addExpiryYear.click()
        SavedPaymentMethodsPage.expiryYear.select(10)
        // Click Submit button
        SavedPaymentMethodsPage.submitButton.click()
        // Validate that the card shows up in the list
        SavedPaymentMethodsPage.validateNewCard.should("contain.text","7/2090")
      });
    });
  });
});