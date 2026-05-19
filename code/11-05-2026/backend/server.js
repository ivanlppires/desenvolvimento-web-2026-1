import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

/* AQUI VAI MEU CRUD DE PRODUTOS */
const produtos = [];

/* Adicionano objetos no vetor produtos */
const p1 = {
    id: 1,
    nome: 'Alienware',
    tipo: 'notebook',
    status: 'disponivel',
    descricao: 'Notebook para processamento elevado'
}
const p2 = {
    id: 2,
    nome: 'Chromebook 14',
    tipo: 'notebook',
    status: 'manutencao',
    descricao: 'Notebook leve e portátil'
}
const p3 = {
    id: 3,
    nome: 'Epson Power Lite W39',
    tipo: 'projetor',
    status: 'emprestado',
    descricao: 'Projetor para apresentações'
}

produtos.push(p1, p2, p3);

/* Endpoint para listar todos os produtos */
app.get('/produtos', (req, res) => {
    // verificar os parâmetros de consulta para filtrar
    const { status, tipo, busca} = req.query;
    let resultado = produtos;

    // filtrar por status
    if(status) resultado = resultado.filter(p => p.status === status);
    // filtrar por tipo
    if(tipo) resultado = resultado.filter(p => p.tipo === tipo);  
    // filtrar por busca no nome ou descrição
    if(busca) resultado = resultado.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))

    res.json(resultado);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});