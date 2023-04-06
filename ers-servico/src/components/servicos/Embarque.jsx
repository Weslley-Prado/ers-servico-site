import * as React from 'react';
import './Servicos.css'

import Embarque1 from '../../assests/img/Logistica.jpeg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Embarque = () => {

    return(
        <div class="container Comum">
      
        <h1 className="hService"> Embarque Controlado</h1>
        <div >
        <div >
        <div class="lateral_one col-md-6 left1">
          <p className="pHService lead"> Tem como objetivo controlar e assegurar a
qualidade de peças, conjuntos e unidades
vendáveis além de verificar a efetividade das
ações propostas e realizadas.
          </p>
        <ul>
        
          <li className="listFont"><i class="fa fa-check" aria-hidden="true"></i> Nível I e nível II</li>
          <li className="listFont"><i class="fa fa-check" aria-hidden="true"></i> Contenção e solução de problemas </li>
          <li className="listFont"><i class="fa fa-check" aria-hidden="true"></i> Coleta e compilação de dados</li>
          
        </ul>
        </div>
        <div class="lateral_two col-md-6 ">
                  <img class="imgService" src={Embarque1} alt="Politica" />
                </div>
                </div>
                </div>
      </div>
      
        )
    
}

export default Embarque;