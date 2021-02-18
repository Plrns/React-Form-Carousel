import React, { useState } from "react";

import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

const initialState = {
  nome: "",
  sobrenome: "",
  email: "",
  celular: "",
  genero: "",
};

const Cadastro: React.FC = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { register, handleSubmit, errors } = useForm();

  const handleInputChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (data: any) => {
    console.log("*** handleSubmit ", data);
    console.log("*** formValues", formValues);
  };


  return (
    <>
      <Header />
      <div className="container-cadastro">
        <div className="titles">
          <h1>Cadastro</h1>
          <p>Adicione suas informações</p>
        </div>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={handleInputChange}
              value={formValues.nome}
              ref={register({ required: "Insira um nome" })}
            />

            <input
              type="text"
              placeholder="Sobrenome"
              name="sobrenome"
              onChange={handleInputChange}
              value={formValues.sobrenome}
              ref={register({ required: "Insira um sobrenome" })}
            />
          </div>

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formValues.email}
            ref={register({
              required: "Insira um email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Insira um email válido",
              },
            })}
          />

          <input
            type="text"
            name="celular"
            placeholder="Celular"
            onChange={handleInputChange}
            value={formValues.celular}
            ref={register({
              required: "Insira um número",
              pattern: {
                value: /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[-\s]?)[9]?[1-9]{4}[-\s]?[0-9]{4}$/,
                message: "Insira um número de celular válido",
              },
            })}
          />

          <select
            name="genero"
            onChange={handleInputChange}
            value={formValues.genero}
          >
            <option value="">Selecione</option>
            <option value="fem">Feminino</option>
            <option value="masc">Masculino</option>
          </select>

          {errors.nome && (
            <p className="error alignment">{errors.nome.message}</p>
          )}
          {errors.sobrenome && (
            <p className="error alignment">{errors.sobrenome.message}</p>
          )}
          {errors.email && (
            <p className="error alignment">{errors.email.message}</p>
          )}
          {errors.celular && (
            <p className="error alignment space-error">
              {errors.celular.message}
            </p>
          )}

          <div className="alignment">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Cadastro;
