
class BrowseJobsPage {
    page;
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async verifypage() {
        await this.page.getByRole('heading', { name: 'Browse Jobs' }).isVisible();
    }

    async verifyAllJobs(selector) {
        await this.page.locator(selector).isVisible();
        await this.page.locator(selector).click({ timeout: 60000 });
    }
}

module.exports = BrowseJobsPage;


