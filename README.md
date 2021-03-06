# Custom Image Layers

Custom Image Layers is a simple Reat Native component to overlay image layers and generate dynamic pictures

## Installation

```bash
npm install react-native-custom-image-layers
OR
yarn add react-native-custom-image-layers
```

## Usage

```ecmascript
import CustomImageLayers from "react-native-custom-image-layers";

 const App = () => {
  //example with external images, to use external images pass the prop externalPath
  const avatarSample = [
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/92763base2.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/73183cabelo1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/31344sobrancelha1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/66750olho1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/79014nariz1.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/73470boca4.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/regata-bluish.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/24995calca-hot3.png",
    "https://berap-avatares.s3-sa-east-1.amazonaws.com/M/acessorio/500/kik-red.png",
  ];

  //example with local image
  const shirtSample = [
    require("./src/samples/shirts/base.jpg"),
    // require("./src/samples/shirts/stamp1.png"),
    require("./src/samples/shirts/stamp2.png"),
  ];

  //example with local image
  const wallSample = [
    require("./src/samples/wall/base-wall.jpg"),
    require("./src/samples/wall/spray.png"),
  ];

  return (
    <>
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <CustomImageLayers
          layers={wallSample}
          size={"full"}
          inverted={false}
          externalPath={false}
        />
      </SafeAreaView>
    </>
  );
};

```

## Demo

Check the [Demo](https://github.com/Christian-Trindade/react-native-custom-image-layers-demo)

![gig](https://firebasestorage.googleapis.com/v0/b/berap-a671c.appspot.com/o/gif-example.gif?alt=media&token=1969d6da-ae7f-4731-8bd0-80d5cfe18fbc)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
