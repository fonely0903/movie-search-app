import Header from './Header';
import style from './Layout.module.css';

const Layout = (props) => {
    return(
        <div>
            <Header />
            <main className={style.main}>
                {props.children}
            </main>
        </div>
        
    )
}

export default Layout;