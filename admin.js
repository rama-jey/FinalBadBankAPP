const admin = require ('firebase-admin');

//firebase service account pk
   const type = "service_account";
   const project_id = "bad-bank-f947a";
   const private_key_id = "";
   const private_key = "-----BEGIN PRIVATE KEY----------END PRIVATE KEY-----\n";
   const client_email = "";
   const client_id = "";
   const auth_uri = "https://accounts.google.com/o/oauth2/auth";
   const token_uri =  "https://oauth2.googleapis.com/token";
   const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
   const client_x509_cert_url = "";
   
  //credential grants access to Firebase services
  admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key,
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url

    }),
  });
  
