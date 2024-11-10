import mongoose, { type Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose	= {
    conn: null,
    promise: null
  }
}

export const connect = async () => {
  console.log('starting connection. err')
  if(cached.conn) return cached.conn;

  console.log('without cache conn')

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'next-space',
    bufferCommands: false,
    connectTimeoutMS: 30000,
  })

  cached.conn = await cached.promise;
  return cached.conn;
}
