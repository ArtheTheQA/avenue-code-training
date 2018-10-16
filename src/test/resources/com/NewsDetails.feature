Feature: As a user I want the footer to display the latest event,
when a event is clicked it should redirect to the 
Events page displaying the modal with the event details.

Background: Visit Avenue Code website
    Given I visit Avenue Code website
    
Scenario: As a user I should be able to see footer to display the Latest News
    Then I should be able to see the Latest News
    
Scenario: As a user I should be able to see the Events page displaying the modal with the event details
    Given I click on a news link
    Then I should be redirect to the content