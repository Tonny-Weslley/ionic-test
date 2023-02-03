import { deflate } from "zlib";

export default interface Posto {
    id: number;
    nome: string;
    cnpj: string;
}