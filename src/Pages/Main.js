import React, {Component} from 'react';
import Header from "../Components/Header";
import ListContainer from "../Components/ListContainer";
import '../styles/Main.css';
import Loader from '../Components/Loader';


class Main extends Component{

	constructor(props) 
	{
		super();
    	this.state = { isLoading: true }
	}

	componentDidMount() 
	{
		this.setState({isLoading: false})
	}

    render(){
        return (

        this.state.isLoading 
    	? 	
    	<Loader className='loader'/> 
    	: 
        <div>
            <Header {...this.props}/>
            <ListContainer />
        </div>
        );

    }
}

export default Main;