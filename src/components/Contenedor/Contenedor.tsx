import React, {  ReactNode,  } from 'react';

interface ContenedorProps{
  children: ReactNode,
  bg?: string,
  bi?: string,
  image?: string,
  bgFilter?: boolean,

}


export const ContenedorPage: React.FC<ContenedorProps> = ({ children, bg, bi, bgFilter}) => {
  return (
    <div className={`contenedor vw-100  ${bg} `} style={{ 
     
      backgroundImage: `url(${bi})` }}>
        {bgFilter === true &&   <div className="colorBackground"></div>}
        <div className="contenedorSecondary">
        { children }
        </div>
            

    </div>
  )
}
