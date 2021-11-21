import {Cliente} from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Roberta", 10000, 12345678900);
diretor.cadastrarSenha('123');

const gerente = new Gerente("Cacau", 5000, 78945612300);
gerente.cadastrarSenha("456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor,'123')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '456');

const cliente = new Cliente("Pandora", 65432198799, '789');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '789')

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado)