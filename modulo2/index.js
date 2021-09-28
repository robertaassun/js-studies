import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente('Roberta', 46928780886);

const contaCorrenteRoberta = new ContaCorrente(cliente1, 1001);
contaCorrenteRoberta.depositar(500);
contaCorrenteRoberta.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

contaPoupanca.sacar(10);

console.log(contaPoupanca);