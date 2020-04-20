import React, { Component } from 'react'
import { StyleSheet, Dimensions} from 'react-native'
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
        avion : {
            icon : require('../assets/avion/avion.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=hiMQVNfL1bQ',
            nivel: 'green'
        },
        avion2 : {
            icon : require('../assets/avion2/avion2.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=J9Y_ntzeOCk',
            nivel: 'green'
        },
        barca : {
            icon : require('../assets/barca/barca.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=EhLj-_43MR0',
            nivel: 'green'
        },
        avion5 : {
            icon : require('../assets/avion5/avion5.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=ICJYNodQdOE',
            nivel: 'green'
        },
        avion6 : {
            icon : require('../assets/avion6/avion6.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=2BOvnq9jaQU&t=',
            nivel: 'red'
        },
        barcaza : {
            icon : require('../assets/barcaza/barcaza.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=z46D1baN68o',
            nivel: 'green'
        },
        caracolaModular : {
            icon : require('../assets/caracolaModular/caracolaModular.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=p5L6-GjC2u8&t=1s',
            nivel: 'yellow'
        },
        corazon : {
            icon : require('../assets/corazon/corazon.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=fwld5Wo-PU8',
            nivel: 'yellow'
        },
        dragon : {
            icon : require('../assets/dragon/dragon.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=4rCwwbqwTS4',
            nivel: 'yellow'
        },
        espada : {
            icon : require('../assets/espada/espada.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=ce1iqCEsCdg',
            nivel: 'green'
        },
        espadaNinja : {
            icon : require('../assets/espadaNinja/espadaNinja.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=3Z-pMNbEpgs',
            nivel: 'yellow'
        },
        estrella : {
            icon : require('../assets/estrella/estrella.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=XgH3ksl2-lg',
            nivel: 'yellow'
        },
        gorra : {
            icon : require('../assets/gorra/gorra.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=7J8EJf45nqs',
            nivel: 'green'
        },
        shuriken : {
            icon : require('../assets/shuriken/shuriken.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=Eh1GO8OVgpY',
            nivel: 'green'
        },
        shurikenModular : {
            icon : require('../assets/shurikenModular/shurikenModular.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=9fcybl8cCNM',
            nivel: 'yellow'
        },
        tie : {
            icon : require('../assets/tie/tie.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=LeREJxu-9UU',
            nivel: 'yellow'
        },
        trex : {
            icon : require('../assets/trex/trex.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=WkUldGf6C_I',
            nivel: 'red'
        },
        velocirraptor : {
            icon : require('../assets/velocirraptor/velocirraptor.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=WII21UlOAQU',
            nivel: 'yellow'
        },
        yoda : {
            icon : require('../assets/yoda/yoda.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=fNXrBrXghwg',
            nivel: 'red'
        },
        rosaFacil : {
            icon : require('../assets/rosaFacil/rosaFacil.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=TSs5xhogV9M',
            nivel: 'yellow'
        },
        aguila : {
            icon : require('../assets/aguila/aguila.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=HOQnk8Pyv5M',
            nivel: 'red'
        },
        aguila : {
            icon : require('../assets/avion4/avion4.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=yNmWotyN-TY',
            nivel: 'red'
        },        
        florRoja : {
            icon : require('../assets/florRoja/florRoja.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=Z2mptWwD_wg',
            nivel: 'yellow'
        },
        caramelo : {
            icon : require('../assets/caramelo/caramelo.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=s27pAJvbDSk',
            nivel: 'green'
        },
        florPlana : {
            icon : require('../assets/florPlana/florPlana.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=qhkjNoS6meI',
            nivel: 'green'
        },
        cajaCorazon : {
            icon : require('../assets/cajaCorazon/cajaCorazon.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=PLmkHszh4CU',
            nivel: 'green'
        },        
        cajaCorazonGrande : {
            icon : require('../assets/cajaCorazonGrande/cajaCorazonGrande.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=J7fXSzzZc6w',
            nivel: 'green'
        },
        anilloCorazon : {
            icon : require('../assets/anilloCorazon/anilloCorazon.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=c-OtvWOHgBk',
            nivel: 'yellow'
        },
        corazonAlas : {
            icon : require('../assets/corazonAlas/corazonAlas.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=PLmkHszh4CU',
            nivel: 'red'
        },
        corazonInflable : {
            icon : require('../assets/corazonInflable/corazonInflable.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=Elcd9W4DDrs',
            nivel: 'green'
        },
        f15 : {
            icon : require('../assets/f15/f15.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=Sxbk7Au2LGE',
            nivel: 'red'
        },
        flappyDragon : {
            icon : require('../assets/flappyDragon/flappyDragon.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=1TL3agR4g-Q',
            nivel: 'yellow'
        },
        foca : {
            icon : require('../assets/foca/foca.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=Z_60UVL_eOY',
            nivel: 'green'
        },
        gato : {
            icon : require('../assets/gato/gato.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=5gnv-7rVFh4',
            nivel: 'green'
        },
        gorroChino : {
            icon : require('../assets/gorroChino/gorroChino.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=eh6FMjFSjy0',
            nivel: 'green'
        },
        gorroSanmuray : {
            icon : require('../assets/gorroSanmuray/gorroSanmuray.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=ft-c4a1HJnc',
            nivel: 'green'
        },
        paloma : {
            icon : require('../assets/paloma/paloma.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=TeV7pXi4tck',
            nivel: 'green'
        },
        pelotaModular : {
            icon : require('../assets/pelotaModular/pelotaModular.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=RvC5pY97wCM',
            nivel: 'yellow'
        },
        ranaSaltarina : {
            icon : require('../assets/ranaSaltarina/ranaSaltarina.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=AZZYeplD7nA',
            nivel: 'green'
        },
        sobre : {
            icon : require('../assets/sobre/sobre.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=oQV8Ym-qIAY',
            nivel: 'yellow'
        },
        zorro : {
            icon : require('../assets/zorro/zorro.png'),
            folds : [],
            youtubeLink:'https://www.youtube.com/watch?v=xw7LIAHxL6w',
            nivel: 'green'
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


