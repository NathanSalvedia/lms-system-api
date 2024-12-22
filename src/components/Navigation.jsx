import menu from '../img/menu.png';
import dashboard from '../img/dashboard.png';
import bookicon from '../img/bookicon.png';
import transaction from '../img/transaction.png';
import user from '../img/user.png';
import bell from '../img/bell.png';
import logouticon from '../img/logouticon.png';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  
  const navigate = useNavigate(); 
  const closeNav = () => {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.display = 'none';
  };

  const openNav = () => {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.display = 'block';
  };

  const handleLogout = () => {
   
    localStorage.removeItem('user'); 
    
    navigate('/');
  };

  return (
    <div className="bg-gray-300">
      <header className="flex items-center justify-between p-5">
        <div className="flex items-center space-x-4">
          <img src={menu} alt="Menu" className="h-6 text-white cursor-pointer" onClick={openNav} />
          <p className="text-lg font-bold text-amber-900">SPC LIBRARY</p>
        </div>
        <div className="flex items-center space-x-4">
        <img src={bell} alt="notification" className="h-6" /> 
          <img src={user} alt="User" className="h-6" 
            href="/profile"
          />
        </div>
      </header>
      
      {/* Side Navigation */}
      <div
        className="fixed top-0 left-0 w-64 h-full shadow-lg bg-gray-50"
        id="mySidenav"
        style={{ display: 'none' }}
      >
        <div className="flex items-center justify-between px-4 py-3 pt-4 text-white border-b bg-red-950">
          <p className="text-lg font-bold text-white">SPC LIBRARY</p>
          <img src={menu} alt="Close Menu" className="h-6 bg-white cursor-pointer" onClick={closeNav} />
        </div>
        <div className="p-4 pt-12 space-y-4">
          <div className="flex items-center py-3 space-x-4">
            <img src={dashboard} alt="Dashboard Icon" className="h-6" />
            <a href="/booklist" className="text-xl text-gray-900">Dashboard</a>
          </div>
          <div className="flex items-center py-3 space-x-2">
            <img src={bookicon} alt="Books Icon" className="h-6" />
            <a href="/requestbook" className="text-xl text-gray-900">Request Book</a>
          </div>
          
          <div className="flex items-center py-3 space-x-2">
            <img src={transaction} alt="Transaction Icon" className="h-6" />
            <a href="/transaction" className="text-xl text-gray-900">Transaction</a>
          </div>
          
          <div className="flex items-center py-3 space-x-2 cursor-pointer" onClick={handleLogout}>
            <img src={logouticon} alt="Logout Icon" className="h-6" />
            <a className="text-xl text-gray-900">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
