import { Link } from 'react-router-dom';

const CookieNotice = ({ acceptCookie }) => {
    return (
        <div className="footer cookieNotice">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <p className="cookieNoticeText">Hi! This website uses cookies so that we can provide you with the best website experience.</p>
                        <p className="cookieNoticeText">By clicking “I Accept” you acknowledge the use of cookies and to our <Link to="/privacy">Privacy Policy</Link></p>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary cookieNoticeButton" onClick={acceptCookie}>I Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookieNotice;