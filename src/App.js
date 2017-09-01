import React, { Component } from 'react';
import DayCard from './DayCard';
import MovingSchedule from './MovingSchedule';
import StayPlace from './StayPlace';
import CurrencyRate from './CurrencyRate';
import WeatherInfo from './WeatherInfo';

class App extends Component {
  render() {
    return (
      <div>
        <CurrencyRate/>
        <WeatherInfo/>
        <DayCard
          date='9/2(SAT)'
          schedule='出国日'
          event='flight'
          summary='12:00 成田第一ターミナル集合'
          content={
            <div>
              <MovingSchedule
                service='アシアナ航空103'
                totalTime='2h30m'
                depTime='13:50'
                depPort='東京(NRT)'
                arrTime='16:20'
                arrPort='ソウル(ICN)'
              />
              <MovingSchedule
                service='アシアナ航空579'
                totalTime='7h10m'
                depTime='18:25'
                depPort='ソウル(ICN)'
                arrTime='22:35'
                arrPort='アスタナ(TSE)'
              />
              <StayPlace
                name='3-х комн. квартира с шикарным видом'
                url='https://www.airbnb.jp/rooms/9210141?eluid=0&euid=0a08511e-9ee0-9c6e-0bbd-5457ba95b743'
              />
            </div>
          }
        />  
        <DayCard
          date='9/3(SUN)'
          schedule='アスタナ'
          event='stay'
          summary='一日フリー'
        />  
        <DayCard
          date = '9/4(MON)'
          schedule = 'アスタナ'
          event = 'stay'
          summary='一日フリー'
        />  
        <DayCard
          date = '9/5(TUE)'
          schedule = '移動日'
          event = 'flight'
          summary ='アスタナからシムケントへ'
          content={
            <div>
              <MovingSchedule
                service = 'エアアスタナ854'
                totalTime ='1h40m'
                depTime ='15:40'
                depPort ='アスタナ(TSE)'
                arrTime ='17:20'
                arrPort ='アルマティ(ALA)'
              />
              <MovingSchedule
                service = 'SCAT航空706'
                totalTime ='1h10m'
                depTime ='20:55'
                depPort ='アルマティ(ALA)'
                arrTime ='22:05'
                arrPort ='シムケント'
              />
              <StayPlace
                name='Symkent Hotel'
                url = 'https://www.booking.com/hotel/kz/shymkent.ja.html'  
              />
            </div>
          }
        />  
        <DayCard
          date = '9/6(WED)'
          schedule = 'シムケント（寝台車泊）'
          event = 'rail'
          summary ='シムケントを見て寝台列車でアルマティへ'
          content={
            <MovingSchedule
              service = 'カザフスタン鉄道012X(予定)'
              totalTime ='11h30m'
              depTime ='22:01'
              depPort ='シムケント駅'
              arrTime ='9:30'
              arrPort ='アルマティ2駅'
            />
          }
        />  
        <DayCard
          date = '9/7(THU)'
          schedule = 'アルマティ着'
          event = 'stay'
          summary='一日フリー'
          content={
            <StayPlace
              name='Mildom Premium Hotel'
              url = 'https://www.booking.com/hotel/kz/mildom-premium.ja.html'  
            />
          }
        />  
        <DayCard
          date = '9/8(FRI)'
          schedule = 'アルマティ'
          event = 'stay'
          summary ='一日フリー'
        />  
        <DayCard
          date = '9/9(SAT)'
          schedule = '移動日'
          event = 'flight'
          summary ='帰国日'
          content={
            <div>
              <MovingSchedule
                service = 'エアアスタナ959'
                totalTime = '5h40m'
                depTime = '23:55'
                depPort = 'アルマティ(ALA)'
                arrTime = '8:35'
                arrPort = 'ソウル(ICN)'
              />
              <MovingSchedule
                service = 'アシアナ航空104'
                totalTime = '2h20m'
                depTime = '10:00'
                depPort = 'ソウル(ICN)'
                arrTime = '12:20'
                arrPort = '東京(NRT)'
              />
            </div>
          }
        />  
      </div>
    );
  }
}

export default App;
