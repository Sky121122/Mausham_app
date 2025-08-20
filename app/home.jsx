import { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { fetchApi, fetchAstro } from "../src/api/api";
import { Icons } from "../src/constants";
import { Styles } from "../src/stylesheet/style";


const Home = () => {
// const [shown, setShown] = useState(false);
const [forCast, setForCast] = useState({}); 
const [dayForcast, setDayForcast] = useState([])
const [country, setCountry] = useState("");
const [loc, setLoc]= useState("Bihar");

const [sunRise, setSunRise] = useState({});
    // ------------ handle searcch icon -------
    const handleSearch = () =>{
        setLoc(country);
    }

    useEffect(()=>{        
        fetchApi(loc).then((data)=>{
            if(data){
                setForCast(data)
                setDayForcast( data.forecast)
               
            }
        });   
        
        fetchAstro(loc).then((data)=>{
            if(data){
                setSunRise(data)
            }
        });

    },[loc]);

    const {current , location } = forCast;
    const {astronomy} = sunRise;
  return (
  <View style={Styles.container}>
    <StatusBar barStyle={"light"}></StatusBar>
        <Image blurRadius={30} style={Styles.bg} source={require("../assets/images/bg.jpg")}></Image>

        <SafeAreaView>
            {/* ----------- seacrh box -----------------  */}
           <View style={Styles.searchBox} >
            <View style={{width:"300"}}>
                         <TextInput placeholderTextColor={"white"} placeholder="Enter Location" style={Styles.input} value={country} onChangeText={(text)=>setCountry(text)} >
                         </TextInput>
            </View>
            <View style={{justifyContent:"center",alignItems:"center", height:"100%", width:"100", backgroundColor:"none"}}>
                <TouchableOpacity onPress={handleSearch}>
                 <FontAwesome name="search" size={40} color={"white"}></FontAwesome>
                </TouchableOpacity>
            </View>
           </View>
            {/* ---------- main icons design ---------------  */}
            <View style={Styles.countyName}>
                <Text style={{color:"white", fontSize:24}}>
                   {location?.name}, {location?.country}</Text>
            </View>

            <View style={Styles.mainIcon}>
                <Image style={{height:160, width:160, marginTop:40}} source={Icons[current?.condition?.text]}></Image>
                <Text style={{color:"white", marginTop:40, fontSize:30, fontWeight:"bold"}}>
                
                   {current?.temp_c}°c</Text>
                <Text style={{color:"white", marginTop:10, fontSize:20}}>{current?.condition.text}</Text>

              </View>
                {/* -------- all info ----------- */}
            <View style={Styles.info}>
                <View style={{flexDirection:"row",justifyContent:"space-between", width:"100%",display:"flex", paddingHorizontal:15}}>
                    <Image style={{height:50, width:50}} source={require("../assets/icons/windy_climate_forecast_storm_icon.png")}></Image>
                    <Image style={{height:50, width:50}} source={require("../assets/icons/drop_high_humidity_percentage_precipitation_icon.png")}></Image>
                    <Image style={{height:50, width:50}} source={require("../assets/icons/Clear.png")}></Image>
                    <Image style={{height:50, width:50}} source={require("../assets/icons/sunset.png")}></Image>
                </View>
            {/* ------------ text of info ------------  */}
                <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:15,width:"100%",display:"flex", marginTop:10}}>
                <Text style={{fontSize:20, color:"white"}}> {current?.wind_kph}kmh</Text>
                <Text style={{fontSize:20, color:"white"}}> {current?.humidity}%</Text>
                <Text style={{fontSize:20, color:"white"}}>{astronomy?.astro.sunrise}</Text>     
                <Text style={{fontSize:20, color:"white"}}>{astronomy?.astro.sunset}</Text>     
                </View>
            </View>
            {/* ------------ 7 day forcast ---------  */}
            
            <View style={Styles.daily}>
                <View><Text style={{paddingLeft:10 ,fontSize:16, marginBottom:10, color:"white"}}> 🗓️ Daily Forcast</Text></View>
            </View>

   <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10,gap:15}} style={{height:"18%"}} >

            {
               dayForcast?.forecastday?.map((item , index)=>{

                        const getDayName = (dateString) => {
                        const date = new Date(dateString);
                         return date.toLocaleDateString("en-US", { weekday: "long" }); 
                             };


                    return(
                        <View key={index} style={Styles.cards}>
                       <Image style={{height:60, width:60}} source={{ uri: "https:" + item.day.condition.icon}}></Image>
                        <Text style={{color:"white"}}>{getDayName(item.date)}</Text>
                        <Text style={{color:"white"}}>{item.day.condition.text}</Text>
                        </View>
                    )
                })
            }
            </ScrollView>

   </View>

        </SafeAreaView>
  </View>


  )
}

export default Home