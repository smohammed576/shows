import Header from "./Header";

function GuestLayout({children}){
    return(
        <>
            <Header class="header"/>
            <main className="main">
                {children}
            </main>
        </>
    );
}

export default GuestLayout;