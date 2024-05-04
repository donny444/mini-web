export default function Search() {
    return (
        <div className="search">
            <form action="#">
                <input id="searchbar" type="text" name="search" placeholder="Type some text here" />
                <input id="searchbutton" type="submit" value="Search" />
            </form>
        </div>
    );
}