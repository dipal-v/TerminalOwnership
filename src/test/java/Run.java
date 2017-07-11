import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by dipal vyas on 11/07/2017.
 */



    import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


    /**
     * Created by dipal vyas on 02/05/2017.
     */

    @RunWith(Cucumber.class)
    @CucumberOptions
            (
                    format = {"html:target/cucumber","json:target/cucumber-report.json"},
                    features = {"src/test"}
                    //   tags = {""}

            )



    public class Run {
    }


