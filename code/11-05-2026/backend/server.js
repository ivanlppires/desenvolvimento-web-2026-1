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
    tipo: 'Notebook',
    status: 'disponível',
    descricao: 'Notebook para processamento elevado'
}
const p2 = {
    id: 2,
    nome: 'Chromebook 14',
    tipo: 'Notebook',
    status: 'disponível',
    descricao: 'Notebook leve e portátil'
}
const p3 = {
    id: 3,
    nome: 'Epson Power Lite W39',
    tipo: 'Projetor',
    status: 'emprestado',
    descricao: 'Projetor para apresentações'
}

produtos.push(p1, p2, p3);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});