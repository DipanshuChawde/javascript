const { test, expect } = require('@playwright/test');

test('demo', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
  await page.locator('[name="first_name"]').fill('dipanshu')
  await page.getByPlaceholder('Last Name').fill('chawde')

  await expect(page).toHaveTitle('WebDriver | Contact Us')
})

test('demo2', async ({ page }) => {
  await page.goto('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
  await expect(page.locator('[value="green"]')).not.toBeChecked()
  await page.locator('[value="green"]').check()
  await expect(page.locator('[value="green"]')).toBeChecked()

  await page.locator('[id="dropdowm-menu-1"]').selectOption('Python')
  await page.waitForTimeout(3000)
})

test('demo3', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice')
  await page.on('dialog', async simpleAlart => {
    await expect(simpleAlart.message()).toContain('Hello , share this practice page and share your knowledge')
    await simpleAlart.accept()
  })

  await page.locator('[id="alertbtn"]').click()
})

test('api demo', async ({ request })=>{
  let rowRes=await request.get('https://reqres.in/api/users?page=2')
  let res = await rowRes.json()
  console.log(res)
  await expect(res.per_page).toEqual(6)

})


test('demo4',async ({ page })=>{
  await page.goto('page')
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('css').click()
  ])

  const downloadoath=await download.path()
})
// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
