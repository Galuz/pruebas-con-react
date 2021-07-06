import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Uno', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'dos', body: 'lorem ipsum...', author: 'Galuz', id: 2 },
        { title: 'tres', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs'/>
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Mario')} title="Mario's blogs"/>
        </div>
    );
}
 
export default Home;