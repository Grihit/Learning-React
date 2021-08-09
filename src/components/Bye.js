import React, {Component} from 'react'

class Bye extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Bye Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Welcome bitchhh!'
        })
    }

    render(){
        //return <h1>Bye {this.props.name} from {this.props.subject}</h1>
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Welcome me first!</button>
            </div>
        )
    }
}

export default Bye