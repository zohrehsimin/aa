import {createRouter, createWebHistory} from 'vue-router';
import HomeHeader from "./components/HomePage/HomeHeader";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import LevelOneSideBar from "./components/Dashboard/MultiLevelSideBar/LevelOneSideBar";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
import DashboardLanding from "./components/Dashboard/DashboardLanding";
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', redirect : '/homepage'},
        {path : '/homepage',
            components : {
            homeHeader : HomeHeader
            }
        },
        {path: '/login',
        component:LoginForm
        },
        {path: '/signup',
        component:SignupForm
        },
        {
            path : '/dashboard',components:
                {
                    default : DashboardHeader,
                    levelOneSideBar : LevelOneSideBar,
                    dashboardLanding : DashboardLanding
                }
        },

    ]
});
export default router;