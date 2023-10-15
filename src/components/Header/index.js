import React from "react";
import './index.css'

function Header(){
  return(
    <header>
      <div>
        <a 
          href="https://github.com/gabrieszin" 
          rel="noreferrer noopener" 
          data-toggle="tooltip" 
          data-placement="top" 
          data-bs-custom-class="custom-tooltip" 
          title="Eu no GitHub"
        >
          <img src="https://github.com/gabrieszin.png" alt="Foto de Mayk Brito na frente de um laptop" />
        </a>
      </div>
    </header>
  )
}

export {Header}