// guarda DIA, MÊS e ANO atuais em variáveis
var dataAtual = new Date();
var diaAtual = dataAtual.getDate();
var mesAtual = dataAtual.getMonth() + 1;
var anoAtual = dataAtual.getFullYear();

// cria variáveis que irão receber IDADE e SEXO do usuário
var idade = undefined;
var sexo = undefined;

var botaoVerificar = document.getElementById('botao-verificar');
botaoVerificar.addEventListener('click', verificarIdade);

function verificarIdade() {
    // guarda a data inserida pelo usuário em variáveis de DIA, MÊS e ANO
    var objDataNasc = document.getElementById('data-nascimento');
    var dataNasc = new Date(objDataNasc.value);
    var diaNasc = dataNasc.getUTCDate();
    var mesNasc = dataNasc.getUTCMonth() + 1;
    var anoNasc = dataNasc.getUTCFullYear();

    var divIdade = document.getElementById('div-idade');
    var campoSexo = document.getElementsByName('campo-sexo');
    
    if (isNaN(dataNasc)) {
        alert('Você precisa inserir uma data de nascimento antes de prosseguir!');
        divIdade.innerHTML = '';
    } else if (dataNasc > dataAtual) {
        alert('Data de nascimento superior à data atual! Verifique o campo e tente novamente.');
        divIdade.innerHTML = '';
    } else {
        if (mesNasc > mesAtual) {
            idade = (anoAtual - 1) - anoNasc;
        } else {
            if (mesNasc < mesAtual) {
                idade = anoAtual - anoNasc;
            } else if (mesNasc == mesAtual && diaNasc <= diaAtual) {
                idade = anoAtual - anoNasc;
            } else {
                idade = (anoAtual - 1) - anoNasc;
            }
        }
        
        if (campoSexo[0].checked) { // índice 0 é o primeiro campo (masculino) de input do grupo 'campo-sexo'
            divIdade.innerHTML = `<p>Você é um homem de ${idade} ano(s)!</p>`;
        } else if (campoSexo[1].checked) { // índice 1 é o segundo campo (feminino) de input do grupo 'campo-sexo'
            divIdade.innerHTML = `<p>Você é uma mulher de ${idade} ano(s)!</p>`;
        } else {
            alert('Você precisa selecionar um sexo antes de prosseguir!')
        }
    }
}