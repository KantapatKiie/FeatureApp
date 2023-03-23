import { Dimensions, StyleSheet } from "react-native";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export default StyleSheet.create({
  max: {
    flex: 1,
    justifyContent: "center",
  },
  buttonHolder: {
    height: 100,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0093E9",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: "black",
  },
  fullView_landscape: {
    width: dimensions.height,
    height: dimensions.width,
    backgroundColor: "black",
  },
  remoteContainer: {
    width: "100%",
    height: 150,
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    paddingStart:16,
    paddingEnd:16,
    marginBottom: 120,
  },
  remoteGroup: {
    width: 100,
    height: 150,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  remote: {
    width: 100,
    height: 150,
    marginHorizontal: 2.5,
    zIndex: 0,
  },
  remoteSingle: {
    width: 100,
    height: 150,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    zIndex: 1,
    marginStart: 16,
    marginTop: 50,
    overflow: "hidden",
  },
  remoteSingleLandscape: {
    width: 100,
    height: 150,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    zIndex: 1,
    marginStart: 16,
    marginTop: 20,
    overflow: "hidden",
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#0093E9",
  },
});
