import "./Orcamento.css";
import React, { Component } from "react";
import axios from "axios";
import Orcamento from "../../assests/img/orcamento.jpg";
const API_PATH = "https://ersservicos.com.br/php/index.php";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      estado: "",
      cidade: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };
  render() {
    return (
      <div>
        <img className="img-orcamento" src={Orcamento} alt="orcamento" />
        <div className="Form2">
          <h2> Solicite seu orçamento</h2>
          <div>
            <form action="/action_page.php">
              <div className="inputName">
                <label>Nome: </label>
                <input
                  className="inputName"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Nome..."
                  value={this.state.fname}
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
              </div>
              <div className="inputEmail">
                <label>Email: </label>
                <input
                  className="inputEmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="inputFone">
                <label>Celular: </label>
                <input
                  type="text"
                  id="phone1"
                  name="phone"
                  placeholder="Celular"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <label className="Whats">What's App?</label>
                <select id="wat" name="wat" placeholder="wat">
                 <option value="Opção">Selecione a opção</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                </select>
                <label className="Phone">Telefone Corporativo: </label>
                <input
                  className="phoneInput"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <div>
                <label className="labelCompany">Empresa: </label>
                <input
                  className="comp"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Empresa..."
                  value={this.state.fname}
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
                <label>Site: </label>
                <input
                  type="text"
                  id="site"
                  name="phone"
                  placeholder="Site"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />

                <label>CNPJ: </label>
                <input
                  type="text"
                  id="cnpj"
                  name="phone"
                  placeholder="CNPJ"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                </div>
<div>
                <label className="labelCompany">Endereço: </label>
                <input
                  className="comp"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Endereço..."
                  value={this.state.fname}
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
                <label>CEP: </label>
                <input
                  type="text"
                  id="cep"
                  name="phone"
                  placeholder="CEP"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <label>Cidade: </label>
                <input
                  type="text"
                  id="city"
                  name="phone"
                  placeholder="Cidade"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <select id="estado" name="estado" placeholder="Estados">
                  <option value="AC">Selecione o Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
                </div>
                <h3>Serviço a ser realizado</h3>
                <label>Selecione o Serviço:</label>
                <select name="service" id="service">
                  <option value="Service">Selecione o serviço</option>
                  <option value="Service">Inspeção e seleção</option>
                  <option value="Service">Interação e Logística</option>
                  <option value="Service">Embarque controlado NV I e II</option>
                  <option value="Service">Tercerização de mão de obra</option>
                  <option value="Service">Residente técnico</option>
                  <option value="Service">Selecione o serviço</option>
                </select>
                <div className="quantities">
                  <label>Quantia de funcionários: </label>
                  <input type="text" />
                </div>
                <div>
                <label className="labelCompany">Endereço: </label>
                <input
                  className="comp"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Endereço..."
                  value={this.state.fname}
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
                <label>Site: </label>
                <input
                  type="text"
                  id="cep"
                  name="phone"
                  placeholder="CEP"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <label>Cidade: </label>
                <input
                  type="text"
                  id="city"
                  name="phone"
                  placeholder="Cidade"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <select id="estado" name="estado" placeholder="Estados">
                  <option value="AC">Selecione o Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
                </div>
              </div>
                        <div class="send">
                        <input className="send" type="submit" onClick={e => this.handleFormSubmit(e)} value="Enviar" />
                        </div>
                        <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
                        </div> 
            </form>
          </div>
        </div>
      </div>
    );
  }
}
