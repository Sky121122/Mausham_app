import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
   container:{
    height:"100%",
    width:"100%",
    display:"flex",
   },
   bg:{
    position:"absolute",
    height:"100%",
    width:"100%"
   },
   searchBox:{
    paddingLeft:30,
    paddingRight:30,
    height:"10%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
  
   },
   input:{
    height:"50",
    width:"300",
    borderWidth:2,
    borderRadius:12,
    color:"white",
    borderColor:"white",
    paddingLeft:10,
   },
   countyName:{
      height:"10%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",

   },
   mainIcon:{

      justifyContent:"center",
      alignItems:"center"
   },
   info:{
      height:110,
      width:"100%",
      marginTop:40,
      alignItems:"center",
      textAlign:"center",

   },
   daily:{
     marginTop:20 ,
   },
   cards:{
      height:140,
      alignItems:"center",
      gap:3,
      paddingTop:5,
      width:150,
      backgroundColor:"#167D88",
      borderRadius:10
   }
})