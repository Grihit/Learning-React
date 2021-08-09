import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello',
             count: 1
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }
    
    /*
    clickHandler(){
        this.setState({
            count: this.state.count + 1
        })
        if(this.state.count%2==0){
            this.setState({
                message: 'Hello'
            })
        }
        else{
            this.setState({
                message: 'Goodbye'
            })
        }
        console.log(this.state.count)
    }
    */
    clickHandler= () =>{
        this.setState({
            count: this.state.count + 1
        })
        if(this.state.count%2==0){
            this.setState({
                message: 'Hello'
            })
        }
        else{
            this.setState({
                message: 'Goodbye'
            })
        }
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>
                <button onClick={() => this.clickHandler()}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
