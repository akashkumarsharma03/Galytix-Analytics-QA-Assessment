const { test} = require('@playwright/test');
const { testData ,uri } = require('../utilites/data');
const BrowseJobsPage = require('../pages/BrowseJobsPage');
const JobDetailsPage = require('../pages/JobDetailsPage');
const JobApplicationPage = require('../pages/JobApplicationPage');

test.use({
  ignoreHTTPSErrors: true,
  launchOptions: {
    headless: false,
    args: ['--ignore-certificate-errors'],
  }
});

test('Verify Browse Jobs page', async ({ page }) => {
  const browseJobsPage = new BrowseJobsPage(page);
  await browseJobsPage.navigate(uri[0].local);
  await browseJobsPage.verifypage();


});

test('Apply for a job from the Browse Jobs page', async ({ page }) => {
  const browseJobsPage = new BrowseJobsPage(page);
  const jobDetailsPage = new JobDetailsPage(page);
  const jobApplicationPage = new JobApplicationPage(page);

  const jobSelectorsOnBrowseJobs = [
    'li:has-text("Sr. Software DeveloperLocation: Gurgaon, IndiaDate posted: 2020-07-")',
    'li:has-text("Sr. Software DeveloperLocation: London, UKDate posted: 2020-07-")',
    'li:has-text("Testing EngineerLocation: Gurgaon, IndiaDate posted: 2020-07-")',
    'li:has-text("Testing EngineerLocation: London, UKDate posted: 2020-07-")',
    'li:has-text("Sr. Web Designer Location: Gurgaon, India Date posted: 2020-07-")',
    'li:has-text("Sr. Web Designer Location: London, UK Date posted: 2020-07-")'
  ];

  await browseJobsPage.navigate(uri[0].local);
 
  for (const selector of jobSelectorsOnBrowseJobs) {
    await browseJobsPage.verifyAllJobs(selector);
    await jobDetailsPage.verifyJobDetails();
    for (let i = 0; i < testData.length; i++) {
       await jobApplicationPage.fillApplication(testData[i].name, testData[i].email );

    }
    await jobApplicationPage.submitApplication();


  }
});
