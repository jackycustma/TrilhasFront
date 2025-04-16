import React, { useState } from "react";
import axios from "axios";

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [error, setError] = useState("");

  const foundUser = async () => {
    setError("");
    setUser(null);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = response.data;
      setUser({ name: data.name, email: data.email });
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setError("Usuário não encontrado");
      } else {
        setError("Erro ao buscar usuário");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Buscar Usuário</h1>

      <input
        type="number"
        placeholder="Digite o ID do usuário"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        onClick={foundUser}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Buscar
      </button>

      {user && (
        <div className="p-4 border rounded bg-green-100">
          <p>
            <strong>Nome:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
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

export default BuscarUsuario;
