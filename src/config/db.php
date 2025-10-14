<?php
$host = "localhost";
$dbname = "nombre_base_datos";
$user = "tu_usuario";
$pass = "tu_contraseña";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

/**
 * Llama a un stored procedure con parámetros y devuelve resultados.
 *
 * @param string $procedure Nombre del stored procedure
 * @param array $params Parámetros en formato ['param1' => valor1, 'param2' => valor2]
 * @return array Resultados del SP
 */
function callSP(PDO $pdo, string $procedure, array $params = []): array {
    // Crear la lista de placeholders para los parámetros
    $placeholders = implode(", ", array_map(fn($k) => ":$k", array_keys($params)));
    
    $stmt = $pdo->prepare("CALL $procedure($placeholders)");
    
    // Asignar los valores
    foreach ($params as $key => $value) {
        $stmt->bindValue(":$key", $value);
    }
    
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $stmt->closeCursor(); // importante para liberar recursos de SP
    
    return $result;
}
?>
