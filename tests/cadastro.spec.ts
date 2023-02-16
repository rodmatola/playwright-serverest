import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://front.serverest.dev/cadastrarusuarios');
  await page.getByTestId('nome').fill('rodrigo matola');
  await page.getByTestId('email').fill('rmatola@1secmail.com');
  await page.getByTestId('password').fill('maotla123');
  await page.getByTestId('cadastrar').click();
  const secessoCadastro = await page.getByText('×Cadastro realizado com sucesso');
  await expect(secessoCadastro).toBeVisible();
});