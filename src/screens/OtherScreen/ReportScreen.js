

import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableHighlight,Image} from 'react-native'
import { backgroundColor, itemBackgroundColor } from '../../api/constants'
const ReportScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <View style = {styles.content}>
            <Text style = {styles.text}>Content:</Text>
        </View>
          <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
           <TextInput style = {styles.line}
           placeholder={"--------------------------------------------------------------------------------------------"}
          />
         
            <View style={styles.Feedback}>

                    <TouchableHighlight style={styles.BtnFeedback} onPress={() => {
                        navigation.navigate("Feedback")
                    }}>
                        <View style={styles.alignImg}>
                       
                        <Text style={styles.textStyle}>Send </Text>
                        
                        </View>
                    </TouchableHighlight>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: backgroundColor,
    },line:{
        marginLeft:20,
        padding:10,
        color:itemBackgroundColor
    },
    content:{
        marginTop:40
    },text:{
        fontSize:20
    },
    Feedback: {
        marginLeft:10,
    padding: 5,
    width: "95%"
  },
  textStyle: {
    fontSize: 25,
    color: 'black'
  },
  BtnFeedback: {
    backgroundColor: itemBackgroundColor,
    padding: 10,
    borderRadius: 15,
    marginTop: 5
  },
 
  alignImg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
})
export default ReportScreen;


