import "./App.css";
import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        { Company: "Alfreds Futterkiste", Contact: "Maria Anders", Country: "Germany" },
        { Company: "Centro comercial Moctezuma", Contact: "Francisco Chang", Country: "Mexico" },
        { Company: "Ernst Handel", Contact: "Roland Mendel", Country: "Austria" },
        { Company: "Island Trading", Contact: "Helen Bennett", Country: "UK" },
        { Company: "Laughing Bacchus Winecellars", Contact: "Yoshi Tannamuri", Country: "Canada" },
        { Company: "Magazzini Alimentari Riuniti", Contact: "Giovanni Rovelli", Country: "Italy" },
      ],
    };
  }

  renderTableData() {
    return this.state.companies.map((company, index) => {
      const { Company, Contact, Country } = company;
      return (
        <tr key={index}>
          <td>{Company}</td>
          <td>{Contact}</td>
          <td>{Country}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.companies[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    );
  }
}

export default App;
