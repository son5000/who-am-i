import Link from "next/link"
import styles from "@/components/author.module.css"

export function Author () {
    return (
        <div className={styles.author}>
            <div>
                <img src="/images/placeholder.png" alt="" />
                <h3>Hanje Son</h3>
                <p>Developer from 🌍 South Korea</p>
                <Link href="/">Contect!</Link>
                <p>모토로 삼는 좌우명 같은거?</p>
            </div>
        </div>
    )
}