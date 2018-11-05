import React, {Component} from "react";
import { connect } from 'react-redux';
import  { increment, decrement }  from '../actions';


class Counter extends Component {
    render(){
        return(
            <div className="counter">
                <h1>Counter: {this.props.counter}</h1>
                <button className="increment" onClick={this.props.increment}> + </button>
                <button className="decrement" onClick={this.props.decrement}> - </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: ()  => {
            dispatch(increment());
        },
        decrement: ()  => {
            dispatch(decrement());
        }
    };
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
