const VendaStatus = {
  INICIADA: "iniciada",
  CONCLUIDA: "concluida",
  CANCELADA: "cancelada",
} as const;

/* É modificável, e deve ser evitado, porque só a referência da var é constante */
/* Por isso é importante acrescentar "as const" ao final da declaração */
// VendaStatus.INICIADA = "qualquer coisa";
console.log(VendaStatus.INICIADA);
