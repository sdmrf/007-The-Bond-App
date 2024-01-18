import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  TextStyle,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TermsAndConditions = ({navigation}: any) => {
  const [accepted, setAccepted] = useState(false);

  const handleScroll = ({nativeEvent}: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      setAccepted(true);
    }
  };

  const handleAcceptance = () => {
    if (accepted) {
      Alert.alert('Terms and conditions accepted');
      AsyncStorage.setItem('termsAccepted', 'true');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and conditions</Text>
      <ScrollView
        style={styles.tcContainer}
        onScroll={({nativeEvent}) => handleScroll({nativeEvent})}>
        {/* ... Terms and conditions content ... */}
        <Text style={styles.tcP}>
          This document outlines the terms and conditions ("Terms") governing
          the use of the educational application ("the App") provided by we
          007-The-Bond. By accessing and using the App, you agree to abide by
          these Terms. If you do not agree with any part of these Terms, you
          should not use the App.
        </Text>

        <Text style={styles.tcL}>
          1. Educational Purpose Only: The App is intended solely for
          educational purposes. Users are expected to use the App in a manner
          consistent with its educational nature.
        </Text>
        <Text style={styles.tcL}>
          2. No Misuse Responsibility: we 007-The-Bond expressly disclaims any
          responsibility for the misuse of the App. Users acknowledge that they
          are solely responsible for any consequences or losses incurred as a
          result of their use of the App for purposes other than educational.
        </Text>
        <Text style={styles.tcL}>
          3. Acknowledgment of Responsibility: By using the App, you acknowledge
          and agree that you will be personally responsible for any loss,
          damage, or legal consequences resulting from your use of the App. we
          007-The-Bond will not be held liable for any such incidents.
        </Text>
        <Text style={styles.tcL}>
          4. Compliance with Applicable Laws: Users must comply with all
          applicable laws and regulations while using the App. Any unlawful or
          prohibited use of the App is strictly prohibited.
        </Text>
        <Text style={styles.tcL}>
          5. Changes to Terms: we 007-The-Bond reserves the right to modify
          these Terms at any time. Users are encouraged to review the Terms
          regularly for updates. Continued use of the App after any changes
          signifies acceptance of the modified Terms.
        </Text>
        <Text style={styles.tcL}>
          6. Termination: we 007-The-Bond reserves the right to terminate access
          to the App at their discretion, without prior notice, if users violate
          these Terms or engage in activities that compromise the educational
          purpose of the App.
        </Text>
        <Text style={styles.tcL}>
          7. Governing Law: These Terms are governed by and construed in
          accordance with the laws of the jurisdiction where we 007-The-Bond
          resides.
        </Text>
        <Text style={styles.tcP}>
          By using the App, you indicate that you have read, understood, and
          agreed to these Terms and Conditions. If you have any questions or
          concerns, please contact us 007-The-Bond at Discord.
        </Text>
      </ScrollView>

      <TouchableOpacity
        disabled={!accepted}
        onPress={handleAcceptance}
        style={accepted ? styles.button : styles.buttonDisabled}>
        <Text style={styles.buttonLabel}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = {
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  } as TextStyle,
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },
  button: {
    backgroundColor: '#136AC7',
    borderRadius: 5,
    padding: 10,
    marginTop: 50,
  },
  buttonDisabled: {
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginTop: 50,
  },
  buttonLabel: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center' as TextStyle['alignSelf'],
  },
};

export default TermsAndConditions;
