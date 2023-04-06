import Trabalho from "../../assests/img/Retrabalho.jpeg";

const Retrabalho = () => {
  return (
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
               <i class="fa fa-check" aria-hidden="true"></i> Oxidação
              </li>
              <li className="listFont">
               <i class="fa fa-check" aria-hidden="true"></i> Rebarba
              </li>
              <li className="listFont">
               <i class="fa fa-check" aria-hidden="true"></i> Lubrificação
              </li>
              <li className="listFont">
               <i class="fa fa-check" aria-hidden="true"></i> Retrabalhos diversos
              </li>
            </ul>
          </div>
          <div class="lateral_two col-md-6 ">
            <img class="imgService" src={Trabalho} alt="Politica" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Retrabalho;
