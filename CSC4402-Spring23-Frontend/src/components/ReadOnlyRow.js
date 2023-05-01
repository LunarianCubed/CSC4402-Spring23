import React from "react";
import "./LoadTableShip.css";

const ReadOnlyRow = ({ val, handleEditClick }) => {
  return (
    <tr>
      <td>{val.Email}</td>
      <td>{val.DateAvailable}</td>
      <td>{val.CoNumber}</td>
      <td>{val.EquipmentType}</td>
      <td>{val.OriginCity}</td>
      <td>{val.OriginState}</td>
      <td>{val.DestinationCity}</td>
      <td>{val.DestinationState}</td>
      <td>{val.Miles}</td>
      <td>{val.TruckCost}</td>
      <td>{val.Type}</td>
      <td>
        <button
          type="button"
          onClick={(event) => {
            handleEditClick(event, val);
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
