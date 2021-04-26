import CookieNotice from "./CookieNotice";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Footer = () => {
    const location = useLocation()

    const localCookieStorage = () => {
        switch(window.localStorage.getItem("acceptedCookie")) {
            case "true":
                return true
            default:
                return false
        }
    }

    const [acceptedCookie, setAcceptedCookie] = useState(localCookieStorage())

    const acceptCookie = () => {
        setAcceptedCookie(true)
        localStorage.setItem("acceptedCookie", "true");
    }

    const footerOnly = () => {
        return (
            <h1 className="footerText">Cloudvelde &copy; 2021</h1>
        )
    }

    const footerAndCookie = () => {
        return (
            <>
                {acceptedCookie ?
                    (<h1 className="footerText">Cloudvelde &copy; 2021 -  <a href="https://en.wikipedia.org/wiki/Belgium" target="_blank" rel="noreferrer">🇧🇪</a></h1>):
                    (<CookieNotice acceptCookie={() => {acceptCookie()}}/>)
                }
            </>
        )
    }

    const completeFooter = () => {
        if(location.pathname === "/privacy") {
            return footerOnly()
        }

        return footerAndCookie()
    }

    return (
        <>
            <div className="footer">
                {completeFooter()}
            </div>
        </>
    );
}

export default Footer