import * as Minio from 'minio'
import { ObjectMetaData } from 'minio/dist/main/internal/type'

// Instantiate the MinIO client with the object store service
// endpoint and an authorized user's credentials
// play.min.io is the MinIO public test cluster
const minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'GcTD8aOXpMzABOArkPUM',
    secretKey: 'HBzsh3tOTHDh4o3lqZ8McwYm9yuC4auBMD72mjrr',
})


// Check if the bucket exists
// If it doesn't, create it
const createBucket = async (bucket:string) => {
    const exists = await minioClient.bucketExists(bucket)
    if (exists) {
        console.log('Bucket ' + bucket + ' exists.')
    } else {
        await minioClient.makeBucket(bucket, 'us-east-1')
        console.log('Bucket ' + bucket + ' created in "us-east-1".')
    }
}

// Upload the file with fPutObject
// If an object with the same name exists,
// it is updated with new data
const uploadFile = async (bucket:string,destinationObject:string,sourceFile:string,metaData: ObjectMetaData | undefined) => {
    await minioClient.fPutObject(bucket, destinationObject, sourceFile, metaData)
    console.log('File ' + sourceFile + ' uploaded as object ' + destinationObject + ' in bucket ' + bucket)
}

const listFiles = async (bucket:string) => {
    const objectsStream = minioClient.listObjects(bucket, '', true)
    return objectsStream;
}

const listFilesWithUrl = async (bucket:string) => {
    const objectsStream = minioClient.listObjects(bucket, '', true)
    const objects = []
    for await (const obj of objectsStream) {
        const url = minioClient.presignedGetObject(bucket, obj.name)
        objects.push({ ...obj, url })
    }
    return objects;
}

const deleteFile = async (bucket:string,objectName:string) => {
    await minioClient.removeObject(bucket, objectName)
}

export { createBucket, deleteFile, listFiles, listFilesWithUrl, uploadFile }

