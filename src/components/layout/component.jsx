import { Header } from '../header/component.jsx';
import { Footer } from '../footer/component.jsx';

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
