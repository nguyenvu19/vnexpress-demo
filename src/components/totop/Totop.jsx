import React from 'react'
import './totop.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
const Totop = ({ scroll }) => {
    let ele = <></>
    if (scroll >= 150)
        ele = (
            <div
                className="totop"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ArrowUpwardIcon />
            </div>
        )
    return ele
}

export default Totop
