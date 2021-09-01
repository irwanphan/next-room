import Link from "next/link";
import classes from "./main-header.module.css"

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">the qwe</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <Link href="/events">all events</Link>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader