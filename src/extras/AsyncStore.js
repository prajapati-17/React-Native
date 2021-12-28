import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AsyncStore{
    async storeData(key,value){
         try {
            console.log('StoreData Key and Value',key,value);
            return await AsyncStorage.setItem(key,value);
            } 
        catch (error) {
            console.log('something went wrong in getting : ',error);
            return false;
         }
    }

    async getData(key){
        try {
           console.log('Getting data');
           return await AsyncStorage.getItem(key);
           } 
       catch (error) {
           console.log('something went wrong in getting : ',error);
           return false;
        }
   }

}