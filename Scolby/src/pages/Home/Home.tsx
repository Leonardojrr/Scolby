import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

require('./Home.css')




const Home: React.FC = () => {
  return (
    <IonPage id="home-page">

      <IonContent >
        <div id="home-header" className="a">
          <figure>
            <img src={require("../../media/Logos/title_white.png")} alt="" />
          </figure>
        </div>
      </IonContent>

    </IonPage>
  )
};

export default Home;
