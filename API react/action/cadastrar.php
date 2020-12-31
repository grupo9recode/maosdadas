<?php
    header("Access-Control-Allow-Origin:*");
    require_once '../connect/conexao.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome       = $_POST['nome'];
        $sobrenome  = $_POST['sobrenome'];
        $email      = $_POST['email'];
        $senha      = $_POST['senha'];

        $sql = "INSERT INTO usuarios VALUES (null, '$nome', '$sobrenome', '$email', '$senha')";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else {
        echo "Falha!";
    }
?>