export class FormsService {
   
   constructor() {};
   get replace() : {spaceWithHyphen : Function } {
    return {
      spaceWithHyphen: (text : string) => {
        return text.replace(/\s/gi,'-');
      }
    }      
  };
  
  toLower (text : string) {
    return text.toLowerCase();
  }
}