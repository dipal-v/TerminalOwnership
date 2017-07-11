import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by dipal vyas on 11/07/2017.
 */
public class MyStepdefs {


        MyfirstMethod myfirstmethod = new MyfirstMethod();

        @When("^User gets response for terminal id '(.+)'$")
        public void userGetsResponseForTerminalId(String terminalID) {
            myfirstmethod.getterminalID(terminalID);
        }

        @Then("^He should get response code '(.+)'$")
        public void heShouldGetResponseCode(int responseCode)  {
            myfirstmethod.verifyResponsecode(responseCode);
        }
    }


