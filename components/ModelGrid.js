import React, { Component } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native'
import { View } from 'native-base'
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
        logo: require('../assets/logo.png'),
        youtube: require('../assets/youtubeIcon.png'),
        pajaritacp: require('../assets/cp.png'),
   }
//    async showInterstitial(){
//         AdMobInterstitial.setAdUnitID('ca-app-pub-9330146669440542/2235829999'); // Test ID, Replace with your-admob-unit-id
//         AdMobInterstitial.setTestDeviceID('EMULATOR');
//         await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
//         await AdMobInterstitial.showAdAsync();
//    }
   renderItems = (modelsToRender) => {
        const square = (Dimensions.get('screen').width)/3
        if(modelsToRender){     
            const modelKeys = Object.keys(modelsToRender);
            return modelKeys.map((key) => {
                const item = modelsToRender[key];
                return <Card containerStyle={{borderWidth: 2, borderColor:item.nivel, borderRadius:30, backgroundColor: 'white'}}>
                            <TouchableOpacity onPress={() => this.props.setSelectedModel(key)}>                                                                
                                <Image source={item.icon} style={{ width: square, height: square }}>
                                    {/* <Image source={this.state.youtube}  style={{width: 10, height: 10}}  resizeMode="stretch"  /> */}
                                </Image>                                                                                                 
                            </TouchableOpacity>
                        </Card>
            })
        }
   }
   renderRows = (modelsToRender) => {
        if(modelsToRender){     
            let modelKeys = Object.keys(modelsToRender);            
            modelKeys = this.state.filter ? modelKeys.filter(key => modelsToRender[key].nivel == this.state.filter) : modelKeys
            modelKeys =  this.state.filterByCP ? modelKeys.filter(key => modelsToRender[key].folds.length > 0) : modelKeys
            modelKeys =  this.state.filterByYT ? modelKeys.filter(key => modelsToRender[key].folds.length === 0) : modelKeys
            let preparedModels= [];
            for(let i = 0; i < modelKeys.length; i = i +2){
                let modelArray = [];
                modelArray[modelKeys[0 +i]] = modelsToRender[modelKeys[0 +i]]
                if(modelKeys[1 +i]){
                    modelArray[modelKeys[1 +i]] = modelsToRender[modelKeys[1 +i]]
                }             
                preparedModels.push(modelArray)
            }
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
                <TouchableOpacity style={styles.buttons} onPress={ ()=>{ Linking.openURL('https://www.youtube.com/channel/UC95fg4sARWFg2HuSZoo8kOQ')}}>
                    <Image source={this.state.logo} style={{flex: 1,  width:350, height: 50} } resizeMode="stretch"/>
                </TouchableOpacity>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.touchable} onPress={ ()=>{ this.setState({filterByYT: !this.state.filterByYT, filterByCP: false })}}>
                        <Image source={this.state.youtube}  style={{width: 50, height: 50 , borderWidth : this.state.filterByYT ? 3: 0 , borderColor:'orange' }}  resizeMode="stretch"  />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.touchable} onPress={ ()=>{ this.setState({filterByCP: !this.state.filterByCP, filterByYT: false})}}>
                        <Image source={this.state.pajaritacp}  style={{width: 50, height: 50, borderWidth : this.state.filterByCP ? 3: 0 , borderColor:'orange'}}  resizeMode="stretch"  />
                    </TouchableOpacity>  
                    <TouchableOpacity style={[styles.touchableGreen, {borderWidth : this.state.filter === 'green' ? 3: 0 , borderColor:'orange' } ]} onPress={() =>this.clickOnFilter('green')}/>
                    <TouchableOpacity style={[styles.touchableYellow, {borderWidth : this.state.filter === 'yellow' ? 3: 0 , borderColor:'orange' } ]} onPress={() =>this.clickOnFilter('yellow')}/>
                    <TouchableOpacity style={[styles.touchableRed, {borderWidth : this.state.filter === 'red' ? 3: 0 , borderColor:'orange' } ]} onPress={() =>this.clickOnFilter('red')}/>
                </View>
                <View style={{height:20}}/>
                <Grid>            
                    <View style = {styles.containerCol}>                    
                        {this.renderRows(this.state.modelsToRender)}           
                    </View>
                                    
                </Grid>               
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


