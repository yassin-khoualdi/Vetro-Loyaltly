import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../layout/dashboard/GeneralJSXstyling';
import Sidebar from '../layout/dashboard/Sidebar';
import '../layout/dashboard/dashboard.css';
import {Switch,Route} from 'react-router-dom';
import store from '../components/dashboard/store';
import loyalty from '../components/dashboard/loyalty';
import pointsbalance from '../components/dashboard/pointsbalance';
import pointshistory from '../components/dashboard/pointshistory';
import pointsloyalty from '../components/dashboard/pointsloyalty';
import registeredstore from '../components/dashboard/registeredstore';
import registeredloyalty from '../components/dashboard/registeredloyalty';
import {useDispatch } from 'react-redux';
import {resetAuthResponsePerComponent} from '../store/actions/AuthAction';

const Dashboard = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(resetAuthResponsePerComponent());
	}, [dispatch])
	
  return (
  <div>
	
	<Sidebar props={props}/>
	 <div className="main-content">
      <main className={classes.content}>
        <div className={classes.toolbar} />
			
			<Switch>
				<Route exact path={props.match.path} component={registeredstore} />
				<Route path={`${props.match.path}/view-registered-stores`} component={registeredstore} />
				<Route path={`${props.match.path}/create-store`} component={store} />
				<Route path={`${props.match.path}/create-loyalty-member`} component={loyalty} />
                <Route path={`${props.match.path}/view-registered-loyalty-members`} component={registeredloyalty} />
				<Route path={`${props.match.path}/assign-points-loyalty-member`} component={pointsloyalty} />
				<Route path={`${props.match.path}/view-loyalty-member-points-history`} component={pointshistory} />
                <Route path={`${props.match.path}/view-loyalty-member-points-balance`} component={pointsbalance} />
			</Switch>
        
      </main>
	</div>
	</div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default Dashboard;
