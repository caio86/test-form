import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  /**
    * @param e {Event}
    * */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.senha) {
      setMensagem("Todos os campos são obrigatórios!")
      return
    }

    if (!formData.email.includes("@")) {
      setMensagem("por favor, insira um e-mail válido")
      return
    }

    setMensagem("Login realizado com sucesso!")
  }

  const limpar = () => {
    setMensagem("")
    setFormData({ email: "", senha: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="text"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
      <button
        onClick={limpar}
      >
        Limpar
      </button>

      {mensagem.includes("Login") ? <p style={{ color: "green" }}>{mensagem}</p> : <p style={{ color: "red" }}>{mensagem}</p>}
    </>
  )
};

export default LoginForm;
