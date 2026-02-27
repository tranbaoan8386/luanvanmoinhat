require('dotenv').config()

exports.env = {
  PORT: process.env.PORT || 8000,

  CLIENT_URL: process.env.CLIENT_URL,
  CLIENT_ID: process.env.CLIENT_ID,
  EXPIRED_IN: process.env.EXPIRED_IN || 86400,
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRE_AFTER_SECONDS: process.env.EXPIRE_AFTER_SECONDS || 900,

  BCRYPT_SALT_ROUND: 10,

  // ===== DATABASE =====
  SEQUELIZE_DIALECT: process.env.SEQUELIZE_DIALECT || 'mysql',
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,

  // ===== GOOGLE =====
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
  GOOGLE_TEST_EMAIL: process.env.GOOGLE_TEST_EMAIL,

  FILE_LIMIT: process.env.FILE_LIMIT || 5,

  // ===== MAIL =====
  MAIL_MAILER: process.env.MAIL_MAILER || 'smtp',
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_ENCRYPTION: process.env.MAIL_ENCRYPTION,
  MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS,
  MAIL_FROM_NAME: process.env.MAIL_FROM_NAME || 'My App'
}