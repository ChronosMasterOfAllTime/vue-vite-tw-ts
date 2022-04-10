Feature: HelloWorld

    I want to open the home page

    @focus
    Scenario: Navigating Home
        Given I open the home page
        Then I see "Vite App" in the title

    @ignore
    Scenario: This Test should be skipped

    Scenario: Clicking on the button enough times should break it
        Given I can see the "click-me" button
        When I click on the "click-me" button 60 times
        Then The "click-me" button should say "It's Broken!" and be disabled
