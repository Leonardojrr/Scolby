import React from 'react'
import { IonPage, IonContent } from '@ionic/react';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
require("./Profile.css")

const Profile: React.FC = () => {

    async function takePicture() {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Base64
        });

        var imageUrl = image.base64String;
    }


    return (
        <IonPage id="profile-page">
            <IonContent>
                <div id="profile-header">
                    <div id="profile-photo" onClick={takePicture}>
                        <img src={require('../../media/Buttons/Photo.svg')} />
                    </div>
                    <span id="profile-name">Leonardo Rodrigues</span>
                    <div id="config-button">
                        <img src={require('../../media/Buttons/Config_buttom.svg')} />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Profile;