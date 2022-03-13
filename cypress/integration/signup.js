import SignupPage from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory';

describe('Formulário de cadastro de entregador deve:', () => {
  it('Realizar cadastro de entregador com sucesso', () => {
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    SignupPage.go();
    SignupPage.fillForm(signupFactory.deliveryMan());
    SignupPage.submitForm();
    SignupPage.validationSuccessMessage(expectedMessage);
  });

  it('Proibir cadastro de entregador com CPF inválido', () => {
    const deliveryMan = signupFactory.deliveryMan();
    deliveryMan.document = '123456789AA';

    SignupPage.go();
    SignupPage.fillForm(deliveryMan);
    SignupPage.submitForm();
    SignupPage.validationAlertError('cpf', 'Oops! CPF inválido');
  });

  it('Proibir cadastro de entregador com email inválido', () => {
    const deliveryMan = signupFactory.deliveryMan();
    deliveryMan.email = 'nair_raimunda.com.br';

    SignupPage.go();
    SignupPage.fillForm(deliveryMan);
    SignupPage.submitForm();
    SignupPage.validationAlertError('email', 'Oops! Email com formato inválido.');
  });

  context('Proibir cadastro com os seguintes campos obrigatórios ausentes:', () => {
    const data = signupFactory.deliveryWithoutFields();

    before(() => {
      SignupPage.go();
      SignupPage.submitForm();
    });

    data.forEach((d) => {
      it(`${d.requiredField}`, () => SignupPage.validationAlertError(d.fieldFront, d.message));
    });
  });
});
