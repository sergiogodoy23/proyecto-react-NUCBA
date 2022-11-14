export const firebaseConfig = {
    apiKey: "AIzaSyBZeOV-2fu4IJHcsTNyazT2wc3yzZdhepo",
    authDomain: "tecnoshop1617.firebaseapp.com",
    projectId: "tecnoshop1617",
    storageBucket: "tecnoshop1617.appspot.com",
    messagingSenderId: "1029907640492",
    appId: "1:1029907640492:web:8af8934247e477ea7c6f09"
  };

  export const actionCodeSettingsVerification = {
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'linkDeProducción',
  };
  
  export const actionCodeSettingsForgotPassword = {
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/login'
        : 'linkDeProducción',
  };