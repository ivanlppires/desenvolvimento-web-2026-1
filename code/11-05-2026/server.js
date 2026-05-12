import express from 'express';

const app = express();

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
    res.send('Listar todos os produtos');
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
