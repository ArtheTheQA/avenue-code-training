package com.avenuecode.steps;

import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import static org.hamcrest.MatcherAssert.assertThat; 
import static org.hamcrest.Matchers.*;

public class CareerSteps extends CommonSteps {

	@When("^I navigate to Open Positions page$")
	public void i_navigate_to_Open_Positions_page() throws Throwable {
	    homePage.navigateToCareersPage();
	    careerPage.navigateToAllOpeningsPage();
	}

	@Then("^I should see at least (\\d+) job locations$")
	public void i_should_see_at_least_three_job_locations(int expected_quatity) throws Throwable {
	    assertThat(openPositionsPage.cityTotalCount(), greaterThanOrEqualTo(expected_quatity));
	}
}