import Header from "./header_components";
import Search from "./search_components";
import NavBar from "./navbar_components";
import Footer from "./footer_components";

export default function ContactPage() {
    return (
        <>
            <Header />
            <Search />
            <Contact />
            <NavBar />
            <Footer />
        </>
    );
}

function Contact() {
    return (
        <div className="form">
            <form>
                <label>Your name:</label><br />
                <input type="text" placeholder="Enter your contact name" required /><br />
                <label>Your email address:</label><br />
                <input type="email" placeholder="Enter you email" required /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}