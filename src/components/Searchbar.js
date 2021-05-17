import React from "react";

class SearchBar extends React.Component {

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.whenUserSubmit(this.state.term);
  }
  

  render() {
    return (
      <div onSubmit={ this.onFormSubmit } className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
