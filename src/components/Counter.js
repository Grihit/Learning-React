import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }
    }

    increment(){
        //this.setState(
        //    {
        //        count: this.state.count + 1
        //    },
        //    () =>{
        //        console.log('Callback value:'+ this.state.count)
        //    }
        //)
        this.setState((prevState /*,props*/) => (
            {
                count: prevState.count + 1 /*+ props.addValue*/
            }),
            () =>{
                console.log('Callback value:'+ this.state.count)
            }
        )
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <br />
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
