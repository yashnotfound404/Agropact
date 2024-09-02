import './homePage.scss';
import Header from './components/header/header';
import BGIMG from '../../assets/images/fieldbg.jpg';

function HomePage() {
    return (
        <>
            <Header />
            <main className='frame'>
                <div className='left-text'>
                    Welcome to AgroPact
                </div>
                <div className='right-img'>
                    <img src={BGIMG} />
                </div>
            </main>
        </>
    )
}

export default homepage;