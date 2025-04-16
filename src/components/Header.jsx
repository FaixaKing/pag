import React from "react";
import './Header.css';
import mercadolivre from '../assets/mcd.png';
import appstore from '../assets/iph.png';
import playstore from '../assets/playstore.png';



function Header(){
    return(
        <div>
        <div className="cartao">
        <img src={mercadolivre} alt="mercado livre" className="logo" />
          <h1>Mercado Livre</h1>
          <p className="descricao">Seu marketplace confiável. </p>
          <p>📦 Produtos com Qualidade.</p>
          <p>🚀 Envio Rápido e Garantido.</p>
          <p>🔒 Compra Segura via Mercado Pago</p>
          <p>⭐ Atendimento nota 5 estrelas</p>

        </div>
      
        <img src={appstore} alt="app store" className="appstore" />
        <img src={playstore} alt="google play" className="play" />
      </div>

    );
};
export default Header;