export { keyAtPath,
         keyExists,
         mergePath, shakeObject$ };

/*
const rxSpace = /\s/;

const rxJsonionPath = Object.assign(
                     /(?:(\.)|(\#))/g,
                     { prop: 1
                      index: 3 });

const rxJsonionPath__space = Object.assign(
     /(\s*)(?:(\.)|(\#))(.*)\s/g,
   { space: 1, prop: 2, path: 4
              index: 3  });

function* jsonionPath (str, obj) {
     var  match, prev;
     var  rx;

  switch (str.match(rxSpace)) {
    case true:
    rx = rxJsonionPath__space;
         str = (" "+ str +" ");
     do (match=rx.exec(str)) {
     if (match) {}

     }
  }
}
*/

function keyExists () {
  return keyAtPath.apply(null, arguments);
}

function keyAtPath (obj, ...path
                     /*  ...levels, returnBool  */) {
  var returnBool
   = (typeof path[path.length-1] === "boolean")
   ?              path.pop()      :     false;

  if (typeof path[0] !== "string"
  &&  typeof path[0] !== "number")
      throw "Invalid input";

  for (var i = 0; i < path.length; i++) {
       switch (typeof obj) {
        case  "object":
        ////   handle negative index
         if   (path[i] < 0
         &&    obj.length > Math.abs(path[i])) {
       path[i]=obj.length + path[i];
               break;
         }

               default:
         if   (typeof obj[path[i]] === "undefined")
               return false;
   }

   obj = obj[path[i]];
  }


  if  (returnBool)
       return true;
  else return obj;
}

  ///////////////////////////////////////////////
 // merge in object-type values (path recursion)
// ... may be interfaced at collection objects
function mergePath (...path /*, merge, options */) {
  var obj_a, key, bfr,
      obj_b;

  if (typeof   this    === "object") {
  if (this.constructor === Array
  ||  this.constructor === Object)
      obj_a = (this);
  }
  else
  if (typeof arguments[0] === "object") {
  if (       arguments[0].constructor === Array
  ||         arguments[0].constructor === Object)
      obj_a = (path.shift());
  }

  var optionsObj, /* clone,
                     cloneFirst,
                     cloneLast,
                     cloneAll, */ replace, sortFn;

  switch (true) {
   case  typeof (optionsObj
             =   path[path.length-1]) === "object":

            var {replace, sortFn}
             =  (optionsObj);

      if (
      /*  typeof clone      === "boolean"
      ||  typeof cloneFirst === "boolean"
      ||  typeof cloneLast  === "boolean"
      ||  typeof cloneAll   === "boolean" */
          typeof replace    === "boolean"
      ||  typeof sortFn     === "function") {
                 [obj_b] = path.splice(-2,2);
                 break;
      }

                 default: optionsObj = undefined;
                               obj_b = path.pop();
  }
 
  if (typeof obj_a   === "undefined"
  ||  typeof obj_b   === "undefined"
  || (typeof path[0] !== "string"
  &&  typeof path[0] !== "number"))
      throw "Input mismatch";

 //////
  function traverse () {
   switch (typeof obj_a) {
    case  "object":
    ////   handle numeric index
     if   (typeof key === "number") {

           bfr = (obj_a.length);

     if   (key < 0
     &&    bfr > Math.abs(key)) {
     key = bfr + key;
           return true;
     }

     if   (key >= 0
     &&    bfr >= key + 1) {
           return true;
     }}

    ////   handle non-existing paths
     if   (typeof key === "string") {

           bfr = (obj_a[key]);

     if   (typeof bfr === "object") {
           return true;
     }

     if   (typeof bfr === "undefined") {
                  obj_a[key] = {};
                  return null;
     }

     if   (typeof bfr !== "object") {
               if (replace) {
                  obj_a[key] = {};
                  return null;
               }
     }}

           default:
           return false;
  }}

  for  (key of path.slice(0, path.length-1)) {
   if  (traverse(obj_a, key) !== false)
        obj_a = obj_a[key];
   else return false;
  }

  if  (traverse(obj_a, (key = path[path.length-1]))
         ===  false)
       return false;

  //  guest starring: 
  //  a) replace=true
  //  b) replace=false

      bfr = obj_a[key];
  
  //  when the path doesn't yet exist ...
  if  (typeof bfr === "undefined") {
       return !!(obj_a[key] = obj_b);
  }
  else

  //  so you have a non-object and whatever else comes in
  if  (typeof bfr !== "object") {
  if  (replace)
       return !!(obj_a[key] = obj_b);
  }
  else

  //  so you have two (un)indexed lists and you ...
  if  (isObject(bfr) && isObject(obj_b)) {
  if  (bfr === obj_b)
       return true;
  if  (replace)
       return !!(obj_a[key] = { ...bfr,
                                ...obj_b });
  else for (let [key, val] 
             of Object.entries(obj_b)) {
        if (typeof bfr[key] === "undefined")
                   bfr[key]  =  val;
       }
       return true;
  }
  else
  if  (isArray(bfr) && isArray(obj_b)) {
       let result = bfr.map(item => {
       var index;
       if ((index = obj_b.indexOf(item)) !== -1)
                    obj_b.splice(index, 1);
    });

    return !!(obj_a[key] = bfr.concat(obj_b));
  }
  else

  //  so you have a ready-made object and whatever else comes in
  //  a) object remains as it is
  //  b) string replaces the object
  if  (isObject(bfr) && !isObject(obj_b)) {
  if  (replace === true)
       return !!(obj_a[key] = obj_b);
  else return false;
  }
  else

  // so you have a ready-made array and whatever else comes in
  if  (isArray(bfr)) {
  if  (bfr.indexOf(obj_b) === -1)
       bfr.push(obj_b);
       return true;
  }
}

function shakeObject$ () {}

function isObject (object) {
  if  (Object.prototype.toString.call(object) === '[object Object]')
       return true;
  else return false;
}

function isArray (object) {
  if  (Object.prototype.toString.call(object) === '[object Array]')
       return true;
  else return false;
}
