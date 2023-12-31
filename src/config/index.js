const config = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    APP_API_URL: process.env.REACT_APP_API_URL,
    APP_ROOT_URL: process.env.REACT_APP_ROOT_URL,
    LOCALSTORAGE_TOKEN_NAME: 'token',
    FIREBASE_apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    FIREBASE_authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    FIREBASE_projectId: process.env.REACT_APP_FIREBASE_projectId,
    FIREBASE_storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    FIREBASE_messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    FIREBASE_appId: process.env.REACT_APP_FIREBASE_appId,
}

export const {
    NODE_ENV,
    LOCALSTORAGE_TOKEN_NAME,
    APP_API_URL,
    FIREBASE_apiKey,
    FIREBASE_authDomain,
    FIREBASE_projectId,
    FIREBASE_storageBucket,
    FIREBASE_messagingSenderId,
    REGISTER_ACCOUNT_URL,
    APP_ROOT_URL,
} = config
