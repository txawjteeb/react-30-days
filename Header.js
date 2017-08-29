import React from 'react';
import SearchForm from './SearchFormWithSubmit'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }

  Header.defaultProps = {
    title: 'Github activity'
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  submitForm(val) {
    this.props.onSearch(val);
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">
          {this.props.title}
        </span>

        <SearchForm
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSubmit} />

        {/* Adding an onClick handler to call the showSearch button */}
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

Header.propTypes = {
  onSearch: React.PropTypes.func
}

export default Header
