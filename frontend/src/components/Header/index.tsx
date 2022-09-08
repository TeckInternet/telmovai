import logo from '../../acess/img/logo.svg'

import'./styles.css'

function Header() {
    return (
        <header>
            <div className ="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>RSVIRTUAL&</h1>
                <p>
                    DESENVOLVIDO POR RS.VIRTUAL
                    <a href="https://wa.me/message/6RFJZRKWCXQQK1"></a>
                </p>
            </div>
        </header>

    )

}

export default Header