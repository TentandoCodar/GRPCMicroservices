import path from 'path';
import grpc from 'grpc';
import loaderConfig from '../config/proto';

const protoLoader = require('@grpc/proto-loader');

const hidraDefinitionPath = path.resolve(__dirname, '..', 'pb', 'hidra.proto');

const hidraDef = protoLoader.loadSync(
    hidraDefinitionPath,
    loaderConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef)

const hidraClient = new hidra.UserService(
    'localhost:3334',
    grpc.credentials.createInsecure()
)

export default hidraClient;