import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>!Hola {this.props.name} desde un componente clase!</h1> 
                <h2>Tu edad es de: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greting.propTypes = {
    name: PropTypes.string,
};


export default Greting;
