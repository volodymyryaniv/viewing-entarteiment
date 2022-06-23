import AuthTypeComponent from './LoginPage/AuthTypeComponent';
import BookStores from './EntarteimentPage/BookStores';
import Cafes from './EntarteimentPage/Cafes';
import Cinemas from './EntarteimentPage/Cinemas';
import ContactsPage from './ContactsPage';
import EntarteimentPage from './EntarteimentPage';
import EntarteimentNavigation from './EntarteimentPage/EntarteimentNavigation';
import ItemDescription from './EntarteimentPage/ItemDescription';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage';
import Navigation from './Navigation';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import SingInComponent from './LoginPage/SingInComponent';
import SingUpComponent from './LoginPage/SingUpComponent';
import TopPlaces from './TopPlaces';
import { Routes, Route } from 'react-router-dom';
import routes from '../consts/routes.js';
import styles from './App.module.scss';

function App() {
  const {
    homePage,
    topPage,
    historyPage,
    attractionsPage,
    bookStoresPage,
    cafesPage,
    cinemasPage,
    contactsPage,
    dynamicParam,
    authPage,
    singInPage,
    singUpPage,
  } = routes;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.App}>
          <Navigation />
        </div>
      </div>
      <main className={styles.App}>
        <Routes>
          <Route path={`${homePage}*`} element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path={`${authPage}/*`} element={<LoginPage />}>
              <Route index element={<AuthTypeComponent />} />
              <Route path={singInPage} element={<SingInComponent />} />
              <Route path={singUpPage} element={<SingUpComponent />} />
            </Route>
          </Route>
          <Route path={topPage} element={<TopPlaces />} />
          <Route path={historyPage} element={<HistoryPage />} />
          <Route path={`${attractionsPage}/*`} element={<EntarteimentPage />}>
            <Route index element={<EntarteimentNavigation />} />
            <Route path={bookStoresPage} element={<BookStores />} />
            <Route path={`${bookStoresPage}/${dynamicParam}`} element={<ItemDescription />} />
            <Route path={cafesPage} element={<Cafes />} />
            <Route path={`${cafesPage}/${dynamicParam}`} element={<ItemDescription />} />
            <Route path={cinemasPage} element={<Cinemas />} />
            <Route path={`${cinemasPage}/${dynamicParam}`} element={<ItemDescription />} />
          </Route>
          <Route path={contactsPage} element={<ContactsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
