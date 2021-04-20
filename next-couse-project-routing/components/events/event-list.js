import EventItem from "./event-item";

import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((each) => (
        <EventItem key={each.id} {...each} />
      ))}
    </ul>
  );
};

export default EventList;
