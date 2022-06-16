import Navigation from './Navigation';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import EntarteimentPage from './EntarteimentPage';
import EntarteimentNavigation from './EntarteimentPage/EntarteimentNavigation';
import ContactsPage from './ContactsPage';
import TopPlaces from './TopPlaces';
import BookStores from './EntarteimentPage/BookStores';
import Caffes from './EntarteimentPage/Caffes';
import Cinemas from './EntarteimentPage/Cinemas';
import ShopDescription from './EntarteimentPage/BookStores/ShopDescription';
import {Routes, Route} from 'react-router-dom';
import routes from '../consts/routes.js';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.App}>
      <Navigation/>
        <Routes>
          <Route path={routes.homePage} element={<HomePage/>}/>
          <Route path={routes.topPage} element={<TopPlaces/>}/>
          <Route path={routes.historyPage} element={<HistoryPage/>}/>
          <Route path={`${routes.attractionsPage}/*`} element={<EntarteimentPage/>}>
            <Route index element={<EntarteimentNavigation/>}/>
            <Route path={`${routes.bookStoresPage}`} element={<BookStores/>}/>
            <Route path={`${routes.bookStoresPage}/${routes.dynamicParam}`} element={<ShopDescription/>}/>
          </Route>
          <Route path={routes.caffesPage} element={<Caffes/>}/>
          <Route path={routes.cinemasPage} element={<Cinemas/>}/>
          < Route path={routes.contactsPage} element={<ContactsPage/>}/>
        </Routes>
      </main>
    </div>
  );
}
export default App;

// function hours(start, end) {
//   return Array(end - start + 1)
//     .fill()
//     .map((_, idx) => start + idx);
// }
