var data = [
  {
    "when": "2 minutes ago",
    "who": "Jill Dupre",
    "description": "Created new account"
  },
  {
    "when": "1 hour agao",
    "who": "Lose White",
    "description": "Added first chapter"
  },
  {
    "when": "2 hours ago",
    "who": "Jordan Whash",
    "description": "Created new account"
  }
];

var App = React.createClass({
  render: function(){
    var headings = this.props.headings.map(function(heading, i) {
      return(
          <th key={i}>
            {heading}
          </th>
      );
    });

    var rows = this.props.data.map(function(row, i){
      return(
        <tr key={i}>
          <td> {row.when} </td>
          <td> {row.who} </td>
          <td> {row.description} </td>
        </tr>
      );
    });

    return(
      <div>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>
            <tr>
              {headings}
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

var headings = [ 'Last updated at', 'By Author', 'Summary' ]
var title = "Recent changes";
ReactDOM.render(<App headings={headings} data={data} title={title} />, document.getElementById('app'));
