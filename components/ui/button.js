import Link from "next/link"
import classes from "./button.module.sass"

function Button(props) {
    return <Link href={props.link}>
        <a className={classes.button}>
            {props.children}
        </a>
    </Link>
}

export default Button