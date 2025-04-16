import React, { useState } from "react";
import axios from "axios";

const CadastrarUsuario: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const cadastrarUsuario = async () => {
    setMessage("");
    setError("");

    if (!name || !email) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: name,
          email: email,
        }
      );

      if (response.status === 201) {
        setMessage("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
      }
    } catch (error) {
      setError("Erro ao cadastrar usuário." + error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Cadastrar Usuário</h1>

      <input
        type="text"
        placeholder="Nome do usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        placeholder="E-mail do usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        onClick={cadastrarUsuario}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Cadastrar
      </button>

      {message && (
        <div className="p-4 border rounded bg-green-100 text-green-700">
          {message}
        </div>
      )}

      {error && (
        <div className="p-4 border rounded bg-red-100 text-red-700">
          {error}
        </div>
      )}
    </div>
  );
};

export default CadastrarUsuario;
