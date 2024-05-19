import React from "react";
import './index.css'

function Header(props){
  return(
    <header>
      <div>
        <a 
          href="https://github.com/gabriersdev" 
          rel="noreferrer noopener" 
          data-toggle="tooltip" 
          data-placement="top" 
          data-bs-custom-class="custom-tooltip" 
          title="Eu no GitHub"
        >
          <img src="https://github.com/gabriersdev.png" alt="Foto de Mayk Brito na frente de um laptop" />
        </a>
      </div>
    </header>
  )
}

export {Header}