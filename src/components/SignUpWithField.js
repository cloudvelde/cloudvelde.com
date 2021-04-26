import SignUpWithButton from "./SignUpWithButton";

import {FaApple} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const SignUpWithField = () => {
    return (
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="signUpWithField">
                    <ul>
                        <li>
                            <SignUpWithButton logo={FaApple()} text="Sign up with Apple"/>
                        </li>
                        <li>
                            <SignUpWithButton logo={FaGoogle()} text="Sign up with Google"/>
                        </li>
                        <li>
                            <SignUpWithButton logo={FaGithub()} text="Sign up with Github"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SignUpWithField;