import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor ("Tatiana", 10000, 12345678910);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente ("Thais", 5000, 12345678911);
gerente.cadastrarSenha("123456");
const cliente = new Cliente ("Pedro", 12345678912, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
console.log(clienteEstaLogado, gerenteEstaLogado, diretorEstaLogado);


