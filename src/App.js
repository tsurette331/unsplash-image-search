import React, {Component} from 'react';
import searchImages from './unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    constructor(props) {
        super(props)
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    };

    componentDidMount() {
        this.onSearchSubmit('morning')
    }

   onSearchSubmit = async (term) => {
    const response = await searchImages(term);
        this.setState({ images: response });
    }

    render() {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
    );
    }
};

export default App;