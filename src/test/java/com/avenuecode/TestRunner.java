package com.avenuecode;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
	glue = {"com.avenuecode.steps"},
	plugin = { "pretty", "html:target/cucumber-html-report"},
	features = "src/test/resources"
)

public class TestRunner {
	
}