import {useState, useEffect} from 'react';

import veiculos from '../../mock/veiculos.json';
import NoSync from '../../assets/icons/no-sync.svg';
import Sync from '../../assets/icons/sync.svg';
import Valid from '../../assets/icons/valid.svg';

import './styles.css';

const AbastecimentoCard = (abastecimento: any) => {
    
    const initialState = {
        id: 0,
        veiculo: 0,
        horario: '',
        km_rodado: 0,
        placa: '',
        valor: 0,
        status:0
    }

    const [abastecimentoModel, setAbastecimentoModel] = useState(initialState);
    const image = abastecimentoModel.status === 0 ? NoSync : abastecimentoModel.status === 1 ? Sync : Valid;
    const veiculo = veiculos.find((veiculo) => veiculo.id === abastecimentoModel.veiculo);

    useEffect(() => {
        setAbastecimentoModel(abastecimento.abastecimento);
    }, []);

    
    return(
        <div className="abastecimento-card">
            <div className="abastecimento-card-info">
                <p className="abastecimento-card-info-placa">Placa: {veiculo?.placa}</p>
                <p className="abastecimento-card-info-sub">{abastecimentoModel.horario}</p>
                <p className="abastecimento-card-info-sub">{abastecimentoModel.km_rodado} Km</p>
                <p className="abastecimento-card-info-valor">R$ {abastecimentoModel.valor.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })}</p>
            </div>
            <div className="abastecimento-card-status">
                <img src={image} alt="status" />
            </div>
        </div>
    );
}

export default AbastecimentoCard;