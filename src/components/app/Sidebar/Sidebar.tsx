import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToolsType } from '../../../types';
import Card from '../../common/Card';
import styles from './Sidebar.module.scss';
import { faImagePortrait, faFileText } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <aside className={styles['sidebar']}>
    <h2 className={styles['sidebar__title']}>Tools</h2>
    <div className={styles['tools']}>
      <Card type={ToolsType.input}>
        <span>
          <FontAwesomeIcon icon={faFileText} /> Text
        </span>
      </Card>
      <Card type={ToolsType.image}>
        <span>
          <FontAwesomeIcon icon={faImagePortrait} /> Image
        </span>
      </Card>
    </div>
  </aside>
);

export default Sidebar;
