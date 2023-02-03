import { IonAlert, IonPage, IonToast, useIonRouter } from "@ionic/react";
import { useState } from "react";

import RealTurismo from "../../assets/images/real-turismo.svg";

import "./styles.css";

import User from "../../mock/user.json";

const Login: React.FC = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);
  const [erro, setErro] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const navigation = useIonRouter();

  const handlerMatricula = (e: any) => {
    setErro(false);
    setMatricula(e.target.value);
  };

  const handlerSenha = (e: any) => {
    setErro(false);
    setSenha(e.target.value);
  };

  const handlerLogin = () => {
    if (matricula === User.matricula && senha === User.senha) {
      setLogado(true);
      navigation.push("/dashboard");
    } else {
      setErro(true);
      setAttempt(attempt + 1);
    }
  };

  return (
    <IonPage className="background">
      <IonToast
        isOpen={logado}
        position="top"
        message="Usuário logado com sucesso!"
        duration={200}
      />

      <IonToast
        isOpen={erro}
        position="top"
        message="Usuário ou senha inválidos!"
        duration={300}
        onDidDismiss={() => setErro(false)}
      />

      <IonAlert
        isOpen={attempt === 3}
        header={"Multiplas Tentativas de Login"}
        message={"Verifique com um administrador as suas credenciais"}
        buttons={["OK"]}
        onDidDismiss={() => setAttempt(0)}
      />

      <div className="login-card">
        <img className="logo" src={RealTurismo} alt="Logo Real Turismo"/>
        <div className="login-fields">
          <input
            type="text"
            placeholder="Matricula"
            value={matricula}
            onChange={(e) => {
              handlerMatricula(e);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => {
              handlerSenha(e);
            }}
          />
          <button className="login-button" onClick={handlerLogin}>
            Entrar
          </button>
        </div>
      </div>
    </IonPage>
  );
};

export default Login;
