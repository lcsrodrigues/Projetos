import React, {Component} from 'react'

export class Users extends Component{
    state = {
        userList:['Samuel Martins','Elon Musk', 'Steve Jobs'],
        givenPropIsAnUser: undefined
    }

    componentDidUpdate(prevProps){
        if(prevProps.searchFor !== this.props.searchFor){
            if(this.state.userList.includes(this.props.searchFor)){
                this.setState({
                    givenPropIsAnUser:true
                })
            }else{
                this.setState({
                    givenPropIsAnUser:false
                })
            }
        }
    }

    render(){
        if(this.state.givenPropIsAnUser === true){
            return(
                <h1>User in found!</h1>
            )
        }else{
            return(
                <h1>We don't have user yet</h1>
            )
        }
    }
}