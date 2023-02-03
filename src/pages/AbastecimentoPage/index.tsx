import {
  IonPage,
  useIonRouter,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonLabel,
  IonInput,
} from "@ionic/react";

import { useState } from "react";

import Voltar from "../../assets/icons/back.svg";

import Carro from "../../assets/icons/carro.png";
import Van from "../../assets/icons/van.png";
import Onibus from "../../assets/icons/onibus.png";
import Condutor from "../../assets/icons/condutor.png";

import Veiculos from "../../mock/veiculos.json";
import Postos from "../../mock/postos.json";

import { useIMask } from 'react-imask';

import "./styles.css";

const AbastecimentoPage = () => {
  const navigation = useIonRouter();

  const [veiculo, setVeiculo] = useState("");
  const [veiculoImage, setVeiculoImage] = useState("");
  const [posto, setPosto] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [data, setData] = useState("");
  const [hodometro, setHodometro] = useState("");
  const [litros, setLitros] = useState("");
  const [valor, setValor] = useState("");
  const [valor_combustivel, setValor_combustivel] = useState("");

  const handleVeiculo = (e: any) => {
    setVeiculo(JSON.stringify(e.detail.value));
    setVeiculoImage(JSON.stringify(e.detail.value.tipo));
    console.log(veiculoImage);
  };

  const handleVoltar = () => {
    navigation.push("/dashboard");
  };

  const handleValor = (e: any) => {
    setValor(e.target.value);
  };

  const handleLitros = (e: any) => {
    setLitros(e.target.value);
  };

  const handleHodometro = (e: any) => {
    setHodometro(e.target.value);
  };

  const handleValorCombustivel = (e: any) => {
    setValor_combustivel(e.target.value);
  };


  return (
    console.log(veiculo),
    (
      <IonPage className="background">
        <div className="abastecimento-header">
          <img src={Voltar} alt="" onClick={handleVoltar} />
          <p onClick={handleVoltar}>Voltar para a Tela Inicial</p>
        </div>

        <div className="abastecimento-content">
          {veiculoImage == "0" ? (
            <img className="tokenImage" src={Carro} alt="" />
          ) : veiculoImage == "1" ? (
            <img className="tokenImage" src={Van} alt="" />
          ) : veiculoImage == "2" ? (
            <img className="tokenImage" src={Onibus} alt="" />
          ) : (
            <img className="tokenImage" src={Condutor} alt="" />
          )}

          <IonList>
            <IonSelect
              className="selecionarButton"
              placeholder="Selecionar Veiculo"
              onIonChange={(ev) => handleVeiculo(ev)}
            >
              {Veiculos.map((veiculo) => {
                return (
                  <IonSelectOption key={veiculo.id} value={veiculo}>
                    {veiculo.codigo} - {veiculo.modelo}
                  </IonSelectOption>
                );
              })}
            </IonSelect>

            <IonModal keepContentsMounted={true}>
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
            <IonDatetimeButton
              disabled
              datetime="datetime"
              className="datetime"
            ></IonDatetimeButton>
          </IonList>

          <IonList className="inputs-form">
            <IonSelect
              className="selecionarButtonDonw"
              placeholder="Selecionar posto"
            >
              {Postos.map((posto) => {
                return (
                  <IonSelectOption key={posto.id} value={posto.id}>
                    {posto.nome}
                  </IonSelectOption>
                );
              })}
            </IonSelect>

            <IonSelect
              className="selecionarButtonDonw"
              placeholder="Selecionar Combustivel"
            >
              <IonSelectOption value="Gasolina">Gasolina</IonSelectOption>
              <IonSelectOption value="Alcool">Álcool</IonSelectOption>
              <IonSelectOption value="Disel">Disel</IonSelectOption>
            </IonSelect>

            <div className="input-div">
              <p className="titulo">Hodômetro</p>
              <div className="inline">
                <p className="unidade">KM</p>
                <input
                  className="input-value"
                  type="number"
                  placeholder="4.565"
                  value={hodometro}
                  onChange={(e) => {
                    handleHodometro(e);
                  }}
                />
              </div>
            </div>

            <div className="input-div">
              <p className="titulo">Valor do Litro</p>
              <div className="inline">
                <p className="unidade">R$</p>
                <input
                  className="input-value"
                  type="number"
                  placeholder="80,00"
                  value={valor_combustivel}
                  onChange={(e) => {
                    handleValorCombustivel(e);
                  }}
                />
              </div>
            </div>

            <div className="input-div">
              <p className="titulo">Valor</p>
              <div className="inline">
                <p className="unidade">R$</p>
                <input
                  className="input-value"
                  type="number"
                  placeholder="80,00"
                  value={valor} 
                />
              </div>
            </div>

          </IonList>
          <button className="submit-button">Cadastar</button>
        </div>
      </IonPage>
    )
  );
};

export default AbastecimentoPage;
