const express = require('express');
const app = express();
PORT = 8080;

app.get("/", async (req, res) =>{
    res.send("Pagina Inicial");
});

app.listen(PORT, () =>{
    console.log(`Servidor acessado na porta 8080: htp://localhost: ${PORT}`);
});