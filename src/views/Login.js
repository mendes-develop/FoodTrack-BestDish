import React, {useState, useEffect} from 'react'
import { loginUser, createUser } from '../fetch/Fetch'
import { Button, Form, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

function Login(props) {

    // const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [login, setLogin] = useState(true)
    const [errors, setErrors] = useState([])
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (currentUser){
            props.history.push('/')
        }
    })

    const changeForm = () => {
        setLogin(!login)
        setErrors([])
    }
    

    const handleData = async (data) => {
        if (data.token){ 
            localStorage.token = data.token
            // let currentUser = await getUser()
            dispatch({type: "SET_USER", payload: data.current_user})
            props.history.push('/')
        } else { 
            setErrors(data.errors)
            setShow(true) 
            window.scrollTo(0, 0)
            errors.map((error) => alert.error(error))
            
        }
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
    // const alert = useAlert()
    const alert = () => {
        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>You got an error!</Alert.Heading>
                    {errors.map((error) => <p>{error}</p>)}
                </Alert>
            )
        }
        return null
    }

    // 

    return (
        <div className="container">
        {alert()}
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signing my-5">
                        <div className="card-body">
                         
                        <h5 className="card-title text-center">{login ? "Login" : "Signup"}</h5>
                        <Form onSubmit={(e)=> handleSubmit(e)}>
                        <Form.Group controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="Username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} required autoFocus/>
                        </Form.Group>
                        {login ? null : (
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="Email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        </Form.Group>)}
                      
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                        </Form.Group>
                        {login ? null : (
                        <Form.Group controlId="formBasicPasswordConfirmation">
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type="Password" placeholder="Password Confirmation" value={password_confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} required/>
                        </Form.Group>)}
                        
                        <Button variant="secondary" type="submit" size="lg" block>
                          Submit
                        </Button>
                      </Form>
                      <hr className="my-4"/>
                      <Button variant="link" onClick={()=> changeForm()} block>{login ? "Don't have an account yet?" : 'Already an User?'}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )


    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
    //                 <div className="card card-signin my-5">
    //                     <div className="card-body">
    //                         { errors.map((error) => {
    //                             return <h5>{error}</h5>
    //                         })}
    //                         <h5 className="card-title text-center">{login ? "Login" : "Signup"}</h5>
    //                         <form onSubmit={(e)=> handleSubmit(e)} className="form-signin">
    //                             <div className="form-label-group">
    //                                 <label forhtml="inputUsername">Username</label>
    //                                 <input 
    //                                 value={username} 
    //                                 type="username" 
    //                                 onChange={(e)=> setUsername(e.target.value)}
    //                                 className="form-control" 
    //                                 placeholder="Username" 
    //                                 required autoFocus />
    //                             </div>

    //                             {login ? null : (
    //                                 <div className="form-label-group">
    //                                 <label forhtml="email">Email</label>
    //                                 <input 
    //                                 value={email} 
    //                                 type="email" 
    //                                 onChange={(e)=> setEmail(e.target.value)}
    //                                 id="email" 
    //                                 className="form-control" 
    //                                 placeholder="Email" 
    //                                 required /> 
    //                             </div>
    //                             )}

    //                             <div className="form-label-group">
    //                                 <label forhtml="inputPassword">Password</label>
    //                                 <input 
    //                                 value={password} 
    //                                 type="password" 
    //                                 onChange={(e)=> setPassword(e.target.value)}
    //                                 id="inputPassword" 
    //                                 className="form-control" 
    //                                 placeholder="Password" 
    //                                 required /> 
    //                             </div>
    //                             {login ? null : (
    //                                 <div className="form-label-group">
    //                                 <label forhtml="inputPassword">Confirm Password</label>
    //                                 <input 
    //                                 value={password_confirmation} 
    //                                 type="password" 
    //                                 onChange={(e)=> setPasswordConfirmation(e.target.value)}
    //                                 id="email" 
    //                                 className="form-control" 
    //                                 placeholder="Password" 
    //                                 required /> 
    //                             </div>
    //                             )}
    //                             <br/>
    //                             <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">{ login ? 'Login' : 'Signup' }</button>
    //                             <hr className="my-4"/>
                                
    //                         </form>
    //                         <button className='btn-block' onClick={()=> changeForm()}>{login ? 'Sign up?' : 'Already an User?'}</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
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