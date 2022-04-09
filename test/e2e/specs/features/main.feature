Feature: HelloWorld

    I want to open the home page

    @focus
    Scenario: Opening a search engine page
        Given I open Google page
        Then I see "Google" in the title
