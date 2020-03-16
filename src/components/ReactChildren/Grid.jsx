class Grid extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

const Row = () =>
    <div>Row</div>

export { Grid, Row }
