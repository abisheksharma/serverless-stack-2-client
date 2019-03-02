const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1uu6wweccqc68"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0mtspyd91b.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BL1B5l5js",
    APP_CLIENT_ID: "738gthnee1tiscv8cpu5880boa",
    IDENTITY_POOL_ID: "us-east-1:f6d77965-f6be-47a1-b9d3-839af06ff1e7"
  },
  STRIPE_KEY: "pk_test_4fbGHGIF5plqPwI4hNhfFdP9"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1iol8anprfvc9"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://u2ecl0g446.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_iphJT2DBj",
    APP_CLIENT_ID: "51esq7ei9nsv1691p06kh5b37f",
    IDENTITY_POOL_ID: "us-east-1:55571620-ff18-4843-af1c-5c6abfd1214c"
  },
  STRIPE_KEY: "pk_test_4fbGHGIF5plqPwI4hNhfFdP9"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};