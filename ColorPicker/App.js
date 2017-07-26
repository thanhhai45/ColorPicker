import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Slider,
  TextInput
} from 'react-native';

export default class ColorPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Color Picker</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 300, height: 350, }}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>R</Text>
                        <Slider style={{ width: 200 }} />
                        <View>
                            <TextInput style={styles.textInput} value="0" />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>G</Text>
                        <Slider style={{ width: 200 }} />
                        <View>
                            <TextInput style={styles.textInput} value="0" />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>B</Text>
                        <Slider style={{ width: 200 }} />
                        <View>
                            <TextInput style={styles.textInput} value="0" />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: { 
        height: 65, 
        backgroundColor: '#ECEFF1', 
        alignItems: 'center', 
        justifyContent: 'center',
        shadowColor: 'red', 
        shadowOffset: { width: 0, height: 3 }, 
        shadowOpacity: 1, 
        elevation: 5 
    },
    headerText: { 
        fontSize: 20, 
        ...Platform.select({
            ios: {
                marginTop: 15
            },
            android: {
                marginTop: 0
            },
        })
    },

    textInput: { 
        width: 50, 
        height: 30, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5, 
        textAlign: 'center',
        ...Platform.select({
            ios: {
                paddingBottom: 0
            },
            android: {
                paddingBottom: 6 
            }
        }) 
        
    }
});
