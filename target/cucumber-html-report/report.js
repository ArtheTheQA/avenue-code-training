$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/HeaderContent.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want the Home Page header to display",
  "description": "the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers. \nIn Portuguese version it should display: Home, Quem Somos Nos, O Que Fazemos, \nPortfolio, Parceiros, Carreiras.",
  "id": "as-a-user-i-want-the-home-page-header-to-display",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Visit Avenue Code website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 4533250089,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "As a user I should be able to see on Home Page header display the",
  "description": "following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers",
  "id": "as-a-user-i-want-the-home-page-header-to-display;as-a-user-i-should-be-able-to-see-on-home-page-header-display-the",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I scroll the page 80 pixels to bottom",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I should be able to see the the following links displayed on the header: Home, Who We Are, What We Do, Portfolio, Partners, Careers, Contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 18
    }
  ],
  "location": "HeaderSteps.i_scroll_the_page_pixels_to_bottom(int)"
});
formatter.result({
  "duration": 8052040657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home, Who We Are, What We Do, Portfolio, Partners, Careers, Contact",
      "offset": 73
    }
  ],
  "location": "HeaderSteps.i_should_be_able_to_see_the_the_following_links_displayed_on_the_header_Home_Who_We_Are_What_We_Do_Portfolio_Partners_Careers(String)"
});
formatter.result({
  "duration": 4532792038,
  "status": "passed"
});
formatter.after({
  "duration": 75088097,
  "status": "passed"
});
formatter.uri("com/Login.feature");
formatter.feature({
  "line": 1,
  "name": "As an Avenue Code website user, I want to see 6 locations for job positions in Careers Page",
  "description": "",
  "id": "as-an-avenue-code-website-user,-i-want-to-see-6-locations-for-job-positions-in-careers-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfully display job locations",
  "description": "",
  "id": "as-an-avenue-code-website-user,-i-want-to-see-6-locations-for-job-positions-in-careers-page;successfully-display-job-locations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Open Positions page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see at least 3 job locations",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3494608633,
  "status": "passed"
});
formatter.match({
  "location": "CareerSteps.i_navigate_to_Open_Positions_page()"
});
formatter.result({
  "duration": 9733338937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "CareerSteps.i_should_see_at_least_three_job_locations(int)"
});
formatter.result({
  "duration": 4044177968,
  "status": "passed"
});
formatter.after({
  "duration": 70299759,
  "status": "passed"
});
formatter.uri("com/NewsContent.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want the footer to display the top three News,",
  "description": "when a link is clicked it should redirect to the content.",
  "id": "as-a-user-i-want-the-footer-to-display-the-top-three-news,",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Visit Avenue Code website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3587329755,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As a user I should be able to see footer to display the top 3 News",
  "description": "",
  "id": "as-a-user-i-want-the-footer-to-display-the-top-three-news,;as-a-user-i-should-be-able-to-see-footer-to-display-the-top-3-news",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I should be able to see the top 3 News",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "NewsSteps.i_should_be_able_to_see_the_top_News(int)"
});
formatter.result({
  "duration": 4030405238,
  "status": "passed"
});
formatter.after({
  "duration": 69653302,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Visit Avenue Code website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3863235466,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As a user I should be able to visualize the news content",
  "description": "",
  "id": "as-a-user-i-want-the-footer-to-display-the-top-three-news,;as-a-user-i-should-be-able-to-visualize-the-news-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I scroll to the Carousel Section",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on a news link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be redirect to the content",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsSteps.i_scroll_to_the_carousel_section()"
});
formatter.result({
  "duration": 8034514357,
  "status": "passed"
});
formatter.match({
  "location": "NewsSteps.i_click_on_a_news_link()"
});
formatter.result({
  "duration": 8056943785,
  "status": "passed"
});
formatter.match({
  "location": "NewsSteps.i_should_be_redirect_to_the_content()"
});
formatter.result({
  "duration": 8195983065,
  "status": "passed"
});
formatter.after({
  "duration": 80844437,
  "status": "passed"
});
formatter.uri("com/NewsDetails.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want the footer to display the latest event,",
  "description": "when a event is clicked it should redirect to the \nEvents page displaying the modal with the event details.",
  "id": "as-a-user-i-want-the-footer-to-display-the-latest-event,",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Visit Avenue Code website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3320611088,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "As a user I should be able to see footer to display the Latest News",
  "description": "",
  "id": "as-a-user-i-want-the-footer-to-display-the-latest-event,;as-a-user-i-should-be-able-to-see-footer-to-display-the-latest-news",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I should be able to see the Latest News",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsSteps.i_should_be_able_to_see_the_latest_news()"
});
formatter.result({
  "duration": 4067080111,
  "status": "passed"
});
formatter.after({
  "duration": 70092402,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Visit Avenue Code website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.match({
  "location": "NewsSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3401773772,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user I should be able to see the Events page displaying the modal with the event details",
  "description": "",
  "id": "as-a-user-i-want-the-footer-to-display-the-latest-event,;as-a-user-i-should-be-able-to-see-the-events-page-displaying-the-modal-with-the-event-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on a news link",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should be redirect to the content",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsSteps.i_click_on_a_news_link()"
});
formatter.result({
  "duration": 8652432721,
  "status": "passed"
});
formatter.match({
  "location": "NewsSteps.i_should_be_redirect_to_the_content()"
});
formatter.result({
  "duration": 8166645122,
  "status": "passed"
});
formatter.after({
  "duration": 72810424,
  "status": "passed"
});
});