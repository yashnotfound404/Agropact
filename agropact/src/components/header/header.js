import React from 'react';
import '../header/header.css'
import Logo from '../../assets/images/LOGO-SIH1.png'
const Header =()=>{
    return(
        <>
        <header>
            <div className='top-container'>
                <div className='row'> 
                    <div className='col-sm-2'>
                        <img src={Logo} />
                    </div>

                    {/* header search start here */}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-item-center'>



                        </div>
                    </div>
                    {/* header seatch end here  */}

                </div>

            </div>
        </header>
        </>
    )

}