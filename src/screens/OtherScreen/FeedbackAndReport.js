
import React from 'react'
import {Text,View,StyleSheet,TouchableHighlight,Image} from 'react-native'
import { backgroundColor,itemBackgroundColor } from '../../api/constants'
const FeedbackAndReportScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style={styles.Feedback}>

          <TouchableHighlight style={styles.BtnFeedback} onPress={() => {
            navigation.navigate("Feedback")
          }}>
            <View style={styles.alignImg}>
              <Image source={require('../../../assets/image/feedback.png')}
                style={styles.img} />
              <Text style={styles.text}>Send feedback</Text>
             
            </View>
          </TouchableHighlight>
        </View>

         <View style={styles.Feedback}>

          <TouchableHighlight style={styles.BtnFeedback} onPress={() => {
            navigation.navigate("Report")
          }}>
            <View style={styles.alignImg}>
              <Image source={require('../../../assets/image/settings.png')}
                style={styles.img} />
              <Text style={styles.text}>Report Bugs</Text>
            </View>
          </TouchableHighlight>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    alignItems: "center",
    flex: 1,
    backgroundColor: backgroundColor,
    width: "100%"
    },
Feedback: {
    padding: 5,
    width: "95%"
  },
  text: {
    fontSize: 25,
    color: 'black'
  },
  BtnFeedback: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  alignImg: {
    flexDirection: "row",
    alignItems: "center"
  },
})
export default FeedbackAndReportScreen;

