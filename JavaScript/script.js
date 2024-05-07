'use scrict';
// Função para atualizar as informações do usuário
document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nomeInput').value;
    const idade = document.getElementById('idadeInput').value;
    const rua = document.getElementById('ruaInput').value;
    const bairro= document.getElementById('bairroInput').value;
    const estado = document.getElementById('estadoInput').value;
    const biografia = document.getElementById('biografiaInput').value;

    document.getElementById('nome').textContent = nome;
    document.getElementById('idade').textContent = idade;
    document.getElementById('rua').textContent = rua;
    document.getElementById('bairro').textContent = bairro;
    document.getElementById('estado').textContent = estado;
    document.getElementById('biografia').textContent = biografia;

    $('#staticBackdrop').modal('hide');

    document.getElementById('nomeInput').value = '';
    document.getElementById('idadeInput').value = '';
    document.getElementById('ruaInput').value = '';
    document.getElementById('bairroInput').value = '';
    document.getElementById('estadoInput').value = '';
    document.getElementById('biografiaInput').value = '';
  });

