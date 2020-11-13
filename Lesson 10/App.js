import React from "react";
import Image from "./components/Image";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        { left: 1, mid: 2, right: 3 },
        { left: 4, mid: 5, right: 6 },
        { left: 7, mid: 8, right: 9 },
      ],
    };
  }

  renderTableData() {

    return this.state.datas.map((data, index) => {
      const { left, mid, right } = data;
      return (
        <tr key={index}>
          <Image alt={left} />
          <Image alt={mid} />
          <Image alt={right} />
        </tr>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.datas[0]);
    return header.map((key, index) => (
      <th key={index}> Image Column {index}</th>
    ));
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
