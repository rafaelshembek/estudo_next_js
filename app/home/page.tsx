import banner from "./home.module.css";

export default () => {
    const inform = {
        firstName: "rafael",
        lastName: "Silva.",
        outherInform: ['Web', 'Mobile']
    }
    return (
        <>
            <div className={banner.body}>
                <div className={banner.teste}>
                    <div className={banner.banner}>
                        <h1 className={banner.title}>{inform.firstName}</h1>
                        <h2 className={banner.secondName}>{inform.lastName}</h2>
                        <h3 className={banner.subtitle}>Desenvolvedor {inform.outherInform[0]} & {inform.outherInform[1]}</h3>
                    </div>
                    <div>
                        <a className={banner.email} href="mailto:rafaelsilvagomesreal@gmal.com">rafaelsilvagomesreal@gmal.com</a>
                    </div>
                    <div className={banner.footer}>
                        <code>Desenvolvidor CreativeAgency</code>
                    </div>
                </div>
            </div>
        </>
    )
}