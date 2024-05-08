'use scrict';
const hideUpdateUserModal = () => {
  $('#staticBackdrop').modal('hide');
};
const _setElementTextContentHelper = (valor , nodeID) =>{
  document.getElementById(nodeID).textContent = valor;
}

const _setElementValueHelper = (valor , nodeID) =>{
  document.getElementById(nodeID).value = valor;
} 

const getNewUserData = () =>{
  const nome = document.getElementById('nomeInput').value;
  const idade = document.getElementById('idadeInput').value;
  const rua = document.getElementById('ruaInput').value;
  const bairro = document.getElementById('bairroInput').value;
  const estado = document.getElementById('estadoInput').value;
  const biografia = document.getElementById('biografiaInput').value;
}

document
  .getElementById('updateForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

   

    document.getElementById('nome').textContent = nome;
    document.getElementById('idade').textContent = idade;
    document.getElementById('rua').textContent = rua;
    document.getElementById('bairro').textContent = bairro;
    document.getElementById('estado').textContent = estado;
    document.getElementById('biografia').textContent = biografia;

    hideUserFormModal();

    document.getElementById('nomeInput').value = '';
    document.getElementById('idadeInput').value = '';
    document.getElementById('ruaInput').value = '';
    document.getElementById('bairroInput').value = '';
    document.getElementById('estadoInput').value = '';
    document.getElementById('biografiaInput').value = '';
  });
