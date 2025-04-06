/* Configura um tipo de enum que pode ser utilizado como qualquer outra variável */
type StatusVenda = "iniciada" | "concluida" | "cancelada";

let x: StatusVenda = "concluida";
// x = "qualquer coisa";
