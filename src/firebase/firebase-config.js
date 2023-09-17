 export const firebaseConfig = {
    apiKey: "AIzaSyCET-TjyXNAFMSwqlQOSx_YJ3ScAKWSmQA",
    authDomain: "tecnoshop-98d54.firebaseapp.com",
    projectId: "tecnoshop-98d54",
    storageBucket: "tecnoshop-98d54.appspot.com",
    messagingSenderId: "39381183895",
    appId: "1:39381183895:web:8750bdf0cc2bf0a6c8a8d2",
    measurementId: "G-BBTT7H6PYW"
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

  