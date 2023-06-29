import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  taskContent: {
    backgroundColor: 'rgba(53, 153, 204, .2)',
    padding: 10,
    borderRadius: 3,
    width: 'auto',
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3599cc',
    margin: 10,
  },
  centered:{
    textAlign: 'left',
    borderBottomColor: '#3599cc',
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '90%',
    margin: 'auto',
  },
  error: {
    color: 'red',
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
    color: 'red',
    backgroundColor: 'rgba(240, 180, 180, .5)',
  },
});

export default styles;