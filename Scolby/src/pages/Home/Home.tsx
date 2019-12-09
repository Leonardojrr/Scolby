import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

require('./Home.css')




const Home: React.FC = () => {
  return (
    <IonPage id="Page_home">
      <div id="header">
        <figure>
          <img src={require("../../media/Logos/title_white.png")} alt="" />
        </figure>
      </div>
      <IonContent className="ion-padding">

        The world is your oyster.
          <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
            </a>{' '}
          will be your guide.
          </p>
      </IonContent>

    </IonPage>
  )
};

export default Home;
