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

      top                   : '50%',
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

            Username: "",
            modalIsOpen: false
        
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render(){
        const {location} = this.props;

        console.log(location.state.Username);

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
                <RequestModal onclick = {this.closeModal}/>
            </Modal>

            <Header userEmail = {location.state.Username} {...this.props}/>
            <ListContainer />

            <AddButton onclick = {this.openModal}/>
        </div>
        );

    }
}

export default Main;