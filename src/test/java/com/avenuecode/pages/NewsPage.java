package com.avenuecode.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.avenuecode.Base;

public class NewsPage extends Base {

	@FindBy (xpath = "/html/body/div[2]/section/div/div[1]/article/h1")
	private WebElement NewsH1Content;
	
	private String newsPageTitle = getDriver().getTitle();
	
	
	public String getNewsH1ContentText() throws Exception{
		Thread.sleep(4000);
		System.out.print(NewsH1Content.getText());
		return NewsH1Content.getText();
	}
	
	public String newsPageTitle() throws Exception{
		Thread.sleep(4000);
		return newsPageTitle;
	}
}
