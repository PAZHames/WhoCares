import classes from "./Group.module.css";

export default function Group({ id, name, borough, members }) {
  return (
    <div className={classes["group-container"]}>
      <h3>{name}</h3>
        <div className={classes["group-details"]}>
          <div>
            <h6>Borough</h6>
            <div>{borough}</div>
          </div>
          <div>
            <h6>Members</h6>
            <div>{members.length}</div>
          </div>
        </div>
        <button className={classes["group-join-button"]}>Join Group!</button>
    </div>
  );
}
