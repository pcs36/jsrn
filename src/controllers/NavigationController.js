import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, getfocusedroutenamefromroute, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './RootNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect, useDispatch, useSelector } from 'react-redux';

import { isAuthenticated } from '../store/selectors/AuthSelectors';


// Auth Scenes
import Signin from '../screens/auth/Signin';
import Registration from '../screens/auth/Registration';
import ForgotPassword from '../screens/auth/ForgotPassword';
import SuccessRegister from '../screens/auth/SuccessRegister';

// Non Auth Scenes
import Profile from '../screens/profile/Profile';
import Dashboard from '../screens/home/Dashboard';
import CurrentStatus from '../screens/home/CurrentStatus';
import TodayHistory from '../screens/home/TodayHistory';


// Drawer Scenes
import Elibrary from '../screens/home/Elibrary';
import OnlineExam from '../screens/home/OnlineExam';
import OnlineClasses from '../screens/home/OnlineClasses';

import CustomDrawer from './CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AuthScenes = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />

            <Stack.Screen
                name="SuccessRegister"
                component={SuccessRegister}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
        </Stack.Navigator>
    );
}

const NonAuthScenes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TodayHistory"
                component={TodayHistory}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
            <Stack.Screen
                name="currentStatus"
                component={CurrentStatus}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
            

        </Stack.Navigator>
    );

}

const DrawerScenes = () => {

    const demoExamSubmit = useSelector(state => state.questionNo.demoExamDoneOrNot);
    const demoUserOrNot = useSelector(state => state.auth.user_id);
    const regUserSubOrNot = useSelector(state => state.auth.is_subscribe);
    const newStudentid = useSelector(state => state.student.newStudentid);
    const is_subscribe_e_library = useSelector(state => state.auth.is_subscribe_e_library);

    const navigation = useNavigation()


    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#137897',
                drawerActiveTintColor: '#fff',
                drawerInactiveTineColor: '#333',
                drawerLabelStyle: { marginLeft: -25, fontSize: 15, },
                drawerStyle: {
                    // backgroundColor: '#c6c',
                    width: 300,
                    borderBottomRightRadius: 40,
                    borderTopRightRadius: 170,
                    // marginTop:30,
                },
                swipeEnabled: false,
                // drawerType:'slide'//'front' | 'back' | 'slide' | 'permanent'


            }}

            initialRouteParams='Dashboard'
            initialRouteName='Dashboard'

        // useLegacyImplementation
        >

            

            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    drawerIcon: ({ color }) => (
                        <Ionicons name="grid-outline" size={22} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name="Online Exams"
                component={OnlineExam}
                options={{
                    unmountOnBlur: true,
                    drawerIcon: ({ color }) => (
                        <Ionicons name="document-text-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="e-library"
                component={Elibrary}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    drawerIcon: ({ color }) => (
                        <Ionicons name="book-outline" size={22} color={color} />
                    )
                }}
            />

            {demoUserOrNot >= 1 && <Drawer.Screen
                name="Online Classes"
                component={OnlineClasses}
                options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    drawerIcon: ({ color }) => (
                        <Ionicons name="tv-outline" size={22} color={color} />
                    )
                }}
            />
            }

            

        </Drawer.Navigator>
    );
}


const NavigationController = (props) => {

    const [initialRouteName, setInitialRouteName] = useState(props.singinCredential ? 'drawerScenes' : 'authScenes')

    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false, unmountOnBlur: true, }}>
                    <Stack.Screen name="drawerScenes" component={DrawerScenes} />
                    <Stack.Screen name="authScenes" component={AuthScenes} />
                    <Stack.Screen name="nonAuthScenes" component={NonAuthScenes} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default NavigationController;