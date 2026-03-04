import { test, expect } from '@playwright/test';
import { Pages } from '../pages/Pages';

test('User logs into portal and submits order form @SmokeTest', async ({ page }) => {

  const pages = new Pages(page);

  await test.step('User logs into portal and navigates to order form', async () => {
    await pages.base.navigateTo(process.env.LOGIN_LANDING_URL || 'https://fallbackurl.com');
    await pages.portal.login.userLogsIntoPortal('usernameRandom', 'passwordRandom');
    await pages.portal.accountLanding.openOrderForm();
  });

  await test.step('User fills out order form and submits', async () => {
    await pages.portal.orderForm.fillFormAndSubmit(
      'randomFirstName',
      'randomLastName',
      '20',
      '10',
      '1990',
      'British'
    );
    await expect(pages.portal.orderForm.rootContainer()).toContainText('Your order has been submitted');
  });

});
