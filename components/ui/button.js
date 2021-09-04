import Link from "next/link"
import classes from "./button.module.sass"

function Button(props) {
    // if link props is not exist, return a normal button
    if (props.link) {
        return <Link href={props.link}>
            <a className={classes.button}>
                {props.children}
            </a>
        </Link>
    }

    return <button className={classes.button} onClick={props.onClick}>{props.children}</button>
}

export default Button