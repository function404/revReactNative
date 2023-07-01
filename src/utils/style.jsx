import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    backgroundColor: '#3599cc',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  taskContent: {
    backgroundColor: 'rgba(53, 153, 204, .2)',
    padding: 10,
    borderRadius: 3,
    width: 'auto',
    margin: 5,
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  centered:{
    textAlign: 'left',
    borderBottomColor: '#3599cc',
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
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