import React from 'react';

import { ExploreOutlined, AddBoxOutlined, SendOutlined, Home, PersonOutlined } from '@mui/icons-material';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <span>instagram</span>
        <input />
        <nav className={styles.nav}>
          <Link to={'/'}>
            <Home />
          </Link>
          <Link to={'/direct/inbox'}>
            <SendOutlined />
          </Link>
          <Link to={'/create/select'}>
            <AddBoxOutlined />
          </Link>
          <Link to={'/explore'}>
            <ExploreOutlined />
          </Link>
          <FavoriteBorderOutlined />
          <PersonOutlined />
        </nav>
      </div>
    </header>
  );
};

export default Header;
