import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import { IonRouterOutlet } from '@ionic/react';
import PagesChooser from '../PagesChooser/PagesChooser'

//Pages of the app
import Home from '../../pages/Home/Home'
import Bag from '../../pages/Bag/Bag'
import Search from '../../pages/Search/Search'
import Profile from '../../pages/Profile/Profile'


const DashboardPage: React.FC = () => {
    return (
        <Fragment>
            <IonRouterOutlet>
                <Route exact path="/dashboard" component={Home} />
                <Route exact path="/dashboard/bag" component={Bag} />
                <Route exact path="/dashboard/home" component={Home} />
                <Route exact path="/dashboard/search" component={Search} />
                <Route exact path="/dashboard/profile" component={Profile} />
            </IonRouterOutlet>
            <PagesChooser />
        </Fragment>
    );
};

export default DashboardPage;