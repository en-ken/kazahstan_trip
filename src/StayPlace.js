import React from 'react';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import HotelIcon from 'material-ui/svg-icons/maps/hotel';
import {grey800 as stayColor} from 'material-ui/styles/colors';

const StayPlace = (props) => (
  <Card>
    <CardHeader
      title='宿泊先'
      avatar={<HotelIcon color={stayColor} />}
    />
    <CardText>
      <FlatButton
        primary={true}
        label={props.name}
        href={props.url}
        target="_blank"
      />
    </CardText>
  </Card>
);

export default StayPlace;