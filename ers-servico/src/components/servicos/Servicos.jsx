import * as React from "react";
import "./Servicos.css";
import Inspecao from "../../assests/img/Inspecao.jpeg";
import Interacao from "../../assests/img/Interacao.jpeg";
import Trabalho from "../../assests/img/Retrabalho.jpeg";
import Embarque1 from "../../assests/img/Logistica.jpeg";
import Terceriza from "../../assests/img/Tercerizacao.jpeg";
import Resident from "../../assests/img/Residente.jpeg";

import { Link } from "react-router-dom";

const Servicos = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = () => {
    setValue();
  };
  return (
    <div>
      <div class="container Comum">
        <h1 className="hService"> Inspeção e seleção</h1>
        <div>
          <div>
            <div class="lateral_one col-md-6 left1">
              <p className="pHService lead">
                {" "}
                Verificamos Verificamos se o produto atende as especificações
                estabelecidas de aceitação através da inspeção e realizamos
                seleção de peças tanto em estoque quanto em borda de linha para
                garantir o fluxo continuo das atividades.
              </p>
              <ul>
                <li className="listFont">
                  <i class="fa fa-check" aria-hidden="true"></i> Preparação da área de inspeção
                </li>
                <li className="listFont">
                  <i class="fa fa-check" aria-hidden="true"></i> Controle de medidas
                </li>
                <li className="listFont">
                  <i class="fa fa-check" aria-hidden="true"></i> Inspeção de recebimento
                </li>
                <li className="listFont">
                  <i class="fa fa-check" aria-hidden="true"></i> Inspeções visuais e dimensionais
                </li>
                <li className="listFont">
                  <i class="fa fa-check" aria-hidden="true"></i> 
                  Seleção 100% ou por amostragem de componentes, através de
                  instrumento de medição, gabarito, laboratorial e com
                  utilização de calibradores.
                </li>
              </ul>
            </div>
            <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Inspecao} alt="Politica" />
            </div>
          </div>
        </div>
      </div>
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
                  <i class="fas fa-check"></i>Almoxarife
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Conferente
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Transbordo
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Auxiliar de logística
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i> Supervisor de logística{" "}
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i> Líder de operações logística{" "}
                </li>
              </ul>
            </div>
            <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Interacao} alt="Politica" />
            </div>
          </div>
        </div>
      </div>
      <div class="container Comum">
        <h1 className="hService"> Retrabalho</h1>
        <div>
          <div>
            <div class="lateral_one col-md-6 left1">
              <p className="pHService lead">
                Tem como objetivo restaurar discrepância de peças ou conjunto
                montado sem que altere ou influencie no seu funcionamento,
                características e aplicação final.
              </p>
              <ul>
                <li className="listFont">
                  <i class="fas fa-check"></i>Oxidação
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Rebarba
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Lubrificação
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Retrabalhos diversos
                </li>
              </ul>
            </div>
            <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Trabalho} alt="Politica" />
            </div>
          </div>
        </div>
      </div>
      <div class="container Comum">
        <h1 className="hService"> Embarque Controlado</h1>
        <div>
          <div>
            <div class="lateral_one col-md-6 left1">
              <p className="pHService lead">
                {" "}
                Tem como objetivo controlar e assegurar a qualidade de peças,
                conjuntos e unidades vendáveis além de verificar a efetividade
                das ações propostas e realizadas.
              </p>
              <ul>
                <li className="listFont">
                  <i class="fas fa-check"></i>Controle de recebimento
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Movimentação de carga
                </li>
                <li className="listFont">
                  <i class="fas fa-check"></i>Operador de empilhadeira
                </li>
              </ul>
            </div>
            <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Embarque1} alt="Politica" />
            </div>
          </div>
        </div>
      </div>
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
      <div class="container Comum">
        <h1 className="hService">Residente Técnico</h1>
        <div>
          <div>
            <div class="lateral_one col-md-6 left1">
              <p className="pHService lead">
                Tem o papel de intermediar as negociações e tratativas entre
                cliente e fornecedor, além de garantir a continuidade da linha
                de produção do cliente.
              </p>
            </div>
            <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Resident} alt="Politica" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
