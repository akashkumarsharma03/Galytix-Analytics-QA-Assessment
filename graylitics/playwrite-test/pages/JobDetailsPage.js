

class JobDetailsPage  {
    page;
    constructor(page) {
        this.page = page;
    }

    async verifyJobDetails() {
        await this.page.getByRole('heading', { name: 'DETAILED ROLE DESCRIPTION:' }).isVisible();
        await this.page.getByRole('heading', { name: 'DESIRED SKILLS:' }).isVisible();
        await this.page.getByRole('heading', { name: 'WHY YOU DO NOT WANT TO MISS' }).isVisible();
        await this.page.getByRole('button', { name: 'APPLY NOW' }).click();

    }   

  
}

module.exports = JobDetailsPage;
