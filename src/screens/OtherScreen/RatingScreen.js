import React,{useState} from 'react';
import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
import {backgroundColor} from '../../api/constants'
function Rating() {
    const [defaultRaing, setdefaultRaing] = useState(2);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5]);
    const startImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    const CustomRatingBar = ()=>{
        return (
          <View style = {styles.CustomRatingBarStyle}>
               {
                    maxRating.map((item,key)=>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=>setdefaultRaing(item)}
                            >
                            <Image
                                style = {styles.startImgStyle}
                                source={ 
                                    item <= defaultRaing
                                    ?{uri:startImgFilled}
                                    :{uri:starImgCorner}
                                }
                            />
                            </TouchableOpacity>
                        )
                     })
               }
          </View>
        )
    }
    return (
        <View style = {styles.container}>
        <Text style = {styles.textStyle}> Please Rate us</Text>
            <CustomRatingBar/>
            <Text style={styles.textStyle}>{defaultRaing +' / ' + maxRating.length}</Text>
            <TouchableOpacity
            activeOpacity={0.7}
            style = {styles.ButtonStyle}
            onPress={()=> alert("thank you for rating")}
            >
            <Text style= {styles.textStyle1}>Get select value</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    padding:10,
    justifyContent:"center"
},
textStyle:{
    textAlign:"center",
    fontSize:23,
    marginTop:30
},
textStyle1:{
    textAlign:"center",
    fontSize:23,
},
CustomRatingBarStyle:{
    justifyContent:"center",
    flexDirection:"row",
    marginTop:30
},
startImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover'
},
ButtonStyle:{
    marginTop:10,
    backgroundColor:backgroundColor,
    padding:15,
    marginTop:30
}
})
export default Rating;