Feature: HelloWorld

    I want to open the home page

    @focus
    Scenario: Navigating Home
        Given I open the home page
        Then I see "Vite App" in the title

    @ignore
    Scenario: This Test should be skipped

    Scenario: Clicking on the button enough times should break it
        Given I can see the "click-me" element
        When I click on the "click-me" button 60 times
        Then The "click-me" button should say "It's Broken!" and be disabled

    Scenario: Switching Dark Mode
        Given I can see the "dark-mode" element
        When I click on the "dark-mode" element
        Then The "dark-mode" switch should say "Dark"
