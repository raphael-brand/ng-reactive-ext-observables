export class FormsService {

  constructor() { };
  get replace(): { spaceWithHyphen: Function, nonAlphaNumericsWithHyphen: Function } {
    return {
      spaceWithHyphen: (text: string) => {
        return text.replace(/\s/gi, '-');
      },
      nonAlphaNumericsWithHyphen: (text: string) => {
        return text.replace(/\W/gi, '-');
      }
    }
  };

  toLower(text: string) {
    return text.toLowerCase();
  }

  encode(text: string) {
    return encodeURI(text);
  }

}