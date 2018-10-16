package com.avenuecode.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import com.avenuecode.Base;

public class OpenPositionsPage extends Base {
	
	@FindBys({
		@FindBy(xpath = "//div[@id='locationSelect']/div[@class='options']/div")
	})
	private List<WebElement> cityItems;
	
	public int cityTotalCount() throws Exception {
		Thread.sleep(4000);
		int totalCount = cityItems.size();
		return totalCount;
	}
}