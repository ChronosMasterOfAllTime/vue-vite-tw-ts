Feature: HelloWorld

    I want to open the home page

    @focus
    Scenario: Navigating Home
        Given I open the home page
        Then I see "Vite App" in the title

    @ignore
    Scenario: Clicking on the button
        Given I can see the "click-me" button
