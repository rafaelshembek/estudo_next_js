import Link from "next/link";
import teste from "./nav.module.css";


export default () => {

    return(
        <>
            <nav className={teste.navPrincipal}>
                {/* <Link href={"/"}>Inicio | </Link> */}
                <Link href={"/home"}>Home | </Link>
                <Link href={"/servicos"}>Serviços</Link>
            </nav>
        </>
    )
}