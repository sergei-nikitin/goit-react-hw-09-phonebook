import { React } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/pb-actions";
import { getFilter } from "../../redux/contacts-selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Filter"
        name="filter"
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};
