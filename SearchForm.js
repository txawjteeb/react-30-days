class SearchForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    searchVisible: React.PropTypes.bool
  }
  // ...
  static defaultProps = {
    onSubmit: () => {},
    searchVisible: false
  }

  updateSearchInput(e) {
    const val = e.target.value;
    this.setState({
      searchText: val
    });
  }
  
  // ...
  submitForm(event) {
    // prevent the form from reloading the entire page
    event.preventDefault();
    // call the callback with the search value
    this.props.onSubmit(this.state.searchText);
  }
  // ...
  render() {
    const { searchVisible } = this.props;
    let searchClasses = ['searchInput']
    if (searchVisible) {
      searchClasses.push('active')
    }

    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input
          type="search"
          className={searchClasses.join(' ')}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search ..." />
      </form>
    );
  }
}