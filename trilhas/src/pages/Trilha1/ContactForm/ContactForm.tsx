import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada!");
    setNome("");
    setMensagem("");
  };

  return (
    <form className="contact-form" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
