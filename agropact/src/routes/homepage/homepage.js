import './homePage.scss';
import Header from './components/header/header';
import BGIMG from '../../assets/images/fieldbg.jpg';

function HomePage() {
    return (
        <>
            <Header />
            <main className='contained'>
            <img src={BGIMG} />
            <div className='lowermain'>
                <div className='left-text'>
                    Welcome to AgroPact
                </div>
                <div className='right-img'>
                    {/* placeholder for image*/}
                </div>
            </div>
            </main>
        </>
    )
}

export default homepage;