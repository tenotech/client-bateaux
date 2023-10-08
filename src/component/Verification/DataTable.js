import React from "react";

const DataTable = (props) => (
  <div className="table-container">
  <table className="styled-table">
    <thead className="thead">
      <tr>
        <th></th>
        <th className="table-name th-title">Nom du bateau</th>
        <th className="th-title">Nombre maximum</th>
        <th className="th-title">Places réservées</th>
      </tr>
    </thead>
    <tbody>
      {props.data.length > 0 ? (
        props.data.map((bateau) => (
          <tr key={bateau.id} className="table-row">
            <td className={`status ${bateau.max === bateau.reserved ? 'green-row' : 'red-row'}`}></td>
            <td className="table-name">{bateau.name}</td>
            <td>{bateau.max}</td>
            <td className="reserved-td">{bateau.reserved}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Data....</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
);

export default DataTable;
