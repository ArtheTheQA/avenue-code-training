package com.avenuecode.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import com.avenuecode.Base;

import java.util.List;

public class HomePage extends Base {
	
	@FindBy(linkText = "Careers")
	private WebElement careerLink;
	
	@FindBy(xpath = "//*[@id=\"sub-footer-carousel\"]")
	private WebElement carouselSection;
	
	
	@FindBy(xpath = "//div[@id='sub-footer-news']/div[@class='news-content']/div[@class='sub-footer-container']/a/div/h2")
	private WebElement newsLink;
	
	@FindBys({
		@FindBy(xpath = "//div[@id='sub-footer-news']/div[@class='news-content']/div")
	})
	private List<WebElement> newsItems;
	
	@FindBys({
		@FindBy(xpath = "/html/body/div[2]/nav/div/div/nav/ul/li")
	})
	private List<WebElement> headerItems;
	
	@FindBy(xpath = "//*[@id=\"sub-footer-news\"]/h4")
	private WebElement latestH1NewsText;
	
	public void scrollToSeeTheHeader(int pixelsToScroll) throws Exception {
		Thread.sleep(4000);
		((JavascriptExecutor) driver).executeScript("scroll(0," + pixelsToScroll + ");");
		Thread.sleep(4000);
	}
	
	public int newsTotalCount() throws Exception {
		Thread.sleep(4000);
		int totalCount = newsItems.size();
		return totalCount;
	}
	
	public void navigateToCareersPage() throws Exception{
		Thread.sleep(4000);
		careerLink.click();
	}
	
	public void scrollToTheCarouselSection() throws Exception{
		Thread.sleep(4000);
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", carouselSection);
		Thread.sleep(4000);
	}
	
	public void navigateToNewsContent() throws Exception{
		Thread.sleep(4000);
		newsLink.click();
	}
	
	public String getNewsLinkText() throws Exception{
		Thread.sleep(4000);
		return newsLink.getText();
	}
	
	public String getLatestH1NewsText() throws Exception {
		Thread.sleep(4000);
		return latestH1NewsText.getText();
	}
	
	public String[] getHeaderItems() throws Exception {
		Thread.sleep(4000);
		String[] arrayHeaderItems = new String[headerItems.size()];
		for (int i = 0; i < headerItems.size(); i++)
		{
			arrayHeaderItems[i] = headerItems.get(i).getText();
		}
		return arrayHeaderItems;
	}
	
	public Boolean compareArraysString(String[] array1, String[] array2) throws Exception {
		try {
		for(int i = 0; i < array1.length; i++)
		{
			System.out.print(array1[i]);
			System.out.print(array2[i]);
			if (array1[i] != array2[i])
			{
				System.out.print("ok");
			}
			else
				return false;
		}
		
		return true;
		}
		catch (Exception e)
		{
			return false;
		}
	}
}