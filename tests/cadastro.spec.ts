import { test, expect } from '@playwright/test';
import { mock } from './mock'

test('test', async ({ page }) => {
  await page.goto('https://front.serverest.dev/cadastrarusuarios');
  await page.getByTestId('nome').fill('rodrigo matola');
  await page.getByTestId('email').fill('rmatola@1secmail.com');
  await page.getByTestId('password').fill('maotla123');
  await page.getByTestId('cadastrar').click();
  const secessoCadastro = await page.getByText('×Cadastro realizado com sucesso');
  await expect(secessoCadastro).toBeVisible();
});

test.only('mock', async ({ page }) => {
  await page.route('**/usuarios', async route => {
    await route.fulfill({ 
      status: 400,
      path: './tests/mock.json'
    });
  });
  await page.goto('https://front.serverest.dev/cadastrarusuarios');
  await page.getByTestId('nome').fill('rodrigo matola');
  await page.getByTestId('email').fill('rmatola6@1secmail.com');
  await page.getByTestId('password').fill('matola123');
  await page.pause();
  await page.getByTestId('cadastrar').click();
  const sucessoCadastro = await page.getByText('×Usuário cadastrado');
  await expect(sucessoCadastro).toBeVisible();
});
