import React, { useContext, useState } from 'react';
import ProviderContext from '../contexts/ProviderContext';

export default function InputNumber() {
  const { onClickButton, setFiltroNumber } = useContext(ProviderContext);
  const [inputValue, setinputValue] = useState(0);

  const handleChangeInputNumber = ({ target: { value, name } }) => {
    setinputValue(value);
    setFiltroNumber((previousD) => ({ ...previousD, [name]: value }));
  };

  const handleChangeNumber = ({ target: { value, name } }) => {
    setFiltroNumber((previousD) => ({ ...previousD, [name]: value }));
  };

  return (
    <>
      <select data-testid="column-filter" name="column" onChange={ handleChangeNumber }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChangeNumber }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ inputValue }
        onChange={ handleChangeInputNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickButton }
      >
        Filtrar
      </button>
    </>
  );
}
