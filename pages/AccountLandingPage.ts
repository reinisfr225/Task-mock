import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountLandingPage extends BasePage {

    readonly orderForm: Locator;

    constructor(page: Page) {
        super(page);

        this.orderForm = page.locator('#orderForm');

    }

    async openOrderForm(): Promise<void> {
        await this.orderForm.click();
    }

}