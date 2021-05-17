import React from "react";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import Searchbar from './Searchbar';

class App extends React.Component {
    state = { images: [] };

     onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
        params : {
            query: {term}
        },
    })
    this.setState({ images: response.data.results })
}
    render() {
        return (
            <div className="ui container" style={{ marginTop:'10px' }}>
                <Searchbar whenUserSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;
