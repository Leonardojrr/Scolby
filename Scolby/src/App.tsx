import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/regist" component={Login} exact={true} />
        <Route path="/search" component={Login} exact={true} />
        <Route path="/profile" component={Login} exact={true} />
        <Route path="/profile/config" component={Login} exact={true} />
        <Route path="/profile/addPost" component={Login} exact={true} />
        <Route path="/bag" component={Login} exact={true} />
        <Route path="/post" component={Login} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/Login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
