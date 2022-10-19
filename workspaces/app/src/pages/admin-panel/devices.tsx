import Sidebar from "../../components/admin-panel/sidebar";
import DeviceCard from "../../components/admin-panel/deviceCard";
import {useState} from "react";
import Modal from "react-modal";

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
	let subtitle;
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [ID, setId] = useState('')
	function Open() {
		setModalIsOpen(true);
	}
	function Close() {
		setModalIsOpen(false)
	}
	const [data, setData] = useState([
		{
			id: "0000-0000-0000",
			name: "First",
		},
		{
			id: "0000-0000-0001",
			name: "Second",
		},
		{
			id: "0000-0000-0002",
			name: "Third",
		},
	])
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
				{data.map(
					(value) => <DeviceCard name={value.name}/>
				)}
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
						<h3 ref={(_subtitle) => (subtitle = _subtitle)} className="modal--heading--title">Add new Device</h3>
					</div>
					<form className="modal--form" action="">
						<input id='id-input' className="modal--form--id-input"
							   type="text"
							   placeholder="Input device id"
							   onChange={ (e) => {
							   			setId(e.target.value)
							   		}
							   }
						/>
						<button className="modal--form--submit"
							onClick={
								() => {
									setData(data.concat({
										id: ID,
										name: "fourth"
									}));
									console.log(data)
								}
							}>Submit</button>
					</form>
				</div>
			</Modal>
		</main>
	</>
}