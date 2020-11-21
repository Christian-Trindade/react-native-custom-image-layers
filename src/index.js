import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const CustomImageLayers = ({
  size = "full",
  offline,
  layers,
  inverted,
  externalPath,
}) => {
  const rotateY = inverted ? "180deg" : "0deg";

  const zoomStyle = {
    full: styles.layers,
    close: styles.layersClose,
    face: styles.layersFace,
    superclose: styles.layersSuperClose,
  };

  const containerStyle = {
    full: styles.layers,
    close: styles.containerZoom,
    face: styles.containerZoom,
    superclose: styles.containerZoom,
  };

  const styleOffline = offline ? styles.styleOffline : null;

  return (
    <View style={containerStyle[size]}>
      {layers.map((layer, index) => {
        const imagePath = externalPath
          ? {
              uri: layer,
            }
          : layer;

        return (
          <Image
            key={index}
            style={[zoomStyle[size], styleOffline]}
            source={imagePath}
            transform={[{ rotateY }]}
            resizeMode={"contain"}
          />
        );
      })}
    </View>
  );
};

CustomImageLayers.propTypes = {
  size: PropTypes.oneOf(["full", "close", "face", "superclose"]),
  offline: PropTypes.bool,
  layers: PropTypes.array,
  inverted: PropTypes.bool,
  externalPath: PropTypes.bool,
};
export default CustomImageLayers;
