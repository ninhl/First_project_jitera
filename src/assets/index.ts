import ImageLogo from "./images/logo.jpeg";
import NoImage from "./images/no-image.png";
import Image1670842932896png from "./images/1670842932896.png";
import Image1670843089051png from "./images/1670843089051.png";
import Image1670843327672png from "./images/1670843327672.png";
const assets = (name: string) => {
  switch (name) {
    case "logo":
      return ImageLogo;
    case "1670842932896png":
      return Image1670842932896png;
    case "1670843089051png":
      return Image1670843089051png;
    case "1670843327672png":
      return Image1670843327672png;
    default:
      return NoImage;
  }
};
export default assets;
