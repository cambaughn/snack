import Expo from 'expo';
import secretCodes from '../secretCodes';

export default async function signInWithGoogleAsync(callback) {
  try {
    const result = await Expo.Google.logInAsync({
      iosClientId: secretCodes.iosClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      result.user.google_id = result.user.id;
      delete result.user.id;
      result.user.accessToken = result.accessToken;
      callback(result.user);
    } else {
      return {cancelled: true};
    }
  } catch(error) {
    console.log(error)
    return {error: true};
  }
}
