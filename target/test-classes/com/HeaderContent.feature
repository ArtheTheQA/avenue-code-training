Feature: As a user I want the Home Page header to display 
the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers. 
In Portuguese version it should display: Home, Quem Somos, O Que Fazemos, 
Portfólio, Parceiros, Carreiras.

	Background: Visit Avenue Code website
	    Given I visit Avenue Code website
    
    Scenario: As a user I should be able to see on Home Page header display the
    following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers
    	When I scroll the page 80 pixels to bottom
    	Then I should be able to see the the following links displayed on the header: Home, Who We Are, What We Do, Portfolio, Partners, Careers, Contact

	Scenario: As a user I should be able to see on Home Page header display the
    following links: Home, Quem Somos, O Que Fazemos, Portfólio, Parceiros, Carreiras
    	Given I click on Portuguese Website
		When I scroll the page 80 pixels to bottom
    	Then I should be able to see the the following links displayed on the header: Home, Quem Somos, O Que Fazemos, Portfólio, Parceiros, Carreiras, Contato