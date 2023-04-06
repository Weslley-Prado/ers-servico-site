import * as React from "react";
import "./Servicos.css";

import Terceriza from "../../assests/img/Tercerizacao.jpeg";

const Terceirizacao = () => {
  return (
    <div class="container Comum">
      <h1 className="hService">Terceirização de Mão de Obra</h1>
      <div>
        <div>
          <div class="lateral_one col-md-6 left1">
            <p className="pHService lead">
              {" "}
              Com objetivo de proporcionar maior disponibilidade de recursos
              para a atividade principal da contratante.
            </p>
          </div>
          <div class="lateral_two col-md-6 ">
            <img class="imgService" src={Terceriza} alt="Politica" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terceirizacao;
