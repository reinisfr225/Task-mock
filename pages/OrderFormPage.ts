import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OrderFormPage extends BasePage {

    readonly orderForm: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly dateOfBirthDayInputField: Locator;
    readonly dateOfBirthMonthInputField: Locator;
    readonly dateOfBirthYearInputField: Locator;
    readonly nationalityDropdown: Locator;
    readonly acceptTermsAndConditions: Locator;

    constructor(page: Page) {
        super(page);

        this.orderForm = page.locator('#orderForm');
        this.firstNameInputField = page.locator("#username");
        this.lastNameInputField = page.locator("#password");
        this.dateOfBirthDayInputField = page.locator("#DOBDay");
        this.dateOfBirthMonthInputField = page.locator("#DOBMonth");
        this.dateOfBirthYearInputField = page.locator("#DOBYear");
        this.nationalityDropdown = page.locator("#nationality");
        this.acceptTermsAndConditions = page.getByLabel(/^I accept and have read the conditions/i);
    }

    async openOrderForm() {
        await this.orderForm.click();
    }

    async fillFormAndSubmit(
        firstname: string,
        lastname: string,
        day: string,
        month: string,
        year: string,
        nationality: string
    ): Promise<void> {

        await this.firstNameInputField.fill(firstname);
        await this.lastNameInputField.fill(lastname);

        await this.dateOfBirthDayInputField.fill(day);
        await this.dateOfBirthMonthInputField.fill(month);
        await this.dateOfBirthYearInputField.fill(year);

        await this.nationalityDropdown.selectOption({ label: nationality });

        await this.acceptTermsAndConditions.check();

        await this.clickSubmitButton();
    }

}