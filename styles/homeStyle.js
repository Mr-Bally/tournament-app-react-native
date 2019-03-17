import { StyleSheet } from 'react-native';

export default homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  },
  buttonContainer: {
    margin: 20
  },
  headerContainer: {
    flex: 1,
    margin: 20
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  infoText: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10
  },
  summaryContainer: {
    margin: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  inputContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 30,
  },
  picker: {
    height: 50, 
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  }
});