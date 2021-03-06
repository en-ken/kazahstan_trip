import React, {Component} from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import { astanaForecast, almatyForecast, shymkentForecast } from './Forecast';
import WeatherIcon from 'material-ui/svg-icons/image/wb-sunny';
import {grey800 as weatherColor} from 'material-ui/styles/colors';

export default class WeatherInfo extends Component{
  constructor(props) {
    super(props);

    const initState = [
      { date: '', text: '', high: '', low: '' },
      { date: '', text: '', high: '', low: '' },
      { date: '', text: '', high: '', low: '' },
    ];
    this.state = {
      astana: initState,
      almaty: initState,
      shymkent: initState,
    };

    astanaForecast.then(f => {
      this.setState({ astana: f });
    });
    almatyForecast.then(f => {
      this.setState({ almaty: f });
    });
    shymkentForecast.then(f => {
      this.setState({ shymkent: f });
    });
  }

  render() {
    const {
      astana,
      almaty,
      shymkent
    } = this.state;

    const translateWeather = (text) => {
      let newText = '';
      newText += text.includes('Mostly') ? 'ほぼ' : '';
      newText += text.includes('Partly') ? '時々' : '';
      newText += text.includes('Rainy') ? '雨' : '';
      newText += text.includes('Cloudy') ? '曇' : '';
      newText += text.includes('Sunny') ? '晴' : '';
      return newText;
    };

    return (
      <Card style={{ margin: 10 }}>
        <CardHeader
          title='天気'
          avatar={<WeatherIcon color={weatherColor} />}
        />
        <CardText>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>都市</TableHeaderColumn>
                <TableHeaderColumn>{astana[0].date.substr(0, 2)}</TableHeaderColumn>
                <TableHeaderColumn>{astana[1].date.substr(0, 2)}</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} stripedRows={false} >
              <TableRow>
                <TableRowColumn>AST</TableRowColumn>
                <TableRowColumn>{translateWeather(astana[0].text)}<br/>{astana[0].low}℃<br/>{astana[0].high}℃</TableRowColumn>
                <TableRowColumn>{translateWeather(astana[1].text)}<br/>{astana[1].low}℃<br/>{astana[1].high}℃</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn >ALM</TableRowColumn>
                <TableRowColumn>{translateWeather(almaty[0].text)}<br/>{almaty[0].low}℃<br/>{almaty[0].high}℃</TableRowColumn>
                <TableRowColumn>{translateWeather(almaty[1].text)}<br/>{almaty[1].low}℃<br/>{almaty[1].high}℃</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn >SHYM</TableRowColumn>
                <TableRowColumn>{translateWeather(shymkent[0].text)}<br/>{shymkent[0].low}℃<br/>{shymkent[0].high}℃</TableRowColumn>
                <TableRowColumn>{translateWeather(shymkent[1].text)}<br/>{shymkent[1].low}℃<br/>{shymkent[1].high}℃</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );
  }
}
