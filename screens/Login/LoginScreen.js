import signInWithGoogleAsync from '../util/GoogleSignIn';

<TouchableOpacity onPress={signInWithGoogleAsync} style={styles.googleButton}>
  <Text>Sign in with Google</Text>
</TouchableOpacity>
