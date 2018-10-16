Feature: As a user I want the Home Page header to display 
the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers. 
In Portuguese version it should display: Home, Quem Somos Nos, O Que Fazemos, 
Portfolio, Parceiros, Carreiras.

	Background: Visit Avenue Code website
	    Given I visit Avenue Code website
    
    Scenario: As a user I should be able to see on Home Page header display the
    following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers
    	Given I scroll the page 80 pixels to bottom
    	Then I should be able to see the the following links displayed on the header: Home, Who We Are, What We Do, Portfolio, Partners, Careers, Contact