import React, {useState} from 'react'
import { loginUser } from '../fetch/Fetch'
import { createUser } from '../fetch/Fetch'
// import { getUser } from '../fetch/Fetch'
import { useDispatch } from 'react-redux'
// import {connect} from 'react-redux'

function Login() {

    // const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [login, setLogin] = useState(true)
    const [errors, setErrors] = useState([])
    

    const handleData = async (data) => {
        if (data.token){ 
            debugger
            localStorage.token = data.token
            // let currentUser = await getUser()
            dispatch({type: "SET_USER", payload: data.current_user})
            
        } else { setErrors(data.errors) }
    }

    const  handleSubmit = async (e) => {
        e.preventDefault()
        if (login){
            let data = await loginUser(username, password)
            handleData(data)
            
        } else if (!login) {
            let data = await createUser(username, email, password, password_confirmation)
            handleData(data)
        } 
    }

    const changeForm = () => {
        setLogin(!login)
        setErrors([])
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            { errors.map((error) => {
                                return <h5>{error}</h5>
                            })}
                            <h5 className="card-title text-center">{login ? "Login" : "Signup"}</h5>
                            <form onSubmit={(e)=> handleSubmit(e)} className="form-signin">
                                <div className="form-label-group">
                                    <label forhtml="inputUsername">Username</label>
                                    <input 
                                    value={username} 
                                    type="username" 
                                    onChange={(e)=> setUsername(e.target.value)}
                                    className="form-control" 
                                    placeholder="Username" 
                                    required autoFocus />
                                </div>

                                {login ? null : (
                                    <div className="form-label-group">
                                    <label forhtml="email">Email</label>
                                    <input 
                                    value={email} 
                                    type="email" 
                                    onChange={(e)=> setEmail(e.target.value)}
                                    id="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    required /> 
                                </div>
                                )}

                                <div className="form-label-group">
                                    <label forhtml="inputPassword">Password</label>
                                    <input 
                                    value={password} 
                                    type="password" 
                                    onChange={(e)=> setPassword(e.target.value)}
                                    id="inputPassword" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    required /> 
                                </div>
                                {login ? null : (
                                    <div className="form-label-group">
                                    <label forhtml="inputPassword">Confirm Password</label>
                                    <input 
                                    value={password_confirmation} 
                                    type="password" 
                                    onChange={(e)=> setPasswordConfirmation(e.target.value)}
                                    id="email" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    required /> 
                                </div>
                                )}
                                <br/>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">{ login ? 'Login' : 'Signup' }</button>
                                <hr className="my-4"/>
                                
                            </form>
                            <button className='btn-block' onClick={()=> changeForm()}>{login ? 'Sign up?' : 'Already an User?'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  export default (Login)


// function mapStateToProps(state){
//     return {
//       currentUser: state.currentUser
//     }
//   }
  
//   function mapDispatchToProps(dispatch){
//     return {
//       setUser: (user) => {
//         dispatch({type: "SET_USER", payload: user})
//       }
//     }
//   }