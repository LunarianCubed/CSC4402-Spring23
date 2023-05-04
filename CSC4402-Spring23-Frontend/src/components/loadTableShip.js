import React, { useState, useEffect, useReducer } from "react";
import "./LoadTableShip.css";
import Axios from "axios";
import axios from "axios";

const StateSelect = (name, onChange) => {
	<select name={name} onChange={onChange} required="required">
		<option value="" selected="selected">
			Select a State
		</option>
		<option value="AL">Alabama</option>
		<option value="AK">Alaska</option>
		<option value="AZ">Arizona</option>
		<option value="AR">Arkansas</option>
		<option value="CA">California</option>
		<option value="CO">Colorado</option>
		<option value="CT">Connecticut</option>
		<option value="DE">Delaware</option>
		<option value="DC">District Of Columbia</option>
		<option value="FL">Florida</option>
		<option value="GA">Georgia</option>
		<option value="HI">Hawaii</option>
		<option value="ID">Idaho</option>
		<option value="IL">Illinois</option>
		<option value="IN">Indiana</option>
		<option value="IA">Iowa</option>
		<option value="KS">Kansas</option>
		<option value="KY">Kentucky</option>
		<option value="LA">Louisiana</option>
		<option value="ME">Maine</option>
		<option value="MD">Maryland</option>
		<option value="MA">Massachusetts</option>
		<option value="MI">Michigan</option>
		<option value="MN">Minnesota</option>
		<option value="MS">Mississippi</option>
		<option value="MO">Missouri</option>
		<option value="MT">Montana</option>
		<option value="NE">Nebraska</option>
		<option value="NV">Nevada</option>
		<option value="NH">New Hampshire</option>
		<option value="NJ">New Jersey</option>
		<option value="NM">New Mexico</option>
		<option value="NY">New York</option>
		<option value="NC">North Carolina</option>
		<option value="ND">North Dakota</option>
		<option value="OH">Ohio</option>
		<option value="OK">Oklahoma</option>
		<option value="OR">Oregon</option>
		<option value="PA">Pennsylvania</option>
		<option value="RI">Rhode Island</option>
		<option value="SC">South Carolina</option>
		<option value="SD">South Dakota</option>
		<option value="TN">Tennessee</option>
		<option value="TX">Texas</option>
		<option value="UT">Utah</option>
		<option value="VT">Vermont</option>
		<option value="VA">Virginia</option>
		<option value="WA">Washington</option>
		<option value="WV">West Virginia</option>
		<option value="WI">Wisconsin</option>
		<option value="WY">Wyoming</option>
	</select>;
};

function LoadTableShip() {
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [equimentType, setEquimentType] = useState("");
	const [originCity, setOriginCity] = useState("");
	const [originState, setOriginState] = useState("");
	const [destinationCity, setDestinationCity] = useState("");
	const [destinationState, setDestinationState] = useState("");
	const [miles, setMiles] = useState("");
	const [truckCost, setTruckCost] = useState("");
	const [type, setType] = useState("");

	const [order, setOrder] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/api/get")
			.then((response) => setOrder(response.data));
	});

	const submitJob = () => {
		Axios.post("http://localhost:3001/api/submit", {
			email: email,
			date: date,
			equimentType: equimentType,
			originCity: originCity,
			originState: originState,
			destinationCity: destinationCity,
			destinationState: destinationState,
			miles: miles,
			truckCost: truckCost,
			type: type,
		}).then(() => {
			alert("Job Posted");
		});
	};
	return (
		<>
			<div className="loadboard">
				<h1>Load Board</h1>
				<h3>Shipper</h3>
				<h2>Create New Post</h2>
				<form>
					<div className="submission">
						<input
							type="text"
							name="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							required="requried"
							placeholder="Input Email"
						/>
						<input
							type="date"
							name="date"
							onChange={(e) => {
								setDate(e.target.value);
							}}
							required="requried"
							placeholder="Date"
						/>
						<input
							type="text"
							name="equimentType"
							onChange={(e) => {
								setEquimentType(e.target.value);
							}}
							required="requried"
							placeholder="Equiment Type"
						/>
						<input
							type="text"
							name="originCity"
							onChange={(e) => {
								setOriginCity(e.target.value);
							}}
							required="requried"
							placeholder="Origin City"
						/>
						{/* <input
							type="text"
							name="originState"
							onChange={(e) => {
								setOriginState(e.target.value);
							}}
							required="requried"
							placeholder="Origin State"
						/> */}
						<select
							name="originState"
							onChange={(e) => {
								setOriginState(e.target.value);
							}}
							required="required"
						>
							<option value="" selected="selected">
								Origin State
							</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>

						<input
							type="text"
							name="destinationCity"
							onChange={(e) => {
								setDestinationCity(e.target.value);
							}}
							required="requried"
							placeholder="Destination City"
						/>
						{/* <input
							type="text"
							name="destinationState"
							onChange={(e) => {
								setDestinationState(e.target.value);
							}}
							required="requried"
							placeholder="Destination State"
						/> */}
						<select
							name="destinationState"
							onChange={(e) => {
								setDestinationState(e.target.value);
							}}
							required="requried"
						>
							<option value="" selected="selected">
								Destination State
							</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>

						<input
							type="Number"
							name="miles"
							onChange={(e) => {
								setMiles(e.target.value);
							}}
							required="requried"
							placeholder="Miles"
						/>
						<input
							type="Number"
							name="truckCost"
							onChange={(e) => {
								setTruckCost(e.target.value);
							}}
							required="requried"
							placeholder="Load Cost"
						/>
						<input
							type="text"
							name="type"
							onChange={(e) => {
								setType(e.target.value);
							}}
							required="requried"
							placeholder="Type Ex.Broker"
						/>
					</div>
					<button onClick={submitJob}>Add</button>
				</form>
				<table>
					<thead>
						<tr>
							<th>Email</th>
							<th>Date Available</th>
							<th>Equiment Type</th>
							<th>Origin City</th>
							<th>Origin State</th>
							<th>Destination City</th>
							<th>Destination State</th>
							<th>Miles</th>
							<th>Load Cost</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						{order.map((val) => {
							return (
								<tr>
									<td>{val.Email}</td>
									<td>{val.DateAvailable}</td>
									<td>{val.EquipmentType}</td>
									<td>{val.OriginCity}</td>
									<td>{val.OriginState}</td>
									<td>{val.DestinationCity}</td>
									<td>{val.DestinationState}</td>
									<td>{val.Miles}</td>
									<td>{val.TruckCost}</td>
									<td>{val.Type}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default LoadTableShip;
