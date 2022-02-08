import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProviderContext from './ProviderContext';

const ProviderGlobal = ({ children }) => {
  // o ProviderGlobal gerencia tudo que vai ser passado para o createcontext onde ele para o children(input e table)
  /*
  <ProviderGlobal provedor>
    <ProviderContext conteudo_provido>
      <Input recebem />
      <Table recebem />
    <ProviderContext>
  <ProviderGlobal>
  */
  const [filtro, setFiltro] = useState({ filterByName: { name: '' } });
  const [filtroNumber, setFiltroNumber] = useState({
    column: 'population', comparison: 'maior que', value: '0' });
  const [api, setApi] = useState([]);
  const [columnsOption, setColumnsOption] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  // usei o repositorio do Bruno Miranda para saber como fazer a verificação de maior que ...
  // Source: https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/109/commits/ef2c76c68688e118fc465f177595bb5653cdbcf9

  const onClickButton = () => {
    const { column, comparison, value } = filtroNumber;
    const filtraNumber = api.filter((obj) => {
      switch (comparison) {
      case 'maior que':
        return (obj[column] > Number(value));
      case 'menor que':
        return (obj[column] < Number(value));
      case 'igual a':
        return (obj[column] === value);
      default:
        return (obj[column] === value);
      }
    });
    setApi(filtraNumber);
    setColumnsOption(columnsOption.filter((item) => item !== column));
  };

  const values = {
    filtro,
    api,
    setFiltro,
    setFiltroNumber,
    onClickButton,
    columnsOption,
  };

  const requestApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const data = await response.json();
    setApi(data.results);
  };

  useEffect(() => {
    requestApi();
  }, []);

  // usei o repositorio do Bruno Miranda para entender essa ṕarte
  // Source: https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/109/commits/05ac94ef4168477a08e5c3e22eefed0bbe72658e
  return (
    <ProviderContext.Provider value={ values }>
      {children}
    </ProviderContext.Provider>
  );
};

ProviderGlobal.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderGlobal;
