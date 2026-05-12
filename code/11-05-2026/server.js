import express from 'express';

const app = express();

app.get('/', (req, res)=>{ // rota raiz
    res.send('Olá Mundo');
} );

app.get('/cadastro', (req, res) =>{ // rota cadastro
    res.send('vou realizar um insert no banco de dados');
});

const port = 3000;
app.listen(port, () =>{
    console.log('Servidor rodando na porta ' + port);
})
