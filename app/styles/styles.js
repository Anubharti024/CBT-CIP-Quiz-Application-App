import { StyleSheet, } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdd2d1",
    justifyContent: "center",
    padding: 20
  },

  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    elevation: 10
  },

  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold"
  },
  categoryText: {
    marginTop: 10,
    color: "white",
    marginBottom: 10,
    fontSize: 20
  },

  option: {
    backgroundColor: "#334155",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6
  },

  correct: {
    backgroundColor: "#22c55e"
  },

  incorrect: {
    backgroundColor: "#ef4444"
  },

  optionText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#671ee5",
    padding: 12,
    borderRadius: 10,
    marginTop: 15
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600"
  },

  timer: {
    alignSelf: "flex-end",
    backgroundColor: "#7c3aed",
    padding: 6,
    borderRadius: 20,
    color: "#fff"
  },

  progressBar: {
    height: 8,
    backgroundColor: "#334155",
    borderRadius: 10,
    marginVertical: 10
  },
  progressText: {
    fontSize: 20,
    color: "white"
  },
  resultImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  }
});