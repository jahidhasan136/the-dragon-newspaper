import React from 'react';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';


const Qzone = () => {
    return (
        <div className='bg-light my-4 py-4 text-center'>
            <h4 className='fw-bold text-secondary'>Qzone</h4>
            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;