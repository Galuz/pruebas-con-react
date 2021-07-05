const Home = () => {

    const handleClick = (e) => {
        console.log('hello ninjas', e) 
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Galuz')}>Click me</button>
        </div>
    );
}
 
export default Home;