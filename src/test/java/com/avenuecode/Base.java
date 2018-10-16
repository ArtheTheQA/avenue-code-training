package com.avenuecode;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public abstract class Base {
	
    protected static WebDriver driver;

    protected WebDriver getDriver() {
        if (driver == null) {
            driver = new ChromeDriver();
            driver.manage().window().maximize();
        }
        return driver;
    }

    protected WebDriver quitDriver() {
        if (driver != null) {
            driver.quit();
        }
        return driver = null;
    }
}