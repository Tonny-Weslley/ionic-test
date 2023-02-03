import { IonPage } from "@ionic/react";

import Voltar from "../../assets/icons/back.svg";

import "./styles.css";

const AbastecimentoPage = () => {
  return (
    <IonPage className="background">
      <div className="abastecimento-header">

          <img src={Voltar} alt="" />
          <p>Voltar para a Tela Inicial</p>
      </div>
    </IonPage>
  );
};

export default AbastecimentoPage;
