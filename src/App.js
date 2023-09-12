
import {Suspense} from "react"
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/home/HomePage';
import {Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';

import Comments from './pages/admin/screens/comments/Comments';

import ManagePost from './pages/admin/screens/posts/ManagePosts';
import ArticlePage from './pages/article/ArticlePage';
import FaqPage from './pages/faq/FaqPage';
import About from './pages/about/AboutPage';
import ContactUsPage from './pages/contactUs/ContactUsPage';
import EditPost from "./pages/admin/screens/posts/EditPost";

function App() {
  return (
    <div className="App font-roboto">
      <Suspense fallback={null}>
      <Routes>
         <Route index path='/' element={ <HomePage/>}/>
         <Route path='/blog/:slug' element={ <ArticleDetailPage/>}/>
         <Route path='/register' element={ <RegisterPage/>}/>
         <Route path='/login' element={ <LoginPage/>}/>
         <Route path='/profile' element={ <ProfilePage/>}/>
         <Route path='/articles' element={ <ArticlePage/>}/>
         <Route path='/faq' element={ <FaqPage/>}/>
         <Route path='/about' element={ <About/>}/>
         <Route path='/contact' element={ <ContactUsPage />}/>
         <Route path='/admin' element={ <AdminLayout/>}>
            <Route index element={<Admin/>}/>
            <Route path='comments' element={<Comments/>}/>
            
            <Route path='posts/manage' element={<ManagePost/>}/>
            <Route path='posts/manage/edit/:slug' element={<EditPost/>}/>
         </Route>
      </Routes>
      <Toaster/>
      </Suspense>
    </div>
  );
}

export default App;
