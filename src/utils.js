export function convertStr(obj){
    let result = "";
    Object.keys(obj).map((key) => {
      if(typeof(obj[key]) == "string"){
        result = result + ", " + obj[key]
      }else if(typeof(obj[key]) == "object"){
        const str = convertStr(obj[key])
        result = result + ", " + str;
      }
    }) 
    return result.slice(2)
}