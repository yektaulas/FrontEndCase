import styles from './App.module.css';
import { BottomBar } from './components/bottombar/bottombar';
import { Outlet, useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath == '/') {
      navigate('/document_scanner');
    }
  }, []); //

  return (
    <>
      <div className="h-screen bg-[#F5F5F7] flex flex-col font-customFont md:justify-center overflow-hidden">
        <div>
          <Outlet />
          <BottomBar />
          <div className="z-10 h-full relative bg-[#F5F5F7]"></div>
        </div>
      </div>
      <main className={styles.main}></main>
    </>
  );
}
