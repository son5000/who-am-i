import styles from '@/components/container.module.css'
import { Author } from './author'
import { Header } from './header'
import { Content } from './content'
import { Footer } from './footer'
import { Hamburger } from './hamburger'
import { SideMenu } from './sideMenu'

export function Container () {
    return(
        <div className={styles.container}>
            <Author className="author" />
            <Header className="header" />
            <Content className="content" />
            <Footer className="footer" />
            <Hamburger className="hamburger" />
            <SideMenu className="sideMenu" />
        </div>
    )
}