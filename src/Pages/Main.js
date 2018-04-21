import React, {Component} from 'react';
import Header from "../Components/Header";
import ListContainer from "../Components/ListContainer";
import '../styles/Main.css';
import Loader from '../Components/Loader';
import AddButton from '../Components/AddButton';
import Modal from 'react-modal';
import RequestModal from '../Components/RequestModal';



const customStyles = {
    content : {
      width : '30%',
      height: '50%',

      backgroundColor: 'rgba(255,255,255,1)',

      overflow: "visible",
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Main extends Component{

	constructor(props) 
	{
		super();
        this.state = { isLoading: true ,

            modalIsOpen: false,
            DisplayName: "",
            userID: "",
        
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    
	componentDidMount() 
	{
        this.setState({isLoading: false})
    }
    
    changeUserName(name, userID){
        this.setState({DisplayName: name});
        this.setState({userID: userID});
    }

    render(){
        const {location} = this.props;


        return (

        this.state.isLoading 
    	? 	
    	<Loader className='loader'/> 
    	: 
        <div>

            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Request Modal"
                overlayClassName= "Overlay"
            >
                <RequestModal onclick = {this.closeModal} userID = {this.state.userID}/>
            </Modal>

            <ListContainer userName = {this.state.DisplayName} 
                change = {this.changeUserName}
                 userEmail = {location.state.Username}
                   {...this.props} />

            <AddButton onclick = {this.openModal}/>
        </div>
        );

    }
}

export default Main;