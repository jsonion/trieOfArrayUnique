export { assignObjectByKeymap, assignClassAlias,
                              definePropertyRef,
                              assignPropertyRefs };

 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/


function assignObjectByKeymap (object,
                               keymap, assign)   {
  try {
  for (let [map, key] of Object.entries(keymap)) {
   if (object[map] === undefined)
       Object.defineProperty(object, map,
     { get: () => assign[  key  ]})
  }} catch (ee){   throw(  ee  )}
        /*///////*/
  return (object);
}


 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/


function assignClassAlias (cls, ...keymapPair) {
  if (typeof cls !== "object")
      return;

  var refKey, keymapPair = keymapPair.values(),
    aliasKey, mappings;

  for    (refKey of keymapPair)
  switch (true) {
    case (typeof refKey !== "string"): return;
                                     //////////

    case (mappings = keymapPair.next().value)
                            instanceof Array:

     for (       aliasKey of mappings)
      if (typeof aliasKey == "string")
          assignPropertyRefs(cls, aliasKey,
                             cls,   refKey,
                                      true);
          break;

    case (aliasKey =
          mappings) instanceof String:

          assignPropertyRefs(cls, aliasKey,
                             cls,   refKey,
                                      true);
          break;
  }

  return cls;
}

/*//////////////////////////////////////////
        ________,,
       / \  \/  \\\ :::: `|`|` //////
       ˘˘˘  **
//////////////////////////////////////////*/

function definePropertyRef (obj, key,
                          /*********/

                              ref,
                             _key,

                          /*********/
  inspectPrototypeChain
             =  (false),  logNotFound,
                          logOccupied) {
  if  (this !== (true)) {{{
  let  streamline;
  if  (typeof  obj !== "object"
  &&   typeof  ref !== "object"
  &&   typeof  key !== "object"
  &&   typeof _key !== "object")

                 throw (`"."`);
               //////////////////

  if  (logNotFound
  &&  !logNotFound instanceof Function)
       logNotFound = (!true);
  if  (logOccupied
  &&  !logOccupied instanceof Function) 
       logOccupied = (!true);
  }}}

  var prop,        propertyDescriptor
   =  Object.getOwnPropertyDescriptor(ref,
                                     _key);

  if (propertyDescriptor  ===  (undefined)) {
  if (inspectPrototypeChain) {
  var      __proto__
   = ( ref.prototype );
       
        while
     (__proto__)
  if (
    !(               propertyDescriptor
   =    Object.getOwnPropertyDescriptor(ref,
                                       _key)))
      __proto__
   =  __proto__.prototype;

  }     else
        prop = ref[_key];
  }

  try {
  if  (propertyDescriptor !== undefined
  ||   prop               !== undefined) {
  if  (logNotFound)
       logNotFound(key, ref,
                  _key);

                          return (0);
  }                      /******/
  else {
  Object.defineProperty(obj, key,
        (propertyDescriptor
  &&    !propertyDescriptor.set
  &&    !propertyDescriptor.writable
  ||    !propertyDescriptor)

? {  get: function (  ) {
                   /**/   return ref[ _key ]  }}
: {  get: function  ()  { return ref[ _key ]  },
     set: function (__) {
                          return ref[ _key ]=(__)
    }} ) }} catch ( ee ){ return logOccupied  &&
                                 logOccupied(key), 
                        ( false )}
                        /*******/
  return obj;
}

function assignPropertyRefs (obj, ...params) {
  let inspectPrototypeChain
     /*******/    =   (params[params.length-1]
                 ===   true);

  if (typeof obj !== "object"){ return; }
  var assignKey,
      refObject, refKey, unmatched=false,
                          occupied=false;

  switch (true) {
   //// object, assignKey, refObject, refKey
   case typeof params[0] === "string"
    &&  typeof params[2] === "string"
    &&  typeof params[1] === "object":
       [assignKey, refObject, refKey] = (params);

        return (
          definePropertyRef.call(true,

                obj, assignKey,
          refObject, refKey,

          inspectPrototypeChain, logNotFound,
                                 logOccupied)
        ) || warn();

   //// object, refKey, refObject
   case typeof params[0] === "string"
    &&  typeof params[1] === "object":
       [refKey, refObject] = (params);


        return (
          definePropertyRef.call(true,

                obj, refKey,
          refObject, refKey,

          inspectPrototypeChain, logNotFound,
                                 logOccupied)
        ) || warn();

   //// object, ...refObject, ...refKey
   case typeof params[1] === "object"
    &&  typeof params[0] === "object":

           var refObject 
            =  new Array(), bfr;

             params=params.values();
        for (bfr of params)
         if (typeof bfr === "object")
                    refObject
              .push(params.splice(0,1));
         else break;

        for (refKey
                 of params)
         if (typeof refKey === "string"
         && !(bfr = refObject.find(
                    refObject => {{

             return definePropertyRef.call(true,
              
                          obj, refKey,
                    refObject, refKey,

                  inspectPrototypeChain,
                      (null), (null))

             }})))  logNotFound(refKey, obj);
             
        return warn() || obj;

   //// object, refObject, ...refKey
   case typeof params[2] === "string"
    &&  typeof params[1] === "string"
    &&  typeof params[0] === "object":

               refObject
             = params.shift();

        for (refKey
                 of params)
         if (typeof refKey === "string") {
          
             definePropertyRef.call(true,
                   obj, refKey, 
             refObject, refKey,

             inspectPrototypeChain,
           logNotFound, logOccupied);

         }

         return warn() || obj;

   default: throw "Invalid input sequence";
  }

  function logNotFound (key, refObj=null,
                        _key) {

    if (refObj) {
        if (_key !== null
        &&  _key !== key)
             key  =
         `${_key} => ${key}`;
        ////////// ///////////
    }

    switch (typeof unmatched) {
     case "undefined": return unmatched
                            =  ( key );

     case  "string":   return unmatched
                            = [ unmatched, key ];

     case  "object":   return unmatched.push(key);
  }}

  function logOccupied (key) {
    switch (typeof occupied) {
     case "undefined": return occupied
                            =  ( key );

     case  "string":   return occupied
                            = [ occupied, key ];

     case  "object":   return occupied.push(key);
  }}

  function warn() { var n=0;
    switch (true) {
     case  unmatched.length > 0 && n ++,
            occupied.length > 0 && n ++,
                                  (n == 0):
                                   return
                                 //////////
     case (n === 2):
           console.warn("Unmatched props list:",
                         unmatched,
                        "Occupied props list:",
                         occupied,

           "obj",        obj,
           "refObject",  refObject);
            break;

     case (unmatched.length !== 0):
           console.warn("Unmatched props list:",
                         unmatched,

           "obj",        obj,
           "refObject",  refObject);
            break;

     case (occupied.length !== 0):
           console.warn("Occupied props list:",
                         occupied,

           "obj",        obj,
           "refObject",  refObject);
            break;
    }

    return true;
  }
}
