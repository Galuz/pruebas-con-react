import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Uno', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'dos', body: 'lorem ipsum...', author: 'Galuz', id: 2 },
        { title: 'tres', body: 'lorem ipsum...', author: 'Daniela', id: 3 },
    ])
    return (
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;