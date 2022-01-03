import React, { useContext } from 'react';
import ProviderContext from '../contexts/ProviderContext';

export default function Input() {
  const { setFiltro } = useContext(ProviderContext);

  const handleChange = ({ target }) => {
    setFiltro({ filterByName: { name: target.value } });
  };

  return (
    <input
      placeholder="Filtro"
      type="text"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}
