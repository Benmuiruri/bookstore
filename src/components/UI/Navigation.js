import { NavLink } from 'react-router-dom';
import Header from './Header';
import styles from './Navigation.module.css';

function Navigation() {
  const mainLinks = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
  ];

  const subLinks = [
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className={styles.headerNav}>
      <Header />
      <ul className={styles.navigation}>
        {mainLinks.map((link) => (
          <li key={link.id} className={styles.navLink}>
            <NavLink
              data-testid={link.id}
              to={link.path}
              className={styles.link}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        {subLinks.map((link) => (
          <li key={link.id} className={styles.navLink}>
            <NavLink
              data-testid={link.id}
              to={link.path}
              className={styles.offLink}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
