
class JobApplicationPage {
    page;

    constructor(page) {
        this.page = page;
    }

    async fillApplication( name, email ) {
        await this.page.getByText('Name*Email*Attach ResumeApply').isVisible();
        await this.page.getByPlaceholder('Name').fill(name);
        await this.page.getByPlaceholder('Please enter your email').fill(email);
        
    }

    async submitApplication() {
        await this.page.locator('input[name="resume"]').setInputFiles('utilites/Akash.pdf');
        await this.page.getByRole('button', { name: 'Apply Now', exact: true }).click();
        await this.page.getByText('Application submitted').isVisible();
        await this.page.goBack();

    }

    
}

module.exports = JobApplicationPage;

