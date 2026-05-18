import express from 'express';
import cors from 'cors'; // CORS: política de acesso ao backend
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // para interpretar JSON no corpo das requisições

app.get('/', (req, res)=>{ // rota raiz
    res.send('Olá Mundo');
} );

// CRUD de produtos     
// Create
app.post('/produtos', (req, res) => {
    res.send('Criar um novo produto');
});
// Read All
app.get('/produtos', (req, res) => {
    const produtos = [ 'SSD NVME 16TB', 'NVIDIA H200', 'Teclado Brown Key Switch']; // VETOR SIMULADO BD
    res.json(produtos);
});
// Read One - ":id" é um parâmetro de rota
app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    res.send('Detalhes do produto com ID: ' + id);
});
// Update
app.put('/produto/:id', (req, res) => {
    const id = req.params.id;
    res.send('Atualizar o produto com ID: ' + id);
});
// Delete
app.delete('/produto/:id', (req, res) => {
    const id = req.params.id;
    res.send('Excluir o produto com ID: ' + id);
});

const port = 3000;
app.listen(port, () =>{
    console.log('Servidor rodando na porta ' + port);
})
