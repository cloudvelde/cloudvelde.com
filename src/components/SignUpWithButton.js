const SignUpWithButton = ({ text, color, logo }) => {
    return (
        <>
            <button type="button" color={color} className="btn btn-dark signUpWithButton">
                <div className="signUpWithImage">
                    {logo}
                </div>
                <h3 className="signUpWithButtonText">{text}</h3>
                </button>
        </>
    )
}

export default SignUpWithButton