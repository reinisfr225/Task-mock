import { Locator, Page } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickSubmitButton(): Promise<void> {
        await this.page.getByRole("button", { name: "Submit" }).click();
    }

    async clickLoginButton(): Promise<void> {
        await this.page.getByRole("button", { name: "Login" }).click();
    }

    rootContainer(): Locator {
        return this.page.locator('#root');
    }

}