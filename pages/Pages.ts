import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { OrderFormPage } from "./OrderFormPage";
import { AccountLandingPage } from "./AccountLandingPage";

export class Pages {
    constructor(private readonly page: Page) { }

    get base() {
        return new BasePage(this.page);
    }

    get portal() {
        return {
            login: new LoginPage(this.page),
            orderForm: new OrderFormPage(this.page),
            accountLanding: new AccountLandingPage(this.page)
        }
    }
}