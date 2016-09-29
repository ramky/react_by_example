var RecentChangesTable = React.createClass({
  render: function() {
    return <table className="table">{this.props.children}</table>;
  }
});

RecentChangesTable.Heading = React.createClass({
  render: function() {
    return <th>{this.props.heading}</th>
  }
});

RecentChangesTable.Headings = React.createClass({
  render: function() {
    var headings = this.props.headings.map(function(name, i) {
      return <RecentChangesTable.Heading key={i} heading={name} />;
    });
    return <thead><tr>{headings}</tr></thead>;
  }
});

RecentChangesTable.Row = React.createClass({
  render: function() {
    return <tr>
             <td>{this.props.changeSet.when}</td>
             <td>{this.props.changeSet.who}</td>
             <td>{this.props.changeSet.description}</td>
           </tr>;
  }
});

RecentChangesTable.Rows = React.createClass({
  render: function() {
    var rows = this.props.changeSets.map(function(changeSet, i) {
      return(<RecentChangesTable.Row key={i} changeSet = {changeSet}/>);
    });
    return <tbody>{rows}</tbody>;
  }
});


var App = React.createClass({
  render: function() {
    return <RecentChangesTable>
             <RecentChangesTable.Headings headings = {this.props.headings} />
             <RecentChangesTable.Rows changeSets = {this.props.changeSets} />
           </RecentChangesTable>
    }
});

var headings = ['When', 'Who', 'Description'];
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

ReactDOM.render(<App headings = {headings} changeSets = {data} />,
  document.getElementById('app'));

