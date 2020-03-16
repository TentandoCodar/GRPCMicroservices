import path from 'path';
import grpc from 'grpc';
import loaderConfig from '../config/proto';

const protoLoader = require('@grpc/proto-loader');

const caronteDefinitionPath = path.resolve(__dirname, '..', 'pb', 'caronte.proto');

const caronteDef = protoLoader.loadSync(
    caronteDefinitionPath,
    loaderConfig
);

const caronte = grpc.loadPackageDefinition(caronteDef)

const caronteClient = new caronte.UserService(
    'localhost:3334',
    grpc.credentials.createInsecure()
)

export default caronteClient;