const vision = require('@google-cloud/vision');

const CREDENTIALS = JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "upheld-apricot-420203",
    "private_key_id": "0c65b09456dd503e92a838336b7593417b38431e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUymJiH1VuxMWI\n//jPwlzT/GdJqUesVtmSMQdowu1LIm1frxM7wGZa3yV/q6PCXgINSNy2IRS8Cuub\nirzz8e43ilc+OAGwPChQGTAKf936QCi5tMH6T5/QezGNblVri1umO6mzJ9szhOJy\nMG6VLPqIZ+IJrUzuEqBH0f0YU6tqfPj1DpnBoUr6ViOlFlx3Aefhx0GEJgpV1l1v\nereDLvoktKMFjx7mx1WmLzQUypsnaAOaOgHwpyk2qqySPViqqB3v/LeFzWyhpxfj\nZf8DcVAS78c9Y4gzzGehU0UtVhCW15gZ9SrwP8ohV9vOt2YJdK9GNela/M36/124\nxbdDbrkLAgMBAAECggEAEQsjLvsvgcj4J9PIzATXU16UfBpQ7h7VG/6Ah2v4sahQ\nqY9OTRGvoRIQ4NVdYneniZ51mMKBjj/M3nWrhYzlKN56kNACyQJ1TPHkUfleTQMC\njNoYVCie6YXuH1PgOtYiQYHmqVdFGWIVX4Wj9dLXP9tPB+z98m7cSgrDT0WBJbnQ\nM+FejEaP5GMvSoZNUB2kmOfsU97pnS935rI4KsP3vIFk9RwdX66anQp3ymdGK5wD\nhyocYdpPi/JVH4LP4Cy9QsVNIH/CWolq5i7nnvstWHYPfMdtiMET6d6Z2k/Mi74V\nOi1tX11e1MuuZJVSVGK3NA56OSe4xahUKmDF5o9JcQKBgQDtJEoO7o4+dle3yziz\nBHxJgLRpgUUc88666p9RbxwA3/4FQEFZON0Q/d/AXQEwQWELiv5qKqFzK9x3VJoR\nQM7x7deaUrjRwXHdVJ5AOQ4F6g4zzqkp+W210AgIchSwuBb9mlWJ0I9PaJ3nE0xN\n0RrY05PbWH7v/D8IbohPR2mC9wKBgQDltlsLBvMqQfJXmL/XrghOIvmAaXzCu/dZ\n9jDq5caTki6Tdy56SrgobXYYZhNS62IDvuXl4l9M5wjBzTfIQMEqeL59JfeTLOJt\nKSeOq6nLUYtzpwqMkcsRBxI1zPxBetyRvxHeftnTg0ANfnh4rj5kDkgDTGO/9scI\nbx9Ky15hjQKBgQDd541dd6GnlXnzxLjj25ip90PbTlnsA8E5a3915nDf6Lp9E2mT\nIgDLe6U7DkykaSl0cbYshoPZj/uXtpUM/AYqoROVlz7XGRuBr0L+eeVDZ4eutv3Z\nB0zAS1CZBpeR3lG1MgxFD+Jqvky0BHzsfHWQ3DuJj8AItZQOQdBPz1VOdQKBgHcA\nPDP/OrOWjFQi1qeGCdlotvZ2L2K2e5KIPplBxdinLyfH4zUJRlPzOO2026fmNtWX\n7INl/VbajSfRB2ffW/KDsLMmmxYMd5RzcIGxnnms2eBlFcrysE826ZEjiz7kxiVe\n5YPtFS1E3kbfUMu8AKhW2amTxk0pK7zLzFsz9cX1AoGBAJjXZxN8jQw6mZLD00Ct\nfcqGqLo6pU3zrhcd+C46CpLitsp4EVw0MOGWsiN76ByoazaJ9jae1gC3lgQ6Hs+K\nwvpld2RhieyoUHrS1mGZV6/tevzPO50pgoNh4fHrScJ+YZFuCpLF3YH268iuUTZu\no+9iMvAAzuZ0I4Bb5c8deIfy\n-----END PRIVATE KEY-----\n",
    "client_email": "sa-vision-ai-api-demo@upheld-apricot-420203.iam.gserviceaccount.com",
    "client_id": "112016508728084437279",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sa-vision-ai-api-demo%40upheld-apricot-420203.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }));

  const CONFIG = {
    credentials: {
        client_email: CREDENTIALS.client_email, 
        private_key: CREDENTIALS.private_key
        
    }
  }

  const client = new vision.ImageAnnotatorClient(CONFIG);

  const detectText = async (file_path) => {
    let [result] = await client.textDetection(file_path)
    console.log(result);
  }

  detectText('../Assets/Men_3.png')