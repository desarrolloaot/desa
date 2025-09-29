<?php
require_once "../config/db.php";

try {
    $clienteId = 123;
    $facturas = callSP($pdo, "Prg_S_Permisos_Apl_Usuarios", ["clienteId" => $clienteId]);
    
    echo json_encode($facturas);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
