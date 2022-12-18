
import React,{setState} from 'react'
import { NavLink } from 'react-router-dom';

/* function ValidationMessage(props){
    if(!props.valid){
        return(
            <div className='"alert-danger' role={alert}>{
                props.message}</div>
        )
    }
    return null;
} */

/* form */
/* let validateForm=()=>{
    const{emailValid,passValid}=this.state;
    
    this.setState({
        formValid:emailValid && passValid
    })
}
 */
/* email */
/* let validateEmail=()=>{
    const{email}=this.state;
    const emailValid=true
    const errorMsg={...this.state.errorMsg}

    if(email.length<6 || email.length>15){
        emailValid=false
        errorMsg.email="el email debe tener entre 6 y 15 caracteristicas"
    }

    this.setState({emailValid, errorMsg}.this.validateForm);

    validateEmail=()=>{
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid=false
            errorMsg= "formato de email invalido"
        }
    }
}
 */
/* pass */
/* let validatePass=()=>{
    const{pass}=this.state;
    const passValid=true
    const errorMsg={...this.state.errorMsg}

    if(pass.length<6 || pass.length>8){
        passValid=false
        errorMsg.pass="el pass debe tener entre 6 y 8 caracteristicas"
    }

    this.setState({passValid, errorMsg}.this.validateForm);

} */

function Login() {

     /* resetForm();{
        this.setState({
            email:"",emailValid:false,
            pass:"",passValid:false,
            formValid:false,
            errorMsg:{}
        })
    }  */

  return (
    <div>
        <body className="login">
  
  <main>
      <section className="form-reglog">
          <h1>Iniciar sesión</h1>
          <form action="/usuario/login" method="post" id="form">
            
              <div>
                  <input className="ingreso" type="email" name="email" id="email" /* value={this.state.email} placeholder="Ingrese su correo electronico" onChange={(e)=> this.setState({email:e.target.value},this.validateEmail)} *//>                  
                  <small id="emailContainer"> </small> 
                  {/* <span><ValidationMessage valid={this.state.emailValid}
                  message={this.state.errorMsg.email}/></span> */}
              </div>

              <div>
                  <input className="ingreso" type="password" name="pass" id="pass" /* value={this.state.pass}placeholder="Ingrese su contraseña" onChange={(e)=> this.setState({pass:e.target.value},this.validatePass)} *//>                  
                  <small id="passContainer"> </small>  
                  {/* <span><ValidationMessage valid={this.state.passValid}
                  message={this.state.errorMsg.pass}/></span>             */}     
              </div>
              
              <div className="recForm">
                  <label><input type="checkbox" name="recordarme" id="recordarme"/>Recordarme</label>
                  <label><a href="/">Olvidé mi contraseña</a></label>
              </div>
              
              <div> 
                  <button type="submit" className="boton" /* disabled={!this.state.formValid} */>Iniciar sesión</button>
              </div>
              
              <div className="linea"></div>
              <p>¿No tenes cuenta?<NavLink to={"/usuario/register"}>Registrarme</NavLink></p>
          </form>
          {/* <p>EMAIL:{this.state.email}</p>
          <p>PASS:{this.state.pass}</p> */}

          {/* class form explends component{
            state={
                    email:"",emailValid:false,
                    pass:"",passValid:false,
                    formValid:false,
                    errorMsg:{}
                }
            } */}
          

      </section>

    
  </main>
  
  <script src="/javascript/loginVal.js"></script>
</body>

    </div>
  )
}

export default Login

 /* state={
    email:"",
    pass:"",
    isValid:false
} */
 