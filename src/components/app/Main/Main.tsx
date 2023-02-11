import styles from './Main.module.scss'
import WorkArea from './WorkArea';

const Main = () => (
    <main className={styles.main}>
        <h1>Work area</h1>
        <WorkArea />
    </main>
);

export default Main;
