import Link from "next/link"
import styles from "@/components/author.module.css"

export function Author () {
    return (
        <div className={styles.author}>
            <div>
                <img src="/images/괴짜손한제.jpg" alt="" />
                <h3>Hanje Son</h3>
                <span>Developer from 🌍 South Korea</span>
                <div>
                    <Link href="/">Contect!</Link>
                </div>
                <p>Try your best rather than be the best. <br /> Nothing ventured, nothing gained. <br /></p>
                <p>최고가 되기보다는 최선을 다할것<br /> 모험하지 않는다면, 얻는 것도 없다.</p>
                <ul>
                    <li>
                        <a href="/">instagram</a>
                    </li>
                    <li>
                        <a href="/">gitgub</a>
                    </li>
                    <li>
                        <a href="/">notion</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}