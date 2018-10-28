import signInWithGoogleAsync from '../util/GoogleSignIn';

<TouchableOpacity onPress={signInWithGoogleAsync} style={styles.googleButton}>
  <Text>Sign in with Google</Text>
</TouchableOpacity>


googleButton: {
  width: Dimensions.get('window').width / 2,
  height: 30,
  backgroundColor: 'blue',
},
