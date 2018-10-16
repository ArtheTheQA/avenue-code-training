package com.avenuecode.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.avenuecode.Base;
import com.avenuecode.pages.*;

public class CommonSteps extends Base {
	
	protected WebDriver driver = getDriver();
	
	protected HomePage homePage = PageFactory.initElements(driver, HomePage.class);
	protected NewsPage newsPage = PageFactory.initElements(driver, NewsPage.class);
	protected OpenPositionsPage openPositionsPage = PageFactory.initElements(driver, OpenPositionsPage.class);
	protected CareerPage careerPage = PageFactory.initElements(driver, CareerPage.class);
}