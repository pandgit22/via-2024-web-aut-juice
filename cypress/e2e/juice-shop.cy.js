import { HomePage } from "../pageObjects/HomePage";
import { SearchPage } from "../pageObjects/SearchPage";
import { LoginPage } from "../pageObjects/LoginPage";

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
        SearchPage.lemonCard.click();
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
        SearchPage.eggfruitCard.click();
        // Validate that the card (should) contains "Now with even more exotic flavour."
        SearchPage.validationCard.should("contain.text","Now with even more exotic flavour.")
        // Close the card
        SearchPage.closeDialog.click()
        // Select a product card - Lemon Juice (500ml)
        SearchPage.lemonCard.click();
        // Validate that the card (should) contains "Sour but full of vitamins."
        SearchPage.validationCard.should("contain.text","Sour but full of vitamins.")
        // Close the card
        SearchPage.closeDialog.click()
        // Select a product card - Strawberry Juice (500ml)
        SearchPage.strawberryCard.click()
        // Validate that the card (should) contains "Sweet & tasty!"
      });
    });
    // Create scenario - Read a review
    context("Read a review", () => {
      beforeEach(() => {
        cy.login("demo", "demo");
        HomePage.visit();
      });
      it.only("Read a review", () => {
    // Click on search icon
    SearchPage.searchButton.click();
    // Search for King
    SearchPage.searchType.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    SearchPage.kothCard.click()
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(100)
    SearchPage.reviewButton.click()
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    SearchPage.review1Content.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
      });
    });

    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});