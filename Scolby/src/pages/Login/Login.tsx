import React from 'react';
import { IonPage } from '@ionic/react';
require('./Login.css')

const Login: React.FC = () => {
    return (
        <IonPage id="Page_login">
            <div id="login_form">
                <div id="logo">
                    <figure>
                        <img src={require('../../media/Logos/Title.svg')} alt="" />
                    </figure>
                </div>
                <span id="alias">clothing and accessories</span>
                <div id="form">
                    <input type="text" placeholder="Email" className="input_field" />
                    <input type="password" placeholder="Password" className="input_field" />
                    <button id="login_button">Login</button>
                </div>
            </div>
            <div id="regist_option">
                <span>You do not have an account?</span>
                <button id="regist_button">Regist</button>
            </div>
        </IonPage>
    )
}

export default Login;