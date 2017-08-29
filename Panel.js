class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchFilter: '',
      activities: []
    }
  }

  componentDidMount() {this.updateData();}
  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData);
    }
  }

  // handleSearch = txt => {
  //   if (txt === '') {
  //     this.setState({
  //       filtered: this.state.activities
  //     })
  //   } else {
  //     const { activities } = this.state
  //     const filtered = activities.filter(a => a.actor && a.actor.login.match(txt))
  //     this.setState({
  //       filtered
  //     })
  //   }
  // }

  // Call out to github and refresh directory
  updateData() {
    this.setState({loading: true}, this.updateData);
  }

  // ...
  // after the content has refreshed, we want to 
  // reset the loading variable
  onComponentRefresh() {this.setState({loading: false});}

  handleSearch(val) {
    this.setState({
      searchFilter: val,
      loading: true
    });
  }

  render() {
    const {loading} = this.state;
    
    return (
      <div>
        <Header
          onSearch={this.handleSearch.bind(this)} 
          title="Github activity" />
        <Content 
          requestRefresh={loading}
          onComponentRefresh={this.onComponentRefresh.bind(this)}
          fetchData={this.updateData.bind(this)} />
      </div>
    )
  }
}