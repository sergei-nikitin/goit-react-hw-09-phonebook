import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/pb-actions";
import { getFilter } from "../../redux/contacts-selectors";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Filter"
        name="filter"
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
