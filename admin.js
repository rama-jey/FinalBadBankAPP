const admin = require ('firebase-admin');

//firebase service account pk
   const type = "service_account";
   const project_id = "bad-bank-f947a";
   const private_key_id = "6aaa2cd296bb333da428e5929616deb7ec17f3c9";
   const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+GRDLVuL1CF6P\nEbxF03OUBy8DeDlkzhvbEyyOhkHHrYd+dfYS2C/5l8hqvf8o/RXEH57c4m+TcRyd\ngUeyMFsTjbjZe8rmeQOoxGhTCuJKMjZH62UdCfw+MKikwL0sTQvIAvpCJzwC8R9h\n/nhFPoBp6UKBEs24VEue1ENHa/Dnko1hbgM+ldIyh+B6s3HOsah7Nh0wrwoHlR29\nxTT05Ya7MN536wls1NfuV6BjGOmXgZCWDnzY1Bxlh7PkBJzeQ1sJceevf2hGKMnp\nq6mUV2d7KNGKvuJ/fYBMSzVWysi7p/itpwdxGORPGLcaQBWKnywa4/6+ZpqwZZtA\n6Kt9LQihAgMBAAECggEAVGHF/azU09XiO3mw7AHfpQ7HRLACMgf3f3h0Z9OasWsK\n4Qy1rUm/ifhhI1ixQd2N4t/yYbQ1uOoVvKidTbB/TR+0tP1pZILFKA3/DRWguzSs\nuaH44ToEeQqaYX+YuWh92UvRELpfviKQPqx5cKs8z0aWmbriDHeGlbs9HiAA8Jls\nhOlaAYuf5ncODDGZmA3YltbnORTR9r5p5v+8HW5c8y/zFzYh4guZtSkBr0qwxqOq\nKocsC2snc+QrZIJfZHR+T1J0OzolQP/CRan6XsFjLkwBKsHUNcSYWLk8zRGDGK+3\nQ4mt3pz063h5L7IDC2MBja/+R/QpQb3wX290qyfPPQKBgQD8KNQHpZIc2NFdK7Cl\nXqclBN41JSGZH3DUk3qQeuUilvZ4nCrTXilDrMLPfpfMcO4/dqN5dJW7ZTQ2t9+I\njE9+wTDetKAMziDEX1lAnPCZ3Hte0se8zhUW7vwSigxjuzAECyULRKyLT37efYsv\n7yHMRX1D2xTO+BlBdaoHeCrIOwKBgQDA/kJBsL4R/upL1xjIZIkfMrqWuYcPh7eV\nNf+srTsTKMmSLHQSrgrSynenfHD94aiz2RFsq1P+Jpm8lD3lavRNc5ZRzXPYA3wA\nvZjfALbN53pi+AC7DviLmjVmc4bfwnu0b8/F8g32l+hNCMcAMEd73Ty8oX3ofyZF\ns0ZrQR4A0wKBgFArGt4jgcSyGj4o+cxZv4JBffQfjgMEv/aVvM3ahKbuoAXQgL0a\nnrvpXTZi5RgWf2il62td6YzerC8JXoQnN87w1Py5KHlpv3kvZ0znmIcSVhbbpK0e\nSA42hOXQBghfJvDiKjDe8IyKBafu+iWPPYuYPC8qo/75We453ojpZ5CpAoGAAoGK\ntLWp0iwAONnjLX74tNoAyEJCebYmcR6RYlmhgb8u1uIS48c0xsXwRdF82h8bBLLV\n4hZbcdpodqVqJFd+Mp9EnW1QisaIzq2nlYW52fSehzh3MfagzZdECD+JydAJsS8e\ngJCDE+enEZECnIMD+pzF1CE4tFMqWQ9Z47yluhcCgYAPkPI3QIVBhj56g9fi+Dm6\nniBT8q/8E9QVdgF3yDeK334inDfs+Xg/VhqNypLkBmxKxg2uga2jBa2ZXG9afcoi\nXv9tbC/awmjwSI0+3+jcSFpUua2upXCO3IgCWL6VBdh4vDvAQIPcaf3VgW3+TiCQ\nvqanVwjgI6YE5Io9yIuqTQ==\n-----END PRIVATE KEY-----\n";
   const client_email = "firebase-adminsdk-2gjwp@bad-bank-f947a.iam.gserviceaccount.com";
   const client_id = "111218619537627162237";
   const auth_uri = "https://accounts.google.com/o/oauth2/auth";
   const token_uri =  "https://oauth2.googleapis.com/token";
   const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
   const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2gjwp%40bad-bank-f947a.iam.gserviceaccount.com";
   
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
  