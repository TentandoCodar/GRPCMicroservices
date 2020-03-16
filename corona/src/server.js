import grpc from 'grpc';
const protoLoader = require('@grpc/proto-loader');
import path from 'path';
import './database';

import implementation from './implementation';



const packageDefinitionPath = path.resolve(__dirname, 'pb', 'messages.proto');
const packageDefinition = protoLoader.loadSync(
    packageDefinitionPath,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const proto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

server.addService(proto.UserService.service, implementation)
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure())

server.start()
