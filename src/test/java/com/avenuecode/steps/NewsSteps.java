package com.avenuecode.steps;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.junit.Assert.assertTrue;

public class NewsSteps extends CommonSteps {
	
    @Given("^I visit Avenue Code website$")
    public void i_visit_Avenue_Code_website() throws Throwable {
    	driver.get("https://www.avenuecode.com/");
    }

	@Then("^I should be able to see the top (\\d+) News$")
	public void i_should_be_able_to_see_the_top_News(int expected_quatity) throws Throwable {
	    assertThat(homePage.newsTotalCount(), greaterThanOrEqualTo(expected_quatity));
	}
	
	@Given("^I scroll to the Carousel Section$")
	public void i_scroll_to_the_carousel_section() throws Throwable {
	    homePage.scrollToTheCarouselSection();
	}
	
	@When("^I click on a news link$")
	public void i_click_on_a_news_link() throws Throwable {
	    homePage.navigateToNewsContent();
	}

	@Then("^I should be redirect to the content$")
	public void i_should_be_redirect_to_the_content() throws Throwable {
		assertTrue(homePage.getNewsLinkText().contains(newsPage.getNewsH1ContentText()));
	}
	
	@Then("^I should be able to see the Latest News$") // use regex please
	public void i_should_be_able_to_see_the_latest_news() throws Throwable {
	    assertTrue(homePage.getLatestH1NewsText().contains("Latest News")); // use regex please
	}
	
    @After
    public void turnDown() {
    	this.driver = quitDriver();
    }

}
