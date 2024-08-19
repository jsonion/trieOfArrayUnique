import { assignClassAlias } from "./objectRefs.js";

class ArrayUnique extends Array {
  static queues = [];
  static dequeue (...queueIdentifiers) {
    var  REMOVE;

   ////  hotkey [true] to dequeue
    if  (queueIdentifiers[0] instanceof Array
    &&   queueIdentifiers[0].length === 1
    &&   queueIdentifiers[0][0]     === true)
         [REMOVE] = queueIdentifiers.shift();

   ////  sort unique (& dequeue) all queues
    if  (queueIdentifiers.length === 0) {
         ArrayUnique.queues =
         ArrayUnique.queues
                    .filter((q)                =>
                   q.filter((val, index, self) =>
               (self.indexOf(val, 1) == index
                             ||   0  == index)),

                     REMOVE  &&
                  (q.enqueued=false));
    if  (REMOVE)
         ArrayUnique.queues
                    .length=( 0 );
    }
    else
    ////  sort unique (& dequee) specific queues
    queueIdentifiers.forEach(ident =>
          ArrayUnique.queues =
          ArrayUnique.queues
                     .filter((q,id) => {
                  if (ident !== id)
                  return true;

                    q.filter((val, index, self) =>
                (self.indexOf(val, 1) == index
                              ||   0  == index));

      if (REMOVE) return q.enqueued=false;
             else return true;
    }));
  }

  unique (...args) {
   /// to filter unique values
    switch (args.length) {
     case 0:
    return (
     this._filter((value, index, self) =>
                  (self.indexOf(val,1) == index
                                ||  0  == index))
    );

     case 1:
      if   (typeof args[0] === "function")
    return (
     this._filter( args[0] )
    )}

   /// to append unique values
    for (let val of args) {
     if (this.indexOf(val) === -1)
         this.push(   val   );
  }}

 ///////
/*
  filter = this
._filter;    */
 _filter (fn) {
      if (typeof fn !== "function"
                 || !this.length){ return }
                                 /*//////*/

      var i=this.length, bulkOffset = (null);

      try {
       do {i --;
   switch (i === -1
       && (      -1)
      ////
       || fn(this[i], i, this)) {

       ////
       case false:
        if (bulkOffset   === null)
            bulkOffset    =  [i,i];
       else bulkOffset[0] =   i;
            break;

       ////
       case true:
        if (bulkOffset !== null)
            this.splice(bulkOffset[0], 

                        bulkOffset[1]
                      - bulkOffset[0] + 1);

            bulkOffset=null;
            break;

       ////
       case -1:
        if (bulkOffset !== null)
            this.splice(0,
                        bulkOffset[1] + 1);
            return this;
    }}
    while (true)} catch ($_$)
                { throw (".") }
                         { }
  } /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  enqueued   = ( false );
 _defaultVal = typeof jsonion === "object" &&
                      jsonion.defaults     &&
                      jsonion.defaults
                               .ArrayUnique;

   /////////////////////                      */
  //  section: YDI
  prepend (values) {}
  remove  (values) {}
 _indexOf (value ) {}

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  constructor (...values) {
         super(...values);

    if  (values.length) 
         this._filter();

    return assignClassAlias(this,
          "setDefaultValue",
        [ "setDefaultVal", "defaultVal",
                           "defaultValue" ]);
  }

  setDefaultValue (defaultVal) {
     return (this._defaultVal = defaultVal),
             this;
  }

  enqueue(identifier = this) {
          identifier = (identifier)
        ? identifier : this;
        
    var queue = ArrayUnique.queues.find(arr => 
                         identifier === arr[0])
           ||   ArrayUnique.queues.push(
                        [identifier, this]);

           this.enqueued = (true);
    return this;
  }

  append (values) {
          values = this.formatInput(values);
      if (values === false)
          return     false;

           else    this.splice(this.length, 0,
                                 ...values);
          return   this;
  }

  prepend (values) {}
  sortAdd (values) {}
  remove  (values) {}

