import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/index";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
//import ProfileScreen from "./navigation-sidebar/profile-screen";
import NotificationsScreen from "./navigation-sidebar/notifications-screen";
import MessagesScreen from "./navigation-sidebar/messages-screen";
import ListsScreen from "./navigation-sidebar/lists-screen";
import MoreScreen from "./navigation-sidebar/more-screen";
import WhoToFollowList from "./who-to-follow-list";

import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import ProtectedRoute
  from "./user/protected-route";

const store = configureStore({
   reducer: {who: whoReducer, tuits: tuitsReducer, user:  authReducer}});
function Tuiter() {
    return(
      <Provider store={store}>
         <div>
            <Nav />
            <div className="row">
               <div className="col-2">
                  <NavigationSidebar />
               </div>
               <div className="col-7">
                  <Routes>
                  <Route path="/home" element={<HomeScreen />} />
                  <Route path="/explore" element={<ExploreScreen />} />
                  <Route path="/notifications" element={<NotificationsScreen />} />
                  <Route path="/messages" element={<MessagesScreen />} />
                  <Route path="/bookmarks" element={<BookmarksScreen />} />
                  <Route path="/lists" element={<ListsScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                  
                  <Route path="/more" element={<MoreScreen />} />
                  <Route path="/login"    element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/profile"  element={<ProtectedRoute>
 <ProfileScreen  /> </ProtectedRoute>} />
                  </Routes>
               </div>
               <div className="col-3">
                  <WhoToFollowList/>
               </div>
            </div>
         </div>
      </Provider>
   );
}
export default Tuiter