import {Cliente} from './Cliente.js';
import {ContaCorrente} from './Conta/ContaCorrente';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';


import { ContaSalario } from './Conta/ContaSalario.js';

const cliente1 = new Cliente('Roberta', 46928780886);

const contaCorrenteRoberta = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

