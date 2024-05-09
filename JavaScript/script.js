'use strict';

const _setElementTextContentHelper = (valor, nodeID) => {
  document.getElementById(nodeID).textContent = valor;
};

const _setElementValueHelper = (valor, nodeID) => {
  document.getElementById(nodeID).value = valor;
};

const getNewUserData = () => {
  const novoNome = document.getElementById('nomeInput').value;
  const novaIdade = document.getElementById('idadeInput').value;
  const novaRua = document.getElementById('ruaInput').value;
  const novoBairro = document.getElementById('bairroInput').value;
  const novoEstado = document.getElementById('estadoInput').value;
  const novaBiografia = document.getElementById('biografiaInput').value;
  return {
    novoNome,
    novaIdade,
    novaRua,
    novoBairro,
    novoEstado,
    novaBiografia,
  };
};

const hideUpdateUserModal = () => {
  $('#staticBackdrop').modal('hide');
};

const clearFormModalInputs = () => {
  const formInputsElementsIds = [
    'nomeInput',
    'idadeInput',
    'ruaInput',
    'bairroInput',
    'estadoInput',
    'biografiaInput',
  ];
  formInputsElementsIds.forEach(elementId => {
    _setElementValueHelper('', elementId);
  });
};

const updateUserDataCard = newUserData => {
  const elementIdNewValueMapper = {
    nome: newUserData.novoNome,
    idade: newUserData.novaIdade,
    rua: newUserData.novaRua,
    bairro: newUserData.novoBairro,
    estado: newUserData.novoEstado,
    biografia: newUserData.novaBiografia,
  };
  const entries = Object.entries(elementIdNewValueMapper);

  entries.forEach(entry => {
    const elementId = entry.at(0);
    const newElementValue = entry.at(1);

    _setElementTextContentHelper(newElementValue, elementId);
  });
};
document
  .getElementById('updateForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const newUserData = getNewUserData();

    updateUserDataCard(newUserData);

    hideUpdateUserModal();

    clearFormModalInputs();
  });
document
  .getElementById('imageInput')
  .addEventListener('change', function (event) {
    const file = event.target.files[0];
    const displayImage = document.getElementById('displayImage');

    if (file) {
      displayImage.src = URL.createObjectURL(file);
      hideUpdateUserModal();
    }
  });
