import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'aut/invalid-email') {
      return {error: 'Please enter a valid email address'};
    }
    return {error: 'Somethng went wrong with your request'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      return {status: false, error: 'The email or the password is wrong'};
    }
    return {status: false, error: 'Something went wrong'};
  }
};

export const logOut = async () => {
  await auth().signOut();
};
