package framework;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GroupSevenTests {

  WebDriver driver;

  public void invokeBrowser(){
    try {
      String projectDirectory = System.getProperty("user.dir");
      String exePath = projectDirectory + "\\ChromeDriver\\chromedriver.exe";
      System.setProperty("webdriver.chrome.driver", exePath);
      driver = new ChromeDriver();
      driver.manage().deleteAllCookies();
      driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
      driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

      driver.get("http://localhost:3000/");
      // Print a Log In message to the screen
      System.out.println("Successfully opened the website");
      buttonLinks();
      submitQuestion();
      checkQuestion();
      editQuestion();
      checkEditedQuestion();
      deleteQuestion();
    } catch (Exception e) {
      e.printStackTrace();
    }

  }

  public void buttonLinks() {
    System.out.println("Checking button links:");
    driver.findElement(By.xpath("//button[contains(.,'generate')]")).click();
    String currentURL = driver.getCurrentUrl();
    System.out.println("view leads to: " + currentURL);
    driver.findElement(By.xpath("//button[contains(.,'view(alpha)')]")).click();
    currentURL = driver.getCurrentUrl();
    System.out.println("view leads to: " + currentURL);
    driver.findElement(By.xpath("//button[contains(.,'sign up')]")).click();
    currentURL = driver.getCurrentUrl();
    System.out.println("sign up leads to: " + currentURL);
    driver.findElement(By.xpath("//button[contains(.,'home')]")).click();
    currentURL = driver.getCurrentUrl();
    System.out.println("home leads to: " + currentURL);
  }

  public void submitQuestion() {
    driver.findElement(By.xpath("//button[contains(.,'generate')]")).click();
    driver.findElement(By.xpath("//button[contains(.,'short answer')]")).click();
    List<WebElement> textBoxes = driver.findElements(By.xpath("//textarea"));
    Iterator<WebElement> itr = textBoxes.iterator();
    WebElement valueBox = itr.next();
    valueBox.sendKeys("What is the answer?");
    WebElement answerBox = itr.next();
    answerBox.sendKeys("This is the answer.");
    driver.findElement(By.xpath("//button[contains(.,'submit')]")).click();
    System.out.println("Submitted Short Answer Question");
  }

  public void checkQuestion() throws InterruptedException {
    driver.findElement(By.xpath("//button[contains(.,'view(alpha)')]")).click();
    Thread.sleep(500);
    // Loop through all the indices displayed
    List<WebElement> ids = driver.findElements(By.xpath("//*[text()[contains(.,'index')]]"));
    Iterator<WebElement> itr = ids.iterator();
    WebElement lastElement = null;
    while(itr.hasNext()) {
      lastElement = itr.next();
    }
    // Get the parent of the last index and print it
    WebElement parent = (WebElement) ((JavascriptExecutor) driver).executeScript(
        "return arguments[0].parentNode;", lastElement);
    System.out.println("Submitted Question:");
    System.out.println(parent.getText());
  }

  public void editQuestion() throws InterruptedException {
    driver.findElement(By.xpath("//button[contains(.,'view(alpha)')]")).click();
    Thread.sleep(500);
    // Loop through all the indices displayed
    List<WebElement> ids = driver.findElements(By.xpath("//*[text()[contains(.,'edit')]]"));
    Iterator<WebElement> itr = ids.iterator();
    WebElement lastElement = null;
    while(itr.hasNext()) {
      lastElement = itr.next();
    }
    // Press the last edit button
    lastElement.click();

    // Edit the values of the textboxes
    List<WebElement> textBoxes = driver.findElements(By.xpath("//textarea"));
    itr = textBoxes.iterator();
    WebElement valueBox = itr.next();
    valueBox.clear();
    valueBox.sendKeys("What is the actual answer?");
    WebElement answerBox = itr.next();
    answerBox.clear();
    answerBox.sendKeys("This is the REAL answer.");
    driver.findElement(By.xpath("//button[contains(.,'submit')]")).click();
    System.out.println("Edited Short Answer Question");
  }

  public void checkEditedQuestion() throws InterruptedException {
    driver.findElement(By.xpath("//button[contains(.,'view(alpha)')]")).click();
    driver.navigate().refresh();
    Thread.sleep(500);
    // Loop through all the indices displayed
    List<WebElement> ids = driver.findElements(By.xpath("//*[text()[contains(.,'index')]]"));
    Iterator<WebElement> itr = ids.iterator();
    WebElement lastElement = null;
    while(itr.hasNext()) {
      lastElement = itr.next();
    }
    // Get the parent of the last index and print it
    WebElement parent = (WebElement) ((JavascriptExecutor) driver).executeScript(
        "return arguments[0].parentNode;", lastElement);
    System.out.println("Edited Question:");
    System.out.println(parent.getText());
  }

  public void deleteQuestion() throws InterruptedException {
    driver.findElement(By.xpath("//button[contains(.,'view(alpha)')]")).click();
    Thread.sleep(500);

    // Get the last index item
    List<WebElement> ids = driver.findElements(By.xpath("//*[text()[contains(.,'index')]]"));
    Iterator<WebElement> itr = ids.iterator();
    WebElement lastElement = null;
    while(itr.hasNext()) {
      lastElement = itr.next();
    }
    String lastIndex = lastElement.getText().replaceAll("[^0-9]", "");

    // Loop through all the questions displayed
    List<WebElement> deleteButtons = driver.findElements(By.xpath("//*[text()[contains(.,'delete')]]"));
    itr = deleteButtons.iterator();
    WebElement lastDelete = null;
    while(itr.hasNext()) {
      lastDelete = itr.next();
    }
    // Press the last delete button
    System.out.println("Deleting question with index: " + lastIndex);
    
    lastDelete.click();
    
    // Go through final delete
    driver.findElement(By.xpath("//*[text()[contains(.,'DELETE')]]")).click();
    
    // Refresh
    driver.navigate().refresh();
    Thread.sleep(50);

    // Check for last element
    try {
    WebElement fan = driver.findElement(By.xpath("//*[text()[contains(.,'" + lastIndex + "')]]"));
    System.out.println("Last question element is: " + fan.getText());
    } catch(NoSuchElementException e) {
      System.out.println("Question #" + lastIndex + " no longer exists.");
    }
  }

  public static void main(String[] args) throws InterruptedException {
    GroupSevenTests test = new GroupSevenTests();
    test.invokeBrowser();



    //    //Wait for 5 Sec
    //    Thread.sleep(5000);
    //
    //    WebElement click = driver.findElement(By.xpath("//button[contains(.,'generate')]"));
    //
    //    click.click();
    //
    //    //Wait for 5 Sec
    //    Thread.sleep(5000);
    //    // Close the driver
  }

}
