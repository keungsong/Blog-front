import React,{useState, useEffect} from 'react';
import { images } from '../constants';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/user';
import {Link, useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';





const navItemsInfo = [
  {name: "Home", type:"link", href:"/"},
  {name:"Articles", type:"link", href:"/articles"},
  {name:"Pages", type:"dropdown", items:[{title:"About us", href:"/about"},{title: "Contact us", href:"/contact"}]},
  {name:"FAQ", type:"link", href:"/faq"},
  
];

const NavItem = ({item})=>{

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () =>{
    setDropdown((curState) => {
      return !curState;
    })
  }
 return(
  <li className=' relative group'>
    {item.type === "link" ? (<>
    <Link to={item.href} className='px-4 py-2'>
    {item.name}
     
    </Link>
      <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold  right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>
    /</span>
      
    </> ): (
     
     <div className='flex flex-col items-center '>
    
    <button className='px-4 py-2 flex gap-x-1 items-center' onClick={toggleDropdownHandler}>
      <span>{item.name}</span>
      <MdKeyboardArrowDown/>
    </button>
     <div className={`${dropdown ? "block" : "hidden"} lg:hidden pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
         <ul className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
          {item.items.map((page, index) => (
           
              <Link
                key={index}
                to={page.href} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                {page.title}
              </Link>
            
          ))}
         </ul>
     </div>
    </div>
    )}
  
</li>
 )
}

const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);


  const navVisibilityHandler = () =>{
    setNavIsVisible((curState) => {
      return !curState;
    })
  }

  const logoutHandler = () =>{
       dispatch(logout());
  };
 
  const {t, i18n} = useTranslation(["home"]);

  useEffect(() => {
    if(localStorage.getItem("i18nextLng")?.length > 2 ){
      i18next.changeLanguage("en");
    }
  },[]);

  const handleLanguageChange = (e) =>{
    i18n.changeLanguage(e.target.value);
  }
  return (
    <section className='sticky top-0 z-50 bg-white '>
        <header className='container mx-auto px-5 py-4 flex items-center justify-between '>
            <Link to="/">
               <img className='w-[20%] h-full' src={images.Logo} alt="logo" />
            </Link>
            <div className='lg:hidden z-50'>
              {
                navIsVisible ?( <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler}/> ): (<AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler}/>)
              }
            </div>
            <div className={`${navIsVisible ? "right-0":"-right-full"} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold'>
                 
                  {navItemsInfo.map((item)=>(
                    <NavItem key={(item.name)} item={item}/>
                  ))}
                  <div className='text-dark-soft'>
                    <ul>
                      <li>
                         <select 
                           value={localStorage.getItem("i18nextLng")}
                           onChange={handleLanguageChange}>
                           <option value="en">English</option>
                           <option value="la">Lao</option>
                         </select>
                      </li>
                    </ul>
                  </div>
                </ul>
                {userState.userInfo ? (
                 <div className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold'>
                
                 <div className='relative group'>
                    <div className='flex flex-col items-center '>
                
                       <button className='flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-sky-500 px-6 py-2 text-blue-500 font-bold hover:bg-blue-500 hover:text-white rounded-ms transition-all duration-200' onClick={()=> setProfileDropdown(!profileDropdown)}>
                            <span className='font-notosans'>{t("account")}</span>
                            <MdKeyboardArrowDown/>
                       </button>
                        <div className={`${profileDropdown ? "block" : "hidden"} lg:hidden pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                           <ul className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                      {
                        userState?.userInfo?.admin && (
                          <button 
                          onClick={()=> navigate("/admin")}
                           type='button'
                          className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                          Admin Dashboard
                         </button>
                        )
                      }
                    <button 
                    onClick={()=> navigate("/profile")}
                     type='button'
                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                    Profile
                   </button>
                 
                   <button  onClick={logoutHandler}
                    type='button'
                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                     Logout
                      </button>
                        </ul>
                        </div>
                       </div>
                   </div>
               
                </div>
                ) :  (
                   <button 
                   onClick={() => navigate('/login')} 
                   className="mt-5 lg:mt-0 border-2 border-sky-500 px-6 py-2 text-blue-500 font-bold hover:bg-blue-500 hover:text-white rounded-ms transition-all duration-200">
                  Sign in
                  </button>)}

               
            </div>
        </header>
    </section>
  )
}

export default Header
