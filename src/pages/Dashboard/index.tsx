import { IonPage, useIonRouter } from "@ionic/react";
import { useState, useEffect } from "react";

import Sair from "../../assets/icons/back.svg";

import User from "../../mock/user.json"

import AbastecimentoCard from "../../components/AbastecimentoCard";

import Abastecimentos from "../../mock/abastecimentos.json";

import "./styles.css";

const Dashboard = () => {

    const navigation = useIonRouter();

    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(User.nome.split(' ')[0] + ' ' + User.nome.split(' ')[1]);
    }, []);

    const handleAbastecer = () => {
        navigation.push('/abastecer');
    }


  return (
    <IonPage className="background">
        <header className="cabecalho">
            <div className="sair-div">
                <img className="sair-btn" src={Sair} alt="Voltar" />
            </div>
            <div className=".user-info-div">
                <p className="user-info-div-wellcome">Bem vindo</p>
                <h1 className="user-info-div-name">{username}</h1>
            </div>
            <a className="abastecer-btn" onClick={ handleAbastecer} >Abastecer</a>
        </header>

        <main className="main">
            <h1 className="main-title">Últimos Abastecimentos</h1>
            <div className="main-content">
                {Abastecimentos.map((abastecimento) => {
                    return <AbastecimentoCard key={abastecimento.id} abastecimento={abastecimento} />
                })}
            </div>
        </main>

    </IonPage>
  );
};

export default Dashboard;
