import * as React from "react";
import "./Servicos.css";

import Resident from "../../assests/img/Residente.jpeg";
import { Link } from "react-router-dom";

const Residente = () => {
  return (
    <div class="container Comum">
      <h1 className="hService">Residente Técnico</h1>
      <div>
        <div>
          <div class="lateral_one col-md-6 left1">
            <p className="pHService lead">
              Tem o papel de intermediar as negociações e tratativas entre
              cliente e fornecedor, além de garantir a continuidade da linha de
              produção do cliente.
            </p>
          </div>
          <div class="lateral_two col-md-6 ">
            <img class="imgService" src={Resident} alt="Politica" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residente;
