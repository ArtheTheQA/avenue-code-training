Feature: As a user I want the footer to display the top three News,
when a link is clicked it should redirect to the content.

Background: Visit Avenue Code website
    Given I visit Avenue Code website

Scenario: As a user I should be able to see footer to display the top 3 News
    Then I should be able to see the top 3 News
    
Scenario: As a user I should be able to visualize the news content
	Given I scroll to the Carousel Section
    When I click on a news link
    Then I should be redirect to the content