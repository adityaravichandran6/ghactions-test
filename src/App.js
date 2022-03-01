import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-container">
        <div className="cloud-image">
            <img src="img/successCloudNew.svg" />
        </div>
        <div className="content">
            <div className="tweet-container">
            <a href="http://twitter.com/intent/tweet/?text=I%20just%20created%20a%20new%20HTML%20website%20on%20Azure%20using%20Azure%20DevOps%20Project&hashtags=AzureDevOpsProject%2CVSTS%20%40Azure%20%40VSTS">
                <img src="img/tweetThis.svg" />
            </a>            
        </div>
            <div className="content-body">
                <div className="success-text">Success!</div>
                <div className="description line-1"> Azure DevOps Project has been successfully setup</div>
                <div className="description line-2"> Your HTML app is up and running on Azure</div>
                <div className="next-steps-container">
                    <div className="next-steps-header">Next up</div>
                    <div className="next-steps-body">
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/cloneWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://go.microsoft.com/fwlink/?linkid=862409">Clone your code repository and start developing your application on IDE of your choice</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/deployWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://go.microsoft.com/fwlink/?linkid=862410">View your CI/CD pipeline on Visual Studio Team Services and customize it as per your needs</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/stackWhite.svg" />
                            </div>
                            <div className="step-text"><a href="http://portal.azure.com">View your service stack in the Azure Portal</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/lightbulbWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://go.microsoft.com/fwlink/?linkid=862126">Learn more about all you can do with Azure projects by visiting the documentation</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
