import React, { Component } from 'react'
import { StyleSheet, Button, Text, ScrollView, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import { View } from 'native-base'
import { AdMobBanner,  AdMobInterstitial } from 'expo-ads-admob';
import { Grid } from 'react-native-easy-grid';
import { Image, Card  } from 'react-native-elements'



export default class WorkSpace extends Component {
   state = {      
        adContador: 1,
        testIcon :  require('../assets/icon.png'),
        modelsToRender : this.props.modelsToRender,
        right: require('../assets/right.png'),
        left: require('../assets/left.png'),
        youtube: require('../assets/youtubeIcon.png'),
        backGround: require('../assets/paperBack.jpg'),
   }
   async showInterstitial(){
        AdMobInterstitial.setAdUnitID('ca-app-pub-9330146669440542/2235829999'); // Test ID, Replace with your-admob-unit-id
        AdMobInterstitial.setTestDeviceID('EMULATOR');
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
   }
   renderItems = (modelsToRender) => {
        if(modelsToRender){     
            const modelKeys = Object.keys(modelsToRender);
            return modelKeys.map((key) => {
                const item = modelsToRender[key];
                return <Card containerStyle={{borderWidth: 2, borderColor:item.nivel, borderRadius:30, backgroundColor: 'white'}}>
                            <TouchableOpacity onPress={() => this.props.setSelectedModel(key)}>                                                                
                                <Image source={item.icon} style={{ width: 130, height: 130 }}/>                                                                                                 
                            </TouchableOpacity>
                        </Card>
            })
        }
   }
   renderRows = (modelsToRender) => {
        if(modelsToRender){     
            let modelKeys = Object.keys(modelsToRender);            
            modelKeys = this.state.filter ? modelKeys.filter(key => modelsToRender[key].nivel == this.state.filter) : modelKeys
            let preparedModels= [];
            for(let i = 0; i < modelKeys.length; i = i +2){
                let modelArray = [];
                modelArray[modelKeys[0 +i]] = modelsToRender[modelKeys[0 +i]]
                if(modelKeys[1 +i]){
                    modelArray[modelKeys[1 +i]] = modelsToRender[modelKeys[1 +i]]
                }             
                preparedModels.push(modelArray)
            }
            console.log(preparedModels)
            return preparedModels.map((models) => {
                return <View style = {styles.containerRow}>
                            {this.renderItems(models)}
                       </View> 
            })
        }
   }
   clickOnFilter = (filter) => {
       filter === this.state.filter
        ? this.setState({filter: undefined})
        : this.setState({filter: filter})   
       
   }

   render(){
      return (
        <Image source={this.state.backGround} style={styles.backGround}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.touchableGreen} onPress={() =>this.clickOnFilter('green')}/>
                    <TouchableOpacity style={styles.touchableYellow} onPress={() =>this.clickOnFilter('yellow')}/>
                    <TouchableOpacity style={styles.touchableRed} onPress={() =>this.clickOnFilter('red')}/>
                </View>
                <View style={{height:60}}/>
                <Grid>            
                    <View style = {styles.containerCol}>                    
                        {this.renderRows(this.state.modelsToRender)}           
                    </View>
                                    
                </Grid>             
                    {/* <AdMobBanner
                            style={styles.bottomBanner}
                            bannerSize="fullBanner"
                            adUnitID="ca-app-pub-9330146669440542/9995255739"
                            // Test ID, Replace with your-admob-unit-id
                            testDeviceID="EMULATOR"
                            didFailToReceiveAdWithError={this.bannerError}
                            /> */}                 
                </ScrollView>  
            </Image>          
      )
   }
}
const styles = StyleSheet.create ({
    containerRow: {
        flexDirection: 'row',
    },
    containerCol: {
        justifyContent: 'center',      
        alignItems: 'center',
    },
    mainTitle: {
        flex: 0.4,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    },
    mainTitleView: {
        flex: 0.2,
        height: 100,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    },
    gridView: {
        flex: 1.5,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    buttons: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',    
        alignItems: 'baseline',
        paddingTop: 40
      },
      touchableRed: {
          width:50,
          height: 50,
          backgroundColor: 'red',
          borderRadius: 80,    
      },
      touchableYellow: {
        width:50,
        height: 50,
        backgroundColor: 'yellow',
        borderRadius: 80,    
    },
    touchableGreen: {
        width:50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 80,    
    },
    gridButton: {
       flex: 1,
       alignItems: 'center',  
       paddingTop: 20
    }

})


