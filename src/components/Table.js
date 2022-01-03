import React, { useContext } from 'react';
import ProviderContext from '../contexts/ProviderContext';

export default function Table() {
  // aqui ele desistrutura por isso na hora de passar tem que passar um objeto ou array
  const { api, filtro } = useContext(ProviderContext);
  const { filterByName: { name } } = filtro;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {

          api.filter((obj) => obj.name.includes(name))
            .map((objf) => (
              <tr key={ objf.name }>
                <td>{objf.name}</td>
                <td>{objf.rotation_period}</td>
                <td>{objf.orbital_period}</td>
                <td>{objf.diameter}</td>
                <td>{objf.climate}</td>
                <td>{objf.gravity}</td>
                <td>{objf.terrain}</td>
                <td>{objf.surface_water}</td>
                <td>{objf.population}</td>
                <td>{objf.films}</td>
                <td>{objf.created}</td>
                <td>{objf.edited}</td>
                <td>{objf.url}</td>
              </tr>
            ))

        }
      </tbody>
    </table>
  );
}
