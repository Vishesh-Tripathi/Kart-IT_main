const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDBid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritecollectionid2:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID2),
    appwritebucketid:String(import.meta.env.VITE_BUCKET_COLLECTION_ID)
}
export default conf;
