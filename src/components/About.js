import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import mccullum from './images/homepage/homepage.jpg'


function About() {
    let [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`* [_type = "author"]{
            name,
            bio,
            "authorImage" : Image.asset = 
        }`)
            .then(data => setAuthor(data[0]))
            .catch(console.log(Error))
    }, [])

    if (!author) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={mccullum} alt="mccullum all-rounder" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounder-lg shadow-2xl lg:flex p-20"> 
                    {/* <img src={urlFor(aothor.authorImage).url()} /> */}
                    <div>
                        <h1>Hello author</h1>
                        <div>
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default About
