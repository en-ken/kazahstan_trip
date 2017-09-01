import React from 'react';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import FlightIcon from 'material-ui/svg-icons/maps/flight';
import TrainIcon from 'material-ui/svg-icons/maps/train';
import CityIcon from 'material-ui/svg-icons/social/location-city';
import {
  grey800 as stayColor,
  red400 as moveColor,
  grey100 as bgColor
} from 'material-ui/styles/colors';

const DayCard = (props) => {
  const {
    date,
    schedule,
    event,
    summary,
    content,
  } = props;
  const expandable = content !== undefined;

  const getIcon = (e) => {
    switch(e){
    case 'flight':
      return <FlightIcon color={moveColor} />;
    case 'rail':
      return <TrainIcon color={moveColor} />;
    default:
      return <CityIcon color={stayColor} />;
    }
  };

  return (
    <Card style={{ margin: 10 }}>
      <CardHeader
        title={date}
        subtitle={schedule}
        avatar={getIcon(event)}
        actAsExpander={expandable}
        showExpandableButton={expandable}
        style={{ backgroundColor: bgColor }}
      />
      <CardText
        style={{ backgroundColor: bgColor }}
        actAsExpander={true}
      >
        {summary}
      </CardText>
      if({expandable}){
        <CardText
          expandable={true}
          style={{ backgroundColor: bgColor }}
        >
          {content}
        </CardText>
      }
    </Card>
  );
};

export default DayCard;