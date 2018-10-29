import Expo from 'expo';
import secretCodes from '../secretCodes';

export default async function signInWithGoogleAsync(callback) {
  try {
    const result = await Expo.Google.logInAsync({
      iosClientId: secretCodes.iosClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      console.log('User access token => ', result.accessToken);
      console.log('User info => ', result.user);
      callback(result.user);
      return result.accessToken;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}
