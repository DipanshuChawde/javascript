const { test, expect } = require('@playwright/test')

test('Navigate to Desmos site', async ({ page }) => {
    await page.goto('https://www.desmos.com/')

    // 1:
    await expect(page).toHaveTitle("Desmos | Let's learn together.")

    // 2:
    await page.getByText('Math Tools').click()
    await page.locator('.dcg-dropdown-link >.dcg-dropdown-text').nth(1).click()

    // let textCount = await page.locator('.dcg-dropdown-link >.dcg-dropdown-text').count()
    // console.log(textCount)
    // for(let i = 0; i < textCount; i++){
    //     let text = await page.locator('.dcg-dropdown-link >.dcg-dropdown-text').nth(i).textContent()
    //     console.log(text)
    //     if(text === 'Scientific Calculator'){
    //         await page.locator('.dcg-dropdown-link >.dcg-dropdown-text').nth(i).click()
    //         break;
    //     }  
    // }

    let digit2 = await page.locator('.dcg-mq-digit').nth(8).click()
    await page.getByLabel('Times').click();
    let phi = await page.locator('.dcg-mq-nonSymbola').last().click()
    
    await page.getByLabel('Times').click();
    let digit3 = await page.locator('.dcg-mq-digit').nth(3).click()
    await page.getByLabel('Enter').click();
    await expect(page.locator('.dcg-basic-expression-value >div >span').first()).toContainText('equals 50.2 6 5 4')

    // 3:
    let expList = await page.$$('.dcg-basic-expression')
    await expect(expList.length).toBe(2)
    await expect.soft( await page.locator('.dcg-basic-expression').nth(1)).toHaveClass('dcg-basic-expression dcg-focused',{exact:true})
    await page.keyboard.press("Enter")


    // // // 4:
     await page.getByLabel('8', { exact: true }).click()
    await page.getByLabel('5', { exact: true }).click()
     await page.getByLabel('Divide').click()
    await page.locator('[aria-label="You need a denominator for the bottom of your fraction."]').click()
    

    const attributeValue = await page.locator('.dcg-sticky-tooltip').getAttribute('aria-label'); // Replace 'attribute-name' with the actual attribute
    console.log(attributeValue)

    expect(attributeValue).toBe('You need a denominator for the bottom of your fraction.');
    // await expect(page.locator('.dcg-sticky-tooltip')).toHaveAttribute('aria-label')

    
    // // await expect(page.locator('.dcg-mq-editable-field.dcg-mq-math-mode >.dcg-mq-aria-alert')).innerText()

    // // 5:

    await page.locator('[class="dcg-mq-denominator dcg-mq-empty"]').click()
     await page.getByLabel('8', { exact: true }).click()
    await expect(page.locator('.dcg-basic-expression-value> div > .dcg-mq-mathspeak').last()).toContainText('equals 10.6 2 5')
    
    // // 6:
    await page.locator('.dcg-tooltip-hit-area-container.dcg-do-not-blur').nth(2).click()
    await page.waitForTimeout(5000)
    let text=await page.locator('[class="dcg-mq-numerator"] > .dcg-mq-digit').nth(2).textContent()
    console.log(text)

    
    // await page.pause()
    // await page.waitForTimeout(50000)
})