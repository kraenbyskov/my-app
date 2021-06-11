import React from 'react'
import Container from '../components/Container'





function Home(props) {


    return (
        <Container color="orange" fullwidth={true}>
            <div>
                <h1>Home</h1>
                <button onClick={() => props.setCategori("popular")}>popular</button>
                <button onClick={() => props.setCategori("top_rated")}>top rated</button>
                <button onClick={() => props.setCategori("upcoming")}>upcoming</button>
                {props.movieState ? props.movieState.results.map((movies, index) => (
                    <p key={index}>{movies.title}</p>
                )) : null}
            </div>
        </Container>
    )
}

export default Home
