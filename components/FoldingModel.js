import React, { Component } from 'react'
import { StyleSheet, Button, Text, ScrollView, TouchableOpacity, Dimensions, Linking,StatusBar } from 'react-native'
import { View } from 'native-base'
import { AdMobBanner,  AdMobInterstitial } from 'expo-ads-admob';
import ModelGrid from './ModelGrid';
import Swipe from './Swipe';
import { Image , Card } from 'react-native-elements'
import { WebView } from "react-native-webview";



export default class FoldingModel extends Component {

    state = {
        modelsToRender: this.props.modelsToRender,
        foldIndex: this.props.foldIndex,
        right: require('../assets/right.png'),
        left: require('../assets/left.png'),
        youtube: require('../assets/youtubeIcon.png'),
        backGround: require('../assets/paperBack.jpg'),
    } 
   foldToLeft = () => {
    (this.state.foldIndex + -1) >= 0 
        ? this.setState({foldIndex: this.state.foldIndex -1})
        : this.props.setSelectedModel(false)
   }
   foldToRight = () => {
    (this.state.foldIndex +1) < this.state.modelsToRender[this.props.selectedModel].folds.length
        ? this.setState({foldIndex: this.state.foldIndex + 1})
        : this.props.setSelectedModel(false)
   }
   renderCards(job) {
    return (
      <Card >
            <View>
                <Image source={job} style={styles.imageStyle}/>  
            </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Do something"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };
   
   render(){
    console.log(this.state.modelsToRender[this.props.selectedModel].folds.length)
      return (
        <Image source={this.state.backGround} style={styles.backGround}>
            {/* <View style={styles.backGroundBlack}>
                <Image source={this.state.modelsToRender[this.props.selectedModel].folds[this.state.foldIndex]} style={styles.imageStyle}/>  
            </View> */}
            <View style={styles.backGroundBlack}>
              {this.state.modelsToRender[this.props.selectedModel].folds.length > 0 
                ?<Swipe 
                    data={this.state.modelsToRender[this.props.selectedModel].folds}
                    keyProp="jobId"
                    foldIndex={this.state.foldIndex}
                    onSwipeRight={this.foldToLeft}
                    onSwipeLeft={this.foldToRight}
                    renderCard={this.renderCards}
                    renderNoMoreCards={this.renderNoMoreCards} 
                />                 
                :<View style={ styles.WebViewStyle }> 
                 <WebView
                    style={ styles.WebViewStyle }
                    source={{ uri: this.state.modelsToRender[this.props.selectedModel].youtubeLink }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true} 
                    allowsFullscreenVideo={true}

                    scalesPageToFit={true}  
                 />
                 </View>
                }
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.touchable} onPress={() =>this.foldToLeft()}>
                    <Image source={this.state.left}  style={{width: 50, height: 50}}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={ ()=>{ Linking.openURL(this.state.modelsToRender[this.props.selectedModel].youtubeLink)}}>
                    <Image source={this.state.youtube}  style={{width: 100, height: 70}}  />
                </TouchableOpacity>                
                <TouchableOpacity style={styles.touchable} onPress={() =>this.foldToRight()}>
                    <Image source={this.state.right}  style={{width: 50, height: 50}}  />
                </TouchableOpacity>
            </View>
        </Image>

        
      )
   }
}
const styles = StyleSheet.create ({
  imageStyle: {
    height: Dimensions.get('screen').width -50,
    width: Dimensions.get('screen').width -50,
  }, 
  backGroundBlack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',      
    alignItems: 'center',
    
  },
  separator: {
    flex: 1,    
    width:20,
    flexDirection: 'column',
    justifyContent: 'center',      
    alignItems: 'center',
  },
  buttons: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',    
    alignItems: 'baseline',    
  },  
  WebViewStyle: {
    //flex: 1,
    marginTop: 40,
    height: Dimensions.get('screen').width + 120,
    width: Dimensions.get('screen').width -20,
  }
})


