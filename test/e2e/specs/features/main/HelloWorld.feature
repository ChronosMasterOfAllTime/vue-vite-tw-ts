Feature: HelloWorld

    I want to open the home page

    Scenario: Navigating Home
        Given I open the home page
        Then I see "Vite App" in the title
        Then I should see the "chronos-logo" element

    @ignore
    Scenario: This Test should be skipped

    Scenario: Clicking on the button enough times should break it
        Given I open the home page
        And I can see the "click-me" element
        When I click on the "click-me" button 60 times
        Then The "click-me" button should say "It's Broken!" and be disabled

    Scenario: Switching Dark Mode
        Given I open the home page
        And I can see the "dark-mode" element
        When I click on the "dark-mode" element
        Then The "dark-mode" switch should say "Dark"
        Then The "app" element should have class "dark"
        Given I refresh the page
        Then The "app" element should have class "dark"

    Scenario: Switching Light Mode
        Given I open the home page
        And I can see the "dark-mode" element
        When I click on the "dark-mode" element
        Then The "dark-mode" switch should say "Dark"
        When I click on the "dark-mode" element
        Then The "dark-mode" switch should say "Light"
        Then The "app" element should not have class "dark"
        Given I refresh the page
        Then The "app" element should not have class "dark"

    Scenario: Mouseover/leave the sidebar
        Given I open the home page
        And I can see the "sidebar" element
        When I trigger the "mouseover" event on the "sidebar" element
        Then The "max-width" style on the "sidebar" element should be "240px"
        When I trigger the "mouseleave" event on the "sidebar" element
        Then The "max-width" style on the "sidebar" element should be "48px"
