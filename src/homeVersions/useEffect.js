import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Uno', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'dos', body: 'lorem ipsum...', author: 'Galuz', id: 2 },
        { title: 'tres', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    ])

    const [name, setName] = useState('Mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => { // use efect se ejecuta cada que el sitio de rederiza.
        console.log('use effect ran')
        console.log(blogs)
        console.log(name, 'name')
    }, [name]) // si usas el segundo argumento vacio, solo se ejecutara la primera vez que la pagina se cargue, pero si agregas un valor se ejecutara cada que ese valor cambie. 

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;