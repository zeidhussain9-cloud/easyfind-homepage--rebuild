import { test, expect } from "@playwright/test";

test.describe("Service-aware enquiry form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("updates the supporting questions when a service is selected", async ({ page }) => {
    const form = page.locator('form[aria-label="Talk to our expert"]');

    await expect(form.locator("text=Choose a service")).toBeVisible();
    await form.locator("#hero-requirement").selectOption({ label: "Find a property" });
    await expect(form.locator("label[for=hero-location]")).toHaveText("Preferred Bengaluru area");
    await expect(form.locator("label[for=hero-budget]")).toHaveText(
      "Budget and property preferences",
    );
    await expect(form.locator("label[for=hero-details]")).toHaveText(
      "Move-in timing and requirements",
    );

    await form
      .locator("#hero-requirement")
      .selectOption({ label: "Prepare and care for my property" });
    await expect(form.locator("label[for=hero-location]")).toHaveText("Property location");
    await expect(form.locator("label[for=hero-budget]")).toHaveText("Work or property details");
    await expect(form.locator("label[for=hero-details]")).toHaveText(
      "Preparation or care required",
    );
  });

  test("submits the selected service and contextual details without a real lead", async ({
    page,
  }) => {
    let requestCount = 0;
    let requestPayload = "";

    await page.route("**/formResponse", async (route) => {
      requestCount += 1;
      requestPayload = route.request().postData() ?? "";
      await route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "Mock Google Form submission",
      });
    });

    const form = page.locator('form[aria-label="Talk to our expert"]');
    await form.locator("#hero-name").fill("Service Tester");
    await form.locator("#hero-phone").fill("9876543210");
    await form.locator("#hero-requirement").selectOption({
      label: "Manage my property",
    });
    await form.locator("#hero-location").fill("Whitefield");
    await form.locator("#hero-budget").fill("2BHK, occupied");
    await form.locator("#hero-details").fill("Need agreed local coordination and updates.");
    await form.locator('button[type="submit"]').click();

    await expect(page.locator('div[role="status"]')).toBeVisible();
    expect(requestCount).toBe(1);
    expect(decodeURIComponent(requestPayload.replace(/\+/g, " "))).toContain("Manage my property");
    expect(decodeURIComponent(requestPayload.replace(/\+/g, " "))).toContain("Whitefield");
    expect(decodeURIComponent(requestPayload.replace(/\+/g, " "))).toContain(
      "Need agreed local coordination and updates.",
    );
  });
});
