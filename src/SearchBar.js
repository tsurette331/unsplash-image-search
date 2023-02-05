import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
    super(props)
  this.state = { term: '' };
    }

  onFormSubmit = (event) => {
event.preventDefault();

this.props.onSubmit(this.state.term);
  }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}  
                    />
                    <button className='ui button'><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;