Feature: HelloWorld

    I want to open the home page

    @focus
    Scenario: Navigating Home
        Given I open the home page
        Then I see "Vite App" in the title
