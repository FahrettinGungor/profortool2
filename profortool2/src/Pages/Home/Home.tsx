import Menu from '../../components/menu/menu'
import routes from '../../routes';

import styles from './home.module.scss'

const Home = () => {
    return (
        <div>
            <div className={styles.menu}><Menu></Menu></div>
            {/* <div className={styles.header}><Header listItems={routes} ></Header></div> */}
        </div>
    )
}

export default Home;