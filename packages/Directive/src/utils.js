export const def = function(obj, key, value, enumerable){
    Object.defineProperty(obj, key,{
        value,
        enumerable,
        writable: true,
        configurable: true
    })
}

export const parsePath = function(str){
    var segments = str.split(".");

    return (obj) => {
        for(let i =0, l = segments.length; i< l;i++){
            if(!obj) return;
            obj = obj[segments[i]];
        }
        return obj;
    }
}