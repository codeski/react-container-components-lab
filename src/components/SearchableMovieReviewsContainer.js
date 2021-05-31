import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }
    
    componentDidMount() {
        
        
    }

    handleChange = (e) => {
        this.setState(
            {
                searchTerm: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(moviesInfo => this.setState({ reviews: moviesInfo.results }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.searchTerm}></input>
                    <input type="submit"></input>
                </form>
            
                <div className="searchable-movie-reviews">

                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
        
    }
}

export default SearchableMovieReviewsContainer
