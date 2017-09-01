import React, {Component} from 'react';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import MoneyIcon from 'material-ui/svg-icons/editor/monetization-on';
import {grey800 as currencyColor} from 'material-ui/styles/colors';


export default class CurrencyRate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USD_KZT: 300.00,
      JPY_KZT: 3.00,
      USD: 1.00,
      KZT: 300,
      JPY: 300.00/3.00,

      isUsdKztFetched: false,
      isJpyKztFetched: false,
    };

    this.validate = this.validate.bind(this);
    this.setCurrency = this.setCurrency.bind(this);

    this.fetchCurrencyRate('USD', 'KZT');
    this.fetchCurrencyRate('JPY', 'KZT');
  }


  render() {
    const resultText = () => 
      this.state.isJpyKztFetched && this.state.isUsdKztFetched ?
        '最新レートを取得しました。':
        '';

    return (
      <Card style={{ margin: 10 }}>
        <CardHeader
          title='通貨レート'
          subtitle={resultText()}
          avatar={<MoneyIcon color={currencyColor} />}
        />
        <CardText>
          <TextField
            floatingLabelText="KZT"
            value={this.state.KZT}
            onChange={this.KZTChanged.bind(this)}
            floatingLabelFixed={true}
          />
          <br />
          <TextField
            floatingLabelText="USD"
            value={this.state.USD}
            onChange={this.USDChanged.bind(this)}
            floatingLabelFixed={true}
          />
          <TextField
            floatingLabelText="JPY"
            value={this.state.JPY}
            onChange={this.JPYChanged.bind(this)}
            floatingLabelFixed={true}
          />
        </CardText>
      </Card>
    );
  }

  fetchCurrencyRate(from, to) {
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("${from}${to}")&format=json&env=store://datatables.org/alltableswithkeys`;
    //const url = `https://www.google.com/finance/converter?a=1&from=${from}&to=${to}`;
    fetch(url, {mode: 'cors'})
      .then(resp => {
        resp.json()
          .then(json => {
            const {
              query: {
                results: {
                  rate: {
                    Rate
                  }
                }
              }
            } = json;
            const rate = parseFloat(Rate);

            switch (`${from}_${to}`) {
            case 'USD_KZT':
              this.setState({ USD_KZT: rate });
              this.setState({ isUsdKztFetched: true });
              break;
            case 'JPY_KZT':
              this.setState({ JPY_KZT: rate });
              this.setState({ isJpyKztFetched: true });
              break;
            default:
              break;  
            }
            this.setCurrency(1);
          });
      });
  }

  KZTChanged(event, val) {
    if (!this.validate(val)) {
      this.setCurrency(1);
      return;
    }

    this.setState({ KZT: val });
    this.setState({ USD: val/this.state.USD_KZT });
    this.setState({ JPY: val/this.state.JPY_KZT });
  }

  USDChanged(event, val) {
    if (!this.validate(val)) {
      this.setCurrency(1);
      return;
    }

    this.setState({ USD: val });
    this.setState({ KZT: val*this.state.USD_KZT });
    this.setState({ JPY: this.state.KZT/this.state.JPY_KZT });
  }

  JPYChanged(event, val) {
    if (!this.validate(val)) {
      this.setCurrency(1);
      return;
    }

    this.setState({ JPY: val });
    this.setState({ KZT: val*this.state.JPY_KZT });
    this.setState({ USD: this.state.KZT/this.state.USD_KZT });
  }

  validate(val) {
    if (!val.match(/^[0-9\\.]+$/)) {
      return false;
    }
    return true;
  }

  setCurrency(usd) {
    this.setState({ USD: usd });
    this.setState({ KZT: usd*this.state.USD_KZT });
    this.setState({ JPY: this.state.KZT/this.state.JPY_KZT });
  }
}

