import styles from "@/components/header.module.css"

export function Header () {

    return (
        <header className={styles.header}>
            <span>이미지</span>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <a href="/">홈</a>
                    </li>
                    <li>
                        <a href="/">자기소개</a>
                    </li>
                    <li>
                        <a href="/">프로젝트</a>
                    </li>
                    <li>
                        <a href="/">컨택트</a>
                    </li>
                    <li>
                        <a href="/">방명록</a>
                    </li>
                </ul>
            </nav>
            <button>테마전환버튼</button>
        </header>
    )
}