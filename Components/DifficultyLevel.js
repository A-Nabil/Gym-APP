import React from "react";

import {
    View,
    StyleSheet,
  } from "react-native";

class DifficultyLevel extends React.Component {
    constructor(props) {
      super(props);

      switch(props.level)
      {
        case 'Beginner':
          this.level = 1;
          break;
        
        case 'Intermediate':
          this.level = 2;
          break;
   
        case 'Advanced':
          this.level = 3;
          break;
  
   
        default:
          this.level = 0;
      }
    }

  
    render() {
      return (
        <View style= {[styles.container, {
    
        }]}>
           <View style={[{height: '33%',width:'10%',},this.level >0? styles.activeBlock : styles.nonActiveBlock ]}></View>
           <View style={[{height: '66%',},this.level >1? styles.activeBlock : styles.nonActiveBlock]}></View>
           <View style={[{height: '100%',},this.level >2? styles.activeBlock : styles.nonActiveBlock]}></View>
        </View>
      );
    }
  }

export default DifficultyLevel;


  const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:"row",
      height: '100%',
      flexWrap: "wrap-reverse"
    },
    activeBlock: {
      flex: 1,
      margin:"5%",
      backgroundColor: "steelblue"
    },
    nonActiveBlock: {

      flex: 1,
      margin:"5%",
      backgroundColor: "gray"
    },
  });