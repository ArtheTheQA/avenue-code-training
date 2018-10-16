package com.avenuecode.steps;
import static org.junit.Assert.assertTrue;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HeaderSteps extends CommonSteps {
	
	@Given("^I scroll the page (\\d+) pixels to bottom$")
	public void i_scroll_the_page_pixels_to_bottom(int pixelsToScroll) throws Throwable {
		homePage.scrollToSeeTheHeader(pixelsToScroll);
	}

	@Then("^I should be able to see the the following links displayed on the header: ([^/:]+$)$")
	public void i_should_be_able_to_see_the_the_following_links_displayed_on_the_header_Home_Who_We_Are_What_We_Do_Portfolio_Partners_Careers(String headerStringContent) throws Throwable {
		assertTrue(homePage.compareArraysString(headerStringContent.split(", "), homePage.getHeaderItems()));
	}
}
