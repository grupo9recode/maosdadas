<?php
    header("Access-Control-Allow-Origin:*");
    require_once '../connect/conexao.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM usuarios";
        
        $resultado = query($sql);
        $pedidos = [];

        while($linha = mysqli_fetch_assoc($resultado)){
            $pedidos[] = $linha;
        }

        echo json_encode($pedidos);
    }
?>