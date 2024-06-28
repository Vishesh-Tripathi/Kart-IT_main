import {Client,Account,ID} from "appwrite"
import conf from "../conf/conf";

export class AuthService{
    client =new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteprojid)
        this.account=new Account(this.client);
    }

    async CreateAccount({email,password,name,labels}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name,labels);
            if(userAccount){
                return true;
            }else {
                return false;
            }
        }catch(error){
            throw error;
        }
    }

    async Login({email,password}){
        try{
            try {
                await this.account.deleteSessions();
            } catch (error) {
                const userlogin=await this.account.createEmailSession(email,password);
        if(userlogin){
            console.log(userlogin);
            return userlogin;
        }else {
            console.log("hhu");
            return userlogin;
        }
            }
            
        
    }catch(error){
        console.log("login detail not found");
    }
    return null;
    }
    async Logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite logout error");
        }
    }
    async getCurrentUser(){
        try{
            return  await this.account.get();
        }catch(error){
            console.log("user information not found");
        }
        return null;
    }

    
}

const authservice=new AuthService();
export default authservice;
