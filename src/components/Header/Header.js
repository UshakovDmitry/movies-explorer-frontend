import './Header.css';
import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import { debounce } from '../../utils/helpers';

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggler = () => setIsMenuOpen((state) => !state);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const sizeListener = debounce(setIsMenuOpen);
    window.addEventListener('resize', sizeListener);

    return () => window.removeEventListener('resize', sizeListener);
  }, [isMenuOpen]);

  return (
    <header className={`header page__element`}>
      <div
        className={`header__overlay ${isMenuOpen && 'header__overlay_opened'}`}
        onClick={closeMenu}
      />
      <Logo />
  
      <div className="header__right-content"> 
        <NavTab
          loggedIn={props.loggedIn}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          place={props.place}
        />
        {props.loggedIn && (
          <button className={`header__menu ${isMenuOpen && 'header__menu_active'}`} onClick={toggler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </header>
  );
  
};

export default Header;