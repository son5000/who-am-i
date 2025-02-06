import styles from "@/components/header.module.css"
import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react"

export function Header () {

    const { theme , setTheme } = useTheme();

    function changeTheme () {
        return active ? setTheme('light') : setTheme('dark');
    }

    const [ active, setActive ] = useState(false);

    function handleClick  () {
        setActive(!active);
        changeTheme();
    }

    console.log(active,theme);

    return (
        <header className={styles.header}>
            <span>이미지</span>
            <nav>
                <ul>
                    <li>
                        <a href="/">About Me</a>
                    </li>
                    <li>
                        <a href="/">Education</a>
                    </li>
                    <li>
                        <a href="/">Project</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">Guestbook</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button
                    className={active ? styles.active : ""}  
                    onClick={() => handleClick()}>
                    Thema
                </button>
            </div>
        </header>
    )
}