  formatInput (values) {
    if (typeof values !== "object"
    || (values                   &&
        values.constructor       &&
        values.constructor.name !== "Array")) {
        switch
       (typeof values) {
         case "undefined": 
    if (typeof this._defaultVal === "undefined")
               return false;

         else  values = [this._defaultVal];
               break;

         case "number":
               values = [`${values}`];
               break;

               default:
               values = [values];
    }}

    return values;
  }
}

class TrieOfArrayUnique extends Object {
      #trie = new Object();
      #recurse; #terminated; #terminator;
  //////////////////////////////////////
  constructor (cfg={ enqueue: true,

                  valDefault:
                 (undefined),

             returnTerminated: true }) {
        let {returnTerminated} = cfg;

        if (!cfg  instanceof Object)
             cfg={};

        if (typeof cfg.terminator !== "string")
                   cfg.terminator  =  "\\$";

        if (typeof cfg.enqueue === "undefined")
                   cfg.enqueue  =  true;

        if (typeof cfg.valDefault !== "undefined")
                  cfg._valDefault = cfg.valDefault;
           delete cfg["valDefault"];

           delete cfg.q;
           delete cfg.add;
           delete cfg.get;
           delete cfg.remove;
           delete cfg.formatInputs;

           delete cfg.terminated;

    //////////////////////////////
       super();
       Object.assign(this, cfg);

         this.#recurse     =  this.recurse;
         this["recurse"]   = (this.recurse
                                   || null);

         this.#terminator  =  cfg.terminator;
         this.#terminated  = 
    (cfg.returnTerminated !== undefined) ?
       !!returnTerminated  :  true;
  }

  formatInputs (keys, vals=undefined,
                        fn=undefined) {
    if (!keys instanceof Array)
         keys = [keys];

    if  (keys[keys.length-1] === this.#terminator)
         keys.pop();

    for (let i=keys.length-1; i>=0; i--) {
         switch
        (typeof keys[i]) {
          case "number": keys[i] = `${key}`;
          case "string": break;

                default: keys.splice(i,1);
        }
    }

    if  (!keys.length
    ||  (fn && typeof fn !== "function"))
         throw (".");

    return [keys, vals, fn];
  }

  recurse (keys, vals=undefined, fn) {
          [keys, vals, fn]
               = this.formatInputs(keys,
                                   vals, fn);

           const trie
               = this.#trie;
           const terminator
               = this.#terminator;
           const terminated
               = this.#terminated;

           const valDefault
               = this._valDefault;

           const enqueue
               = this.enqueue;

             var key, createNode;
      return recursive(trie, keys, vals);
    function recursive (obj, keys, vals) {
    do { key =     keys[0]
    if (typeof obj[key] === "object"
    && ( obj = obj[keys.shift()] )) continue;
                                   else break }
       while  (    keys.length    )

      switch  (true)  {
        case  (vals !== undefined):
         if   (keys.length) {
        ////   create path with leaf node 
         for  (key of keys)
         obj = obj[key] = {};

         if (      fn      )
         obj[  terminator  ] = fn(null, vals);
                  else
         obj[  terminator  ] = (
                               ( !enqueue )
             ?  new ArrayUnique(          )
             :  new ArrayUnique(          )
                                .enqueue()
                                          )
                                .append(vals);

                return obj[terminator]; 
         }
         ////     update node via external method
         else if (fn)
          return  fn(obj[terminator], vals);

         ////     append to unique array
         else if (obj[terminator] instanceof
                                  ArrayUnique)
          return  obj[terminator].append(vals);
                  else return false;

                  default:
              if (!keys.length) {
              if ( terminated )
                   //// return leaf node
                  return fn
                    &&   fn(obj[terminator])
                         || obj[terminator];
                   else
                   //// return paths & leaf node
                  return fn
                    &&   fn(obj)
                         || obj;
              }    else
                   ////
                  return undefined;
  }}}
}

export { ArrayUnique, TrieOfArrayUnique };
