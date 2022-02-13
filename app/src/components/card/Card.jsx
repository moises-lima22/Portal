import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import "./Card.css"

function Card() {
    return (
        <>
            <div className="card">
                <div className="title">
                    <div className='note center'>
                        <FontAwesomeIcon className="icon" icon={solid("barcode")} />
                        <span>C-1223456</span>
                    </div>

                    <div className='date center'>
                        <FontAwesomeIcon className="icon" icon={regular("calendar")} />
                        <span>15/10/2020 15:00</span>
                    </div>
                </div>
                <div className="address">
                    <div className="from center">
                        <label>De: </label>
                        <span>Rua Santa Virginia, 112 - Guarulhos/SP</span>
                    </div>
                    <div className="to center">
                        <label>Para:</label>
                        <span>Rua Geraldo, 11 - Arujá/SP</span>
                    </div>
                </div>
                <div className="values">
                    <div className="money center">
                        <FontAwesomeIcon className="icon" icon={solid("dollar")} />
                        <span>45.000</span>
                    </div>
                    <div className="box center">
                        <FontAwesomeIcon className="icon" icon={solid("box")} />
                        <span>300,4 t</span>
                    </div>
                    <div className="boxes center">
                        <FontAwesomeIcon className="icon" icon={solid("boxes")} />
                        <span>200 m^3</span>
                    </div>
                    <div className="boxes center">
                        <FontAwesomeIcon className="icon" icon={solid("ban")} />
                        <span>200 m^3</span>
                    </div>
                    <div className="boxes center">
                        <FontAwesomeIcon className="icon" icon={solid("file")} />
                        <span>200 m^3</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;

