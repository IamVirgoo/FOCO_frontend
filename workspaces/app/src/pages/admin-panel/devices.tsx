import Sidebar from "../../components/admin-panel/sidebar";
import DeviceCard from "../../components/admin-panel/deviceCard";
import {useEffect, useState} from "react";
//@ts-ignore
import Modal from "react-modal";
import {useIndexedDB} from "react-indexed-db";
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
	/**
	 * @description initialization states for ID input field and states for DataBase info
	 * */
	const [ID, setId] = useState('')
	const [infoContainer, setInfoContainer] = useState<[{name : string, deviceID : string}] | null>();
	/**
	 * @description initialization the react-indexed-db actions:
	 * <li>add - for inserting data into DataBase "devices" table<li/>
	 * <li>getAll - for getting all data from DataBase "devices" table<li/>
	 * */
	const { add, getAll } = useIndexedDB("devices");
	/**
	 * @name handleClick
	 * @description function for inserting data into DataBase from <form>
	 * */
	const handleClick = () => {
		add({
			name : "Name",
			deviceID : ID
		}).then();
	}
	/**
	 * @description dynamic setting data from DataBase in infoContainer state
	 * */
	useEffect(() => {
		getAll().then(
			(data) => {
				data.map(
					(value) => {
						setInfoContainer([{name : value.name, deviceID : value.deviceID}])
					}
				)
			}
		)
	}, [])
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
		<Sidebar/>
		<main>
			<div className="admin--wrapper">
				<h1 className="admin--wrapper--heading">Your devices</h1>
				<button className="admin--wrapper--add" id='id' onClick={Open}>
					Add new
				</button>
			</div>
			<div className="admin--content">
				{
					infoContainer?.map(
						(value) => <DeviceCard name={value.deviceID}/>
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
					<form className="modal--form" method="post" onSubmit={handleClick}>
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