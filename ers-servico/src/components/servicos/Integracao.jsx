import * as React from "react";
import "./Servicos.css";

import Interacao from "../../assests/img/Interacao.jpeg";
import { Link } from "react-router-dom";

const Integracao = () => {
  return (
    <div class="container Comum">
      <h1 className="hService">Interação Logística</h1>
      <div>
        <div>
          <div class="lateral_one col-md-6 left1">
            <p className="pHService lead">
              {" "}
              A ERS Serviços oferece soluções integradas para atender a uma
              variedade de demanda dos clientes.Contamos com uma equipe
              especializada em lidar com questões logísticas, incluindo
              gerenciamento de estoque,controle de recebimento, transbordo de
              material, suporte ao plano de produção e movimentações de carga,
              etc
            </p>
            <p className="pHService">
              Serviços de suporte à logística incluem:
            </p>
            <ul>
              <li className="listFont">
                <i class="fa fa-check" aria-hidden="true"></i> Almoxarife
              </li>
              <li className="listFont">
                <i class="fa fa-check" aria-hidden="true"></i> Conferente
              </li>
              <li className="listFont">
                <i class="fa fa-check" aria-hidden="true"></i> Transbordo
              </li>
              <li className="listFont">
                <i class="fa fa-check" aria-hidden="true"></i> Auxiliar de logística
              </li>
              <li className="listFont">
                <i class="fa fa-check" aria-hidden="true"></i>  Supervisor de logística{" "}
              </li>
              <li className="listFont">
              <i class="fa fa-check" aria-hidden="true"></i> Líder de operações logística{" "}
              </li>
            </ul>
          </div>
          <div class="lateral_two col-md-6 ">
            <img class="imgService" src={Interacao} alt="Politica" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integracao;
