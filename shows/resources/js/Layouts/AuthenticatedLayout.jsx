import Header from "./Header";

function AuthenticatedLayout({children}){
    return(
        <>
            <Header class="header"/>
            <main className="main">{children}</main>
        </>
    )
}

export default AuthenticatedLayout;