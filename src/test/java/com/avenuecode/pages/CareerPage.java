package com.avenuecode.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.avenuecode.Base;

public class CareerPage extends Base {
	
	@FindBy(linkText = "VIEW ALL OPENINGS")
	private WebElement viewOpenings;
	
	public void navigateToAllOpeningsPage() throws Exception{
		Thread.sleep(4000);
		viewOpenings.click();
	}
}