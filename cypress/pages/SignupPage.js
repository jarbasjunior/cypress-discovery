class SignupPage {
  static go() {
    cy.visit('/');
    cy.get('a[href="/deliver"]').click();
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
  }

  static fillForm(deliverMan) {
    cy.get('input[name="fullName"]').type(deliverMan.name);
    cy.get('input[name="cpf"]').type(deliverMan.document);
    cy.get('input[name="email"]').type(deliverMan.email);
    cy.get('input[name="whatsapp"]').type(deliverMan.whatasapp);

    cy.get('input[name="postalcode"]').type(deliverMan.address.postalCode);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address"]').should('have.value', deliverMan.address.street);
    cy.get('input[name="district"]').should('have.value', deliverMan.address.neighborhood);
    cy.get('input[name="city-uf"]').should('have.value', deliverMan.address.city_fu);
    cy.get('input[name="address-number"]').type(deliverMan.address.number);
    cy.get('input[name="address-details"]').type(deliverMan.address.complement);

    cy.contains('.delivery-method li', deliverMan.deliver_method).click();
    cy.get('input[accept^="image"]').attachFile(`/images/${deliverMan.driver_license}`);
  }

  static submitForm() {
    cy.get('form button[type="submit"]').click();
  }

  static validationSuccessMessage(expectedMessage) {
    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage);
  }

  static validationAlertError(field, expectedMessage) {
    if (field === 'delivery-method') cy.get('.delivery-method').siblings('.alert-error').should('have.text', expectedMessage);
    else if (field === 'driver-license') cy.get('.dropzone').siblings('.alert-error').should('have.text', expectedMessage);
    else cy.get(`input[name="${field}"]`).siblings('.alert-error').should('have.text', expectedMessage);
  }
}

export default SignupPage;
