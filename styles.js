import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECEFF1",
    padding: 20,
  },

  headerText: {
    fontSize: 36,
    fontFamily: "System",
    fontWeight: "800",
    color: "#37474F",
    textAlign: "center",
    marginBottom: 45,
    letterSpacing: 1,
  },

  button: {
    width: "80%",
    backgroundColor: "#5C6BC0",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 12,

    shadowColor: "#B0BEC5",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 8,

    borderTopColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: 'transparent',
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  buttonWrapper: {
    width: "45%",
    backgroundColor: "#5C6BC0",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 15,

    shadowColor: "#B0BEC5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,

    borderTopColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: 'transparent',
  },

  input: {
    width: "80%",
    height: 55,
    borderColor: "#B0BEC5",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#ECEFF1",
    fontSize: 16,
    color: "#37474F",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },

  subheading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#455A64",
    marginBottom: 20,
    marginTop: 10,
  },

  infoContainer: {
    width: "85%",
    backgroundColor: "#81C784",
    padding: 25,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: "#B0BEC5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },

  infoText: {
    fontSize: 17,
    color: "#37474F",
    lineHeight: 28,
    fontWeight: "500",
  },

  userContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: '5%',
    shadowColor: "#B0BEC5",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
    borderLeftWidth: 6,
    borderLeftColor: "#5C6BC0",
  },

  userInfo: {
    fontSize: 15,
    fontWeight: "400",
    color: "#37474F",
    marginBottom: 5,
  },

  userTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#37474F",
    marginBottom: 25,
    marginTop: 15,
    textAlign: "center",
  },
});

export default Styles;