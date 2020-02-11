import React from 'react';
import './Child.css';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>
          Meine name ist {this.props.name}!
        </h1>
        <p>Wählen Sie den Namen unten aus dem Dropdown-Menü</p>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Hadriana">
            Hadriana
          </option>

          <option value="Pio">
            Pio
          </option>

          <option value="Hildegarde">
            Hildegarde
          </option>

          <option value="Romulus">
            Romulus
          </option>

        </select>
      </div>
    );
  }
}