package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\VishwanathChenni\\Project\\UdamyProject\\APIFrameWorkFromScratch\\my-app\\src\\test\\java\\Features",
        glue = {"stepDefinition"},
        plugin = {"pretty","html:target/cucumber-report.html","json:target/cucumber.json"}
        )
public class TestRunner {
}
