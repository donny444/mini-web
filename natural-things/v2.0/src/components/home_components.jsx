import Header from "./header_components"
import Search from "./search_components"
import NavBar from "./navbar_components"
import Footer from "./footer_components"

export default function HomePage() {
    return (
        <>
            <Header />
            <Search />
            <Main />
            <Others />
            <NavBar />
            <Footer />
        </>
    );
}

function Main() {
    return (
        <div className="main">
            <div className="main-text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <br />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus numquam est quod.</h3>
            </div>
        </div>
    );
}

function Others() {
    return (
        <div className="others">
            <div className="other-each">
                <img src="src/assets/bananatree.jpg" alt="Internet required." />
                <ul>
                    <li className="other-each-name">Name</li>
                    <p>Banana Tree</p>
                    <li>Age</li>
                    <li>Color</li>
                    <li>Environment</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id enim animi, qui impedit tenetur.</p>
            </div>
            <div className="other-each">
                <img src="src/assets/coconuttree.jpg" alt="Internet required." />
                <div>
                    <ul>
                        <li className="other-each-name">Name</li>
                        <p>Coconut Tree</p>
                        <li>Age</li>
                        <li>Color</li>
                        <li>Environment</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id enim animi, qui impedit tenetur.</p>
                </div>
            </div>
            <div className="other-each">
                <img src="src/assets/rubbertree.jpg" alt="Internet required." />
                <div>
                    <ul>
                        <li className="other-each-name">Name</li>
                        <p>Rubber Tree</p>
                        <li>Age</li>
                        <li>Color</li>
                        <li>Environment</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id enim animi, qui impedit tenetur.</p>
                </div>
            </div>
            <div className="other-each">
                <img src="src/assets/greennature.jpg" alt="Internet required." />
                <div>
                    <ul>
                        <li className="other-each-name">Name</li>
                        <p>Green Nature</p>
                        <li>Age</li>
                        <li>Color</li>
                        <li>Environment</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id enim animi, qui impedit tenetur.</p>
                </div>
            </div>
        </div>
    );
}