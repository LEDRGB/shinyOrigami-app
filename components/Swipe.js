import React, { Component } from 'react';
import { View, PanResponder, Dimensions, Animated } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Swipe extends Component {
    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft: () => {},
        keyProp: 'id'
    };
    constructor(props) {
        super(props);
        this.state = { index: 0 };
        this.position = new Animated.ValueXY();
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gesture) => {
                this.position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (evt, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                  this.forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                  this.forceSwipe('left');
                } else {
                  this.resetPosition();
                }
            }
        });
    }
    onSwipeComplete(direction) {
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];
    
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.position.setValue({ x: 0, y: 0 });
        this.setState({ index: this.state.index + 1 });
    }
    forceSwipe(direction) {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.position, {
          toValue: { x, y: 0 },
          duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
    }
    resetPosition() {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 }
        }).start();
    }
    getCardStyle() {
        const { position } = this;
        const rotate = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
          outputRange: ['-120deg', '0deg', '120deg']
        });
    
        return {
          ...position.getLayout(),
          transform: [{ rotate }]
        };
      }
    
      renderCards = () => {
        return (
            <Animated.View
            key={this.props.foldIndex}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this._panResponder.panHandlers}
            >
            {this.props.renderCard(this.props.data[this.props.foldIndex])}
            </Animated.View>
        );
      };

 

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  cardStyle: {
    //position: 'absolute',
    width: SCREEN_WIDTH
  }
  
};

export default Swipe;