import React from 'react';

function Registrar(){
    const enviarDados = async (evento) => {
    
        const url = "http://localhost/API%20react/action/cadastrar.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
        window.location.href = '/Login';
    }

    return(
        <div className="container mt-4 contato">
            <h3 className="text-center display-4">Envie sua mensagem!!</h3>
            <form onSubmit={enviarDados}> 
                <div className="form-group">
                    <label for="text">Nome</label>
                    <input type="text" className="form-control" name="nome" id="nome"></input>
                </div>
                <div className="form-group">
                    <label for="text">Sobrenome</label>
                    <input type="text" class="form-control" name="sobrenome" id="sobrenome"></input>
                </div>
                <div className="form-group">
                    <label for="text">Email</label>
                    <input type="email" class="form-control" name="email" id="email"></input>
                </div>
                <div className="form-group">
                    <label for="text">Senha</label>
                    <input type="password" class="form-control" name="senha" id="senha"></input>
                </div>
                <button className="btn btn-primary mt-3" type="submit">Registrar</button>
            </form>
        </div>        
    );
}

export default Registrar;