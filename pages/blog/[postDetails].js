import React from 'react'
import Navbar from '../Components/Navbar'

export const getStaticPaths = async () => {
    const res = await fetch("https://dummyjson.com/posts")
    const data = await res.json();
    const paths = data.posts.map((curElement) => {
        return {
            params: {
                postDetails: curElement.id.toString(),
            },
        }
    })
    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.postDetails;
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json();
    // console.log("data", data)

    return {
        props: {
            data,
        },
    };
};

export default function postDetails({ data }) {

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto mt-5  '>

                <h3 className='text-center font-bold text-xl mt-10'>{data.title}</h3>
                <p className='mt-5'>{data.body}</p>
            </div>

        </div>
    )
}
