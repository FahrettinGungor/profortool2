import Header from '../../Components/Header/Header'
import routes from '../../Routes';

const Home = () => {
    return (
        <div>
            <Header listItems={routes}></Header>
        </div>
    )
}

export default Home;