import React from 'react';
export const BotonRedes = ({link, imagenSrc}) => {
    return (
      <a href={link}>
        <img className="me-3" height={30} width={30} src={imagenSrc} alt= "link" />
      </a>
    );
  };
  

