import Main from '../Main';
import Sidebar from '../Sidebar';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles['home']}>
    <Sidebar />
    <Main />
  </div>
);

export default Home;
