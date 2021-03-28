import { React, Component } from "react";
import styles from "../form/Form.module.css";
import shortid from "shortid";
import { connect } from "react-redux";
import { patchContact } from "../../redux/pb-operations";

class ModalForm extends Component {
  state = {
    name: "",
    number: "",
    id: this.props.id,
  };

  modalInputNameId = shortid.generate();
  modalInputNumberId = shortid.generate();

  handleCenge = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onPatchContact(
      this.state.id,
      this.state.name,
      this.state.number
    );
    this.setState({ name: "" });
    this.setState({ number: "" });
    this.setState({ id: "" });
    this.props.toogleModal();
  };

  render() {
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            className={styles.label}
            htmlFor={this.modalInputNameId}
            name="name"
          >
            Name
          </label>
          <input
            className={styles.input}
            id={this.modalInputNameId}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter Name"
            onChange={this.handleCenge}
          ></input>

          <label
            className={styles.label}
            htmlFor={this.modalInputNumberId}
            name="number"
          >
            Number
          </label>
          <input
            className={styles.input}
            id={this.modalInputNumberId}
            type="phone"
            value={this.state.number}
            name="number"
            placeholder="Enter Number"
            onChange={this.handleCenge}
          ></input>

          <button className={styles.addBtn} type="submit">
            Patch
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPatchContact: (id, name, number) =>
    dispatch(patchContact(id, name, number)),
});

export default connect(null, mapDispatchToProps)(ModalForm);
