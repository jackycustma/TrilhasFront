import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/100"
        alt="Foto de Perfil"
        className="image"
      />
      <h2 className={"name"}>Nome do Usuário</h2>
      <p className={"description"}>Descrição do usuário</p>
    </div>
  );
}
