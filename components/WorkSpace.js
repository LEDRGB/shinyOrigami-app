import React, { Component } from 'react'
import { StyleSheet, Button, Text, ScrollView, TouchableWithoutFeedback, Dimensions, StatusBar } from 'react-native'
import { View } from 'native-base'
import { AdMobBanner,  AdMobInterstitial } from 'expo-ads-admob';
import ModelGrid from './ModelGrid';
import FoldingModel from './FoldingModel';
import { Image , Card } from 'react-native-elements'

export default class WorkSpace extends Component {
   state = {
     modelsToRender : {
        pajarita : {
            icon : require('../assets/pajarita/pajarita.png'),
            folds : [
                require('../assets/pajarita/pajarita1.png'),
                require('../assets/pajarita/pajarita2.png'),
                require('../assets/pajarita/pajarita3.png'),
                require('../assets/pajarita/pajarita4.png')
            ],
            youtubeLink:'https://www.youtube.com/watch?v=zKbFlgtSTPA',
            nivel: 'green'
        }, 
        barco : {
            icon : require('../assets/barco/barco.png'),
            folds : [
                require('../assets/barco/barco1.png'),
                require('../assets/barco/barco2.png'),
                require('../assets/barco/barco3.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=3MryPWYT-lY',
            nivel: 'green'
        },       
        iris : {
            icon : require('../assets/iris/iris.png'),
            folds : [
                require('../assets/iris/iris1.png'),
                require('../assets/iris/iris2.png'),
                require('../assets/iris/iris3.png'),                
                require('../assets/iris/iris4.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=91WnyrnDUzY',
            nivel: 'yellow'
        },
        rosa : {
            icon : require('../assets/rosa/rosa.png'),
            folds : [
                require('../assets/rosa/rosa1.png'),
                require('../assets/rosa/rosa2.png'),
                require('../assets/rosa/rosa3.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=GgMpPV7W1co',
            nivel: 'red'
        },
        owl : {
            icon : require('../assets/owl/owl.png'),
            folds : [
                require('../assets/owl/owl1.png'),
                require('../assets/owl/owl2.png'),
                require('../assets/owl/owl3.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=nfwzXP3UJWQ',
            nivel: 'yellow'
        },
        grulla : {
            icon : require('../assets/grulla/grulla.png'),
            folds : [
                require('../assets/grulla/grulla1.png'),
                require('../assets/grulla/grulla2.png'),
                require('../assets/grulla/grulla3.png'),     
                require('../assets/grulla/grulla4.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=pdCQMvxmqZk',
            nivel: 'yellow'
        },
        inflatableFrog : {
            icon : require('../assets/inflatableFrog/inflatableFrog.png'),
            folds : [
                require('../assets/inflatableFrog/inflatableFrog1.png'),
                require('../assets/inflatableFrog/inflatableFrog2.png'),
                require('../assets/inflatableFrog/inflatableFrog3.png'),
                require('../assets/inflatableFrog/inflatableFrog4.png'),
                require('../assets/inflatableFrog/inflatableFrog5.png'),                
            ],
            youtubeLink:'https://www.youtube.com/watch?v=eV5T9EUZyrY',
            nivel: 'yellow'
        },
        caracola : {
            icon : require('../assets/caracola/caracola.png'),
            folds : [           
            ],
            youtubeLink:'https://www.youtube.com/watch?v=WIWKbVm0_tQ',
            nivel: 'red'
        },
        f_14 : {
            icon : require('../assets/f_14/f_14.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=WtTKa_qee_4',
            nivel: 'red'
        },
     },
     selectedModel: false,
     backGround: require('../assets/paperBack.jpg'),
   }  
   setSelectedModel = (selectedModel) => {
        this.setState({selectedModel})
   }
   render(){    
      return (
        <Image source={this.state.backGround} style={styles.backGround}>
            {!this.state.selectedModel
                ? <ModelGrid modelsToRender={this.state.modelsToRender} setSelectedModel={this.setSelectedModel}/>
                : <FoldingModel modelsToRender={this.state.modelsToRender} setSelectedModel={this.setSelectedModel} foldIndex={0} selectedModel={this.state.selectedModel}/> 
            }
        </Image>

        
      )
   }
}
const styles = StyleSheet.create ({
   backGround: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    resizeMode: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',      
    alignItems: 'center',
    backgroundColor: 'transparent'
    
  }
})


