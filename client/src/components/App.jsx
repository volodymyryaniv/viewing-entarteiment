import Navigation from './Navigation';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import EntarteimentPage from './EntarteimentPage';
import EntarteimentNavigation from './EntarteimentPage/EntarteimentNavigation';
import ContactsPage from './ContactsPage';
import TopPlaces from './TopPlaces';
import BookStores from './EntarteimentPage/BookStores';
import Cafes from './EntarteimentPage/Cafes';
import Cinemas from './EntarteimentPage/Cinemas';
import ItemDescription from './EntarteimentPage/ItemDescription';
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
  } = routes;
  return (
    <div className={styles.container}>
      <main className={styles.App}>
      <Navigation/>
        <Routes>
          <Route path={homePage} element={<HomePage/>}/>
          <Route path={topPage} element={<TopPlaces/>}/>
          <Route path={historyPage} element={<HistoryPage/>}/>
          <Route path={`${attractionsPage}/*`} element={<EntarteimentPage/>}>
            <Route index element={<EntarteimentNavigation/>}/>
            <Route path={bookStoresPage} element={<BookStores/>}/>
            <Route path={`${bookStoresPage}/${dynamicParam}`} element={<ItemDescription/>}/>
            <Route path={cafesPage} element={<Cafes/>}/>
            <Route path={`${cafesPage}/${dynamicParam}`} element={<ItemDescription/>}/>
            <Route path={cinemasPage} element={<Cinemas/>}/>
            <Route path={`${cinemasPage}/${dynamicParam}`} element={<ItemDescription/>}/>
          </Route>
          < Route path={contactsPage} element={<ContactsPage/>}/>
        </Routes>
      </main>
    </div>
  );
}
export default App;