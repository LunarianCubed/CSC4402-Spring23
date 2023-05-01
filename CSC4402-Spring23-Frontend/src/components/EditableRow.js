import React from "react";
import "./Editable.css";
import { useState } from "react";
import axios from "axios";

const EditableRow = ({ editFormData }) => {
  const [email, setEmail] = useState(editFormData.email);
  const [date, setDate] = useState(editFormData.date);
  const [columnNumber, setColumnNumber] = useState(editFormData.columnNumber);
  const [equimentType, setEquimentType] = useState(editFormData.equimentType);
  const [originCity, setOriginCity] = useState(editFormData.originCity);
  const [originState, setOriginState] = useState(editFormData.originState);
  const [destinationCity, setDestinationCity] = useState(
    editFormData.destinationCity
  );
  const [destinationState, setDestinationState] = useState(
    editFormData.destinationState
  );
  const [miles, setMiles] = useState(editFormData.miles);
  const [truckCost, setTruckCost] = useState(editFormData.truckCost);
  const [type, setType] = useState(editFormData.type);

  const editJob = (val) => {
    axios.put(`http://localhost:3001/api/update/${val}`, {
      email: email,
      date: date,
      columnNumber: columnNumber,
      equimentType: equimentType,
      originCity: originCity,
      originState: originState,
      destinationCity: destinationCity,
      destinationState: destinationState,
      miles: miles,
      truckCost: truckCost,
      type: type,
    });
  };
  const deleteRow = (val, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/api/delete/${val}`);
  };

  return (
    <tr>
      <td>
        <input
          className="editable"
          type="text"
          name="email"
          required="requried"
          placeholder="Input Email"
          defaultValue={editFormData.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="date"
          name="date"
          required="requried"
          placeholder="Date"
          defaultValue={new Date(editFormData.date).toLocaleDateString("en-CA")}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="number"
          name="columnNumber"
          required="requried"
          placeholder="Column Number"
          defaultValue={editFormData.columnNumber}
          onChange={(e) => {
            setColumnNumber(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="equimentType"
          required="requried"
          placeholder="Equiment Type"
          defaultValue={editFormData.equimentType}
          onChange={(e) => {
            setEquimentType(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="originCity"
          required="requried"
          placeholder="Origin City"
          defaultValue={editFormData.originCity}
          onChange={(e) => {
            setOriginCity(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="originState"
          required="requried"
          placeholder="Origin State"
          defaultValue={editFormData.originState}
          onChange={(e) => {
            setOriginState(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="destinationCity"
          required="requried"
          placeholder="Destination City"
          defaultValue={editFormData.destinationCity}
          onChange={(e) => {
            setDestinationCity(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="destinationState"
          required="requried"
          placeholder="Destination State"
          defaultValue={editFormData.destinationState}
          onChange={(e) => {
            setDestinationState(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="Number"
          name="miles"
          required="requried"
          placeholder="Miles"
          defaultValue={editFormData.miles}
          onChange={(e) => {
            setMiles(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="number"
          name="truckCost"
          required="requried"
          placeholder="Truck Cost"
          defaultValue={editFormData.truckCost}
          onChange={(e) => {
            setTruckCost(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editable"
          type="text"
          name="type"
          required="requried"
          placeholder="Type Ex.Broker"
          defaultValue={editFormData.type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <button
          onClick={() => {
            editJob(editFormData.UniqueJobId);
          }}
        >
          save
        </button>
        <button
          type="button"
          onClick={(e) => deleteRow(editFormData.UniqueJobId, e)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
