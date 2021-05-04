import React from 'react';
import Recommendation from '../components/Recommendation';
import Disclaimer from '../components/Disclaimer';
import {BackHandler} from 'react-native';

const DisclaimerScreen = ({route, navigation}) => {
  return (
    <Disclaimer
      onCancel={() => BackHandler.exitApp()}
      onAccept={() => navigation.navigate('Home')}
    />
  );
};

export default DisclaimerScreen;