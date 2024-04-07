import React from 'react'
import MentorData from './MentorData'

const Mentorhub = () => {
    return (
        <div className="menotr_data_main py-8 lg:py-20">
            <div className='grid grid-col-3 gap4'>
                {<MentorData />}
            </div>
        </div>
    )
}

export default Mentorhub
