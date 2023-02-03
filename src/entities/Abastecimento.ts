export default interface Abastecimento {
    id: number;
    posto: number;
    motorista: number;
    veiculo: number;
    horario: string;
    valor_combustivel: number;
    hodometro: number;
    km_rodado: number;
    tipo_combustivel: string;
    litros: number;
    valor: number;
    status: number;
}

/*
status:
0 - Abastecimento não sincronizado
1 - Abastecimento sincronizado
2 - Abastecimento avaliado
*/