import React from 'react';
import Logo from '../../assets/images/LOGO-SIH1.png'
import '../header/header.css'
// import SearchIcon from '@mui/icons-material/Search';
const Header = () => {

    return (
        <>
            <header className='Header'>
                <div className='top-container'>
                    <div className='logoimg'>
                        <img src={Logo} />

                    <div className='title'>AgroPact</div>
                    </div>

                    {/* header search start here */}
                    <div className='cont'>
                        <div className='headerSearch'>

                            <div className='selectdrop'>
                                All Categories          |

                            </div>
                            <div className='search'>
                                <input type='text' placeholder='Search for farmer produce....' />
                                {/* <SearchIcon/> */}
                            </div>
                        </div>
                    </div>
                    {/* header seatch end here  */}
                    <div className='contents'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href='#'>Help</a></li>
                            <li><a href='#'>More</a></li>
                        </ul>
                    </div>


                </div>
            </header>
        </>
    )

}
export default Header;