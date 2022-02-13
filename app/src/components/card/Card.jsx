import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import "./Card.css"

const Card = ({ task }) => {
    return (
        <>
            <div className="card">
                <div className="title">
                    <div className='note center'>
                        <FontAwesomeIcon className="icon" icon={solid("barcode")} />
                        <span>{task.title}</span>
                    </div>

                    <div className='date center'>
                        <FontAwesomeIcon className="icon" icon={regular("calendar")} />
                        <span>{task.date}</span>
                    </div>
                </div>
                <div className="address">
                    <div className="from center">
                        <label>De: </label>
                        <span>{task.address.from}</span>
                    </div>
                    <div className="to center">
                        <label>Para:</label>
                        <span>{task.address.to}</span>
                    </div>
                </div>
                <div className="values">
                    <div className="money center">
                        <FontAwesomeIcon className="icon" icon={solid("dollar")} />
                        <span>R$&nbsp;{task.values.money}</span>
                    </div>
                    <div className="box center">
                        <FontAwesomeIcon className="icon" icon={solid("box")} />
                        <span>{task.values.weight}&nbsp;kg</span>
                    </div>
                    <div className="boxes center">
                        <FontAwesomeIcon className="icon" icon={solid("boxes")} />
                        <span>{task.values.charge}&nbsp;m<sup>3</sup></span>
                    </div>
                    {task.file ?
                        <div className="boxes center">
                            <FontAwesomeIcon className="icon" icon={solid("file")} />
                            <span>{task.fileContent}</span>
                        </div>
                        :
                        <div className="boxes center">
                            <FontAwesomeIcon className="icon" icon={solid("ban")} />
                            <span>{task.fileContent}Dacte</span>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Card;

