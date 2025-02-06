import styles from "@/components/content.module.css"

export function Content () {
    return (
        <div className={styles.content}>
            <h1>안녕하세요들송? <br /> <span>개발자</span> 취준생 나부랭이입니다.<br />
                My dream is <span>Developer</span>, But I don't like coding,
                you know? <span>イ・スンシン将軍</span>
            </h1>
        </div>
    )
}