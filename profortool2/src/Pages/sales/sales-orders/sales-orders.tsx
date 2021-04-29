import { Typography } from '@material-ui/core'

import styles from './sales-orders.module.scss'

const SalesOrders = () => {
    return (
        <div className={styles.sales}>
            <Typography variant='h1'>Sales orders!</Typography>
        </div>
    )
}

export default SalesOrders;