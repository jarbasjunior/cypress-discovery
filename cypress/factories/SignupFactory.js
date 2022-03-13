const faker = require('faker');
const ganerateDocument = require('gerador-validador-cpf');

export default {
  deliveryMan: () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const data = {
      name: `${firstName} ${lastName}`,
      document: ganerateDocument.generate(false),
      email: `${firstName.toLowerCase()}_${lastName.toLowerCase()}@email.com`,
      whatasapp: '31999630989',
      address: {
        postalCode: '31920150',
        street: 'Rua Alexandrino de Oliveira Neto',
        number: '698',
        complement: 'Casa',
        neighborhood: 'Dom Joaquim',
        city_fu: 'Belo Horizonte/MG',
      },
      deliver_method: 'Moto',
      driver_license: 'cnh-digital.jpg',
    };
    return data;
  },

  deliveryWithoutFields: () => {
    const data = [
      { requiredField: 'Nome', fieldFront: 'fullName', message: 'É necessário informar o nome' },
      { requiredField: 'CPF', fieldFront: 'cpf', message: 'É necessário informar o CPF' },
      { requiredField: 'Email', fieldFront: 'email', message: 'É necessário informar o email' },
      { requiredField: 'CEP', fieldFront: 'postalcode', message: 'É necessário informar o CEP' },
      { requiredField: 'Número', fieldFront: 'address-number', message: 'É necessário informar o número do endereço' },
      { requiredField: 'Método de entrega', fieldFront: 'delivery-method', message: 'Selecione o método de entrega' },
      { requiredField: 'CNH', fieldFront: 'driver-license', message: 'Adicione uma foto da sua CNH' },
    ];
    return data;
  },
};
