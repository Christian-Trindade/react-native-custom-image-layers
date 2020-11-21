import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  containerZoom: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  layers: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  layersClose: {
    width: '270%',
    height: '270%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  layersFace: {
    width: '390%',
    height: '390%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  layersSuperClose: {
    width: '600%',
    height: '600%',
    resizeMode: 'contain',
    position: 'absolute',
  },

  styleOffline: {
    tintColor: '#474a51',
  },
});

export default styles;
