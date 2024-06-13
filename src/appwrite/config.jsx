import {Client,ID,Databases,Storage,Query,Avatars} from "appwrite"
import conf from "../conf/conf";

export class Service{
    client=new Client();
    databases;
    avatar;
    storage;
 
   

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteprojid);
        this.databases=new Databases(this.client);
        this.storage = new Storage(this.client)
    }
    //  getAvtar = () =>{
    //    this.avatar = new Avatars(this.client);
    //     const result = avatar.getInitials();
    //  localStorage.setItem("avatar",result.href)

    //       console.log(result.href);
    //  }
    async AddDoc({title,price,productImageUrl,category,description,quantity,time,date}){
            try{
                return await this.databases.createDocument(
                    conf.appwriteDBid,
                    conf.appwritecollectionid,
                    ID.unique(),
                    {
                        title,
                        price,
                        productImageUrl,
                        category,
                        description,
                        quantity,
                        time,
                        date,
                    }
                )
            }catch(error){
                console.log("error in adding docs");
            }
        }
        async getImage({picture}){
            try {
                 return await this.storage.createFile(
                    conf.appwritebucketid,
                    ID.unique(),
                    { 
                        picture,
                    }
                 )
                
            } catch (error) {
                console.log(error)
            }

        }

        async productdetails(){
            try{
                return await this.databases.listDocuments(
                    conf.appwriteDBid,
                    conf.appwritecollectionid,
                    []
                )
            }catch(error){
                console.log("not able to fetch data");
            }
        }
}

const service=new Service();
export default service