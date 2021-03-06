import React from "react";
import './SearchBar.css'

export class SerchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    handleTermChange(event) {
        this.setState({term: event.target.value});
        this.search();
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist"
                   onChange={this.handleTermChange} />
            <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}