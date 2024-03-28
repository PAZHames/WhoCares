import classes from "./GroupsContainer.module.css";
import { GroupsInfo } from "../info/groups-info";
import Group from "./Group";

export default function GroupsContainer() {
  const groups = GroupsInfo.map((group) => (
    <Group
      id={group.id}
      key={group.id}
      name={group.name}
      borough={group.borough}
      members={group.members}
    />
  ))

  return (
    <div className={classes["groups-container"]}>
      {groups}
    </div>
  );
}
