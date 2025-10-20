import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { DashboardReducer } from './DashboardReducer';

import { StudentReducer } from './StudentReducer';
import { SubscribeReducer } from './SubscribeReducer';
import { ProfileReducer } from './ProfileReducer';


const rootReducers = combineReducers({
	auth: AuthReducer,
	dashboard: DashboardReducer,
	student: StudentReducer,
	subscribe: SubscribeReducer,
	profile: ProfileReducer,
})

export default rootReducers;