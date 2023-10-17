import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/authSlice/authSlice";



export const Login:React.FC = () => {

    const intitalState = {
        name: "",
        password: "",
        image: "",
        
      };
      const [values, setValues] = useState(intitalState);
      const onChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };
    
      const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center  flex-col p-">
            <div>
                Enter login 
            </div>
            <div className="flex flex-col">
                <input className="bg-black text-white" type="text" name="name"  value={values.name} onChange={onChange}></input>
                <input className="bg-black text-white" type='password' name="password" value={values.password} onChange={onChange}></input>
                <button onClick={() => dispatch(login(values))}>Login</button>
            </div>
        </div>
    )
}