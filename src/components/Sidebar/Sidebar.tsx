import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <aside className={styles['sidebar']}>
    <h2 className={styles['sidebar__title']}>Tools</h2>
    <div className={styles['tools']}>
      <div className={styles['tools__item']}>Text</div>
      <div className={styles['tools__item']}>Image</div>
    </div>
  </aside>
);

export default Sidebar;
