import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AuthRouter from './Pages/AuthPages/index';
import PostPage from './Pages/PostPage';
import ConfigPage from './Pages/ConfigPage';
import SkillListPage from './Pages/SkillListPage';
import PurchasePage from './Pages/PurchasePage';
import PurchaseCompletedPage from './Pages/PurchaseCompletedPage';
import LogIn from './Organisms/AuthModal/LogIn';
import SignUp from './Organisms/AuthModal/SignUp';
// ログインの画面処理や画面遷移などを記述
function App() {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/auth" component={AuthRouter} />
      <Route path="/post" component={PostPage} />
      <Route path="/config" component={ConfigPage} />
      <Route path="/skillList" component={SkillListPage} />
      <Route path="/purchase" component={PurchasePage} />
      <Route path="/purchaseCompleted" component={PurchaseCompletedPage} />
    </Switch>
  );
}

export default App;
