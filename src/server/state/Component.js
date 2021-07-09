//const { component } = require("geotic")
import {Component} from "geotic"
class Appearance extends Component {
  static properties = {
    char: "question1",
  };
}

class Position extends Component {
  static properties = { x: 0, y: 0 }
}

class Location extends Component {
  static properties = {location: "town", level: 0}
}

export {
  Appearance,
  Position,
  Location
}