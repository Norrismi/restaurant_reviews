import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getUsers,userRegister} from '../../actions'

class Register extends Component {

    state={
        name:'',
        lastname:'',
        email:'',
        password:'',
        error:''
    }

    handleInputEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    handleInputPassword = (event) =>{
        this.setState({password: event.target.value})
    }
    handleInputName = (event) =>{
        this.setState({name: event.target.value})
    }
    handleInputLastname = (event) =>{
        this.setState({lastname: event.target.value})
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({error:''})

        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            lastname:this.state.lastname,
        },this.props.user.users))
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    showUsers = user => 
        user.users 
        ? user.users.map((item,i) => (
            <table key={i}>
            <tr key={i}>
              <td>{item.name}
              </td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
            </tr>
          </table>
        ))
        :null
    


    render() {
      console.log(this.props)
        let user = this.props.user
        return (
            <div className=''>
            <form onSubmit={this.submitForm}>
                <h2>Add user</h2>
                <div className='.input-field col s6'>
                    <input
                        type='text'
                        placeholder='Enter name'
                        value={this.state.name}
                        onChange={this.handleInputName}
                    />
                </div>
            
                <div className='.input-field col s6'>
                    <input
                        type='text'
                        placeholder='Enter Lastname'
                        value={this.state.lastname}
                        onChange={this.handleInputLastname}
                    />
                </div>
                <div className='input-field'>
                    <input
                        type='text'
                        placeholder='Enter email'
                        value={this.state.email}
                        onChange={this.handleInputEmail}
                    />
                </div>
                <div className='input-field'>
                    <input
                        type='text'
                        placeholder='Enter password'
                        value={this.state.password}
                        onChange={this.handleInputPassword}
                    />
                </div>

                <button className='btn'type='submit'>Add user</button>
                <div className='error'></div>
                {this.state.error}
            </form>
                <div>
                    <h4>Current users:</h4>
                    <table className="centered">
                        {this.showUsers(user)}

                    </table>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        user : state.user
    }
}


export default connect(mapStateToProps)(Register);
