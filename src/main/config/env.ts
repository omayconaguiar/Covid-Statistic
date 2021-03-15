export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://omayconaguiar:admin@cluster0.jvhga.mongodb.net/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
