import Sidebar from "../../components/admin-panel/sidebar";
import DeviceCard from "../../components/admin-panel/deviceCard";
import {useCallback, useEffect, useState} from "react";
//@ts-ignore
import Modal from "react-modal";
import {useIndexedDB} from "react-indexed-db";
import { append_device, devicesReducer, device_list } from "../../slices/devices";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../stores/appStore";

import chip from "../../../public/admin-panel/icons/chip.svg";

/**
 * @name customStyles
 * @description styles for modal overlay
 * */
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '15px',
		backgroundColor: '#21232E',
		border: 'none'
	}
};

export default function Devices() {
	const dispath = useDispatch();
	const dev = useSelector((state : AppState) => state.devices)
	console.log(dev.values);

	
	const [ID, setId] = useState('')
	const [infoContainer, setInfoContainer] = useState<[{name : string, deviceID : string}] | null>();


	/* const { add, getAll } = useIndexedDB("devices"); */


	const handleClick = () => {
		/* add({
			name : "Name",
			deviceID : ID
		}).then(); */
		dispath(append_device({
			deviceName : "device" + dev.values.lastIndexOf,
			deviceID : 2
		}))
	}


	/* useEffect(() => {
		getAll().then(
			(data) => {
				data.map(
					(value) => {
						setInfoContainer([{name : value.name, deviceID : value.deviceID}])
					}
				)
			}
		)
	}, []) */



	/***/
	let subtitle;
	/**
	 * @description modal opening state
	 * */
	const [modalIsOpen, setModalIsOpen] = useState(false);
	/**
	 * @name Open
	 * @description modal state True typesetter
	 * */
	function Open() {
		setModalIsOpen(true);
	}
	/**
	 * @name Close
	 * @description modal state False typesetter
	 * */
	function Close() {
		setModalIsOpen(false)
	}
	return <>
		<main>
			<div className="admin--heading">
				<div className="admin--heading--wrapper">
					<h1 className="admin--heading--hello">Your Device</h1>
					<button className="admin--heading--wrapper--add" onClick={Open}>
						Add new
					</button>
				</div>
				<div className="admin--heading--user">
					<div className="admin--heading--user--photo-wrapper">
						<img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
					</div>
				</div>
			</div>
			<div className="admin--content">
				{
					dev.values.map(
						(value) => <DeviceCard icon={chip} name={value.deviceName}/>
					)
				}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={Close}
				style={customStyles}
				contentLabel="Example Modal"
				overlayClassName='modal--overlay'
			>
				<div className="modal">
					<div className="modal--heading">
						<h3
							ref={(_subtitle) => (subtitle = _subtitle)}
							className="modal--heading--title">Add new Device
						</h3>
					</div>
					<form className="modal--form" method="post" /* onSubmit={handleClick} */>
						<input id='id-input' className="modal--form--id-input"
							   type="text"
							   placeholder="Input device id"
							   onChange={ (e) => {
							   			setId(e.target.value)
							   		}
							   }
						/>
						<button className="modal--form--submit" type="submit">Submit</button>
					</form>
				</div>
			</Modal>
		</main>
	</>
}