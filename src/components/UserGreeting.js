import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

    render() {
        /*if(this.state.isLoggedIn){
            return(
                <div>Welcome {this.props.UserName}</div>
            )
        }
        else{
            return (
                <div>
                    <div>Welcome Guest</div>
                </div>
            )
        }*/
        
        /*let message
        if(this.state.isLoggedIn){
            message = <div>Welcome {this.props.UserName}</div>
        }
        else{
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>*/

        return(
            this.state.isLoggedIn ? (
            <div>Welcome {this.props.UserName}</div>
            ) : (
            <div>Welcom Guest</div>
            )
        )
    }
}

export default UserGreeting
