import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInputField = page.locator('#username');
        this.passwordInputField = page.locator('#password');

    }

    async userLogsIntoPortal(username: string, password: string): Promise<void> {
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.clickLoginButton();
    }

}