if (!jsonion instanceof Object)
var [jsonion, assignClassAlias]
 =  _require("jsonion", "assignClassAlias");

if (typeof jsonion.defaults !== "object") {
           jsonion.defaults  =  {};
    Object
   .assign(jsonion.defaults,
        { TrieOfArrayUnique: void "Untitled" });
}

 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/



setTimeout(() => {
  var asd = new ArrayUnique().defaultVal("hi");
            console.log( asd._defaultVal );

  var sdf = new TrieOfArrayUnique();
}, 5);



 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

class ArrayUnique extends Array {
  static queues = [];
  static dequeue (...queueIdentifiers) {
    if  (queueIdentifiers[0]
    &&   queueIdentifiers[0][0] === true)
    var [REMOVE] = queueIdentifiers.shift();

    if  (queueIdentifiers.length === 0) {
         ArrayUnique.queues
       = ArrayUnique.queues
                    .filter((q)              =>
                   q.filter((val,index,self) =>
               (self.indexOf(val,1) == index
                             ||  0  == index)),

                     REMOVE  &&
                  (q.enqueued=false));
    if  (REMOVE)
         ArrayUnique.queues
                    .length=( 0 );
    }
    else
    queueIdentifiers.forEach(ident =>
         ArrayUnique.queues
       = ArrayUnique.queues
                    .filter((q,id) => {
                 if (ident !== id)
                 return true;

                   q.filter((val,index,self) =>
               (self.indexOf(val,1) == index
                             ||  0  == index));

      if (REMOVE) return q.enqueued=false;
             else return true;
    }));
  }

  static
 _filter (array) {
  return (array
    &&   Object.assign(
          array,{filter})
    ||           filter);
  //////
        function filter (fn) {
        if  (fn instanceof Function
        &&   this.length)
        try {
        var i=this.length, bulk_offset
                               = (null);
         do  {i --
     switch ((i == -1
         &&        -1)
         ||
         !!fn(this[ i ],
                    i ,
              this)) {
         ////
         case false:
          if (bulk_offset === null)
              bulk_offset  =  ( i );
              break;     
                          /**/
              this.splice(0,0);
                        /*///*/
         ////             ``
         case true:
          if (bulk_offset)
              this.splice(i,
              bulk_offset-i);
              break;

         ////
         case -1: i=0;
              default:
          if (!(null  ===  (bulk_offset)))
                this.splice(i,
                            bulk_offset-i);
      }}
      while (true)}  catch ($$)
                  {  throw ('')  }
      return this;          { }
  }}               /*/////  ``  //////////////*/

  static
 _unique (array) {
  return (array
    &&   Object.assign(
          array,{unique})
    ||           unique);
  //////
        function unique ( ...inputs) {
    var isFirstIn = (false);
    var isAppend,
        isPrepend;
    /// isSplice;

    switch (true) {
     case  (this instanceof Array):
           isFirstIn = !!(this[0]);
            this[1]  =    this;
    default:
    switch (this) {
     case  false:
     case      0: isPrepend
                  = (true); break;
     case   true:
     case     -1: isAppend
                  = (true); break;

                  default:
              if (inputs[0] === -self.length)
       isPrepend=(inputs.splice(0, 2))
              && (false);

        else  if (inputs[0]  >  self.length)
        isAppend=(inputs.splice(0, 2))
              && (true);
    }}

     ///////////////////////////////////////////
    /// returns map of existing values: [val,ix]
    var bfr, res=new Map(),
        i__
     = (0);

   /*    method for testing uniques         *///
   const indexOf
     =  (self.enqueued == false)
     ?  (val) => self.uniqueVals.indexOf(val)
     :  (val) =>
        (bfr  =  self           .indexOf(val));

   /*    method for mapping uniques         *///
   const map
     =  (val,  isFirstIn) => res.set(
         val, [isFirstIn  ? self.length
                          : null,

                            self.splice(
                     bfr || self.indexOf(val), 1)
                                               ]);

   /*    method of insertion                *///
   const insert
     =  (isAppend ) ? (val) => self.push(val)
     :  (isPrepend) ? (val) => self.unshift(val)
     :   undefined;

     //////////////////////////////////////////
    //   unique `push` and `unshift` shorthand
    if  (insert) {
         for (let val of inputs) 
         if  (indexOf(val) >= 0)
                  map(val, isFirstIn)
         else  insert(val);
               return res;
    }
    else

     //////////////////////////////////////////
    //  unique `_splice` method shorthand
    if  (inputs.length > 2
    &&   inputs[0] === parseInt(inputs[0]) 
    &&   inputs[1] === parseInt(inputs[1])) {
    for (var val,
           i  =2,
           i__=0; i < inputs.length; i++)
    switch (val=inputs[i],
    indexOf(val)   >=   0) {
     case  true:
      if  (isFirstIn)
           inputs.splice((i  --,
                          i__++), 1);
           default:
           map(val, isFirstIn);


    } self.splice(offset, i__,
        ...inputs.slice(2)); }

  ///////////
    return res.size && res || true;
  }}


/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

  enqueued    = ( false );

 _defaultVal  =  jsonion                &&
                 jsonion.defaults       &&
                 jsonion.defaults
                        .TrieOfArrayUnique;
   uniqueVals =  Object
                .assign([],
                       {   indexOf:
                        [].indexOf  });

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/


  constructor (...values) {
         super(...values);

  Object.assign(this, {
         filter: ArrayUnique._filter(),
         unique: ArrayUnique._unique(),
         splice: ArrayUnique[`splice`],
  });

  return assignClassAlias(this,
        "setDefaultValue",
      [ "setDefaultVal", "defaultVal",
                         "defaultValue" ]);
  }

  setDefaultValue (_defaultVal) {
     Object.assign(this,
                  {_defaultVal});
  }

  enqueue (identifier = this) {
    var queue
     =  ArrayUnique.queues.find((arr) => 
                  identifier === arr[0]);

    if (queue === undefined) {
        queue
     =  ArrayUnique._filter(
        [ this, identifier ]);

        ArrayUnique.queues
              .push(queue);
    }

           this.enqueued=true;
    return this;
  }

  append (values) {
          values = this.formatInput(values);
                   this.splice(this.length-1, 0,
                                    values);
    if (!this.enqueued)
         this.unique();
  }

  prepend (values) {}
  remove  (values) {}

  formatInput (values) {
    if (typeof values !== "object"
    ||         values.constructor !== Array) {
               values  = 
       (typeof values === "undefined")
                       ?   [this.valDefault]  :
       (typeof values === "number")
                       ?   [  `${values}`  ]  :
                           [     values    ];
    }
    else
    if (values === null)
        values = [ null ];

    if (!values)
    throw "Invalid input params";

    if (!values.length)
         values.push(this.defaultVal);

    return values;
  }
}

class TrieOfArrayUnique extends Object {
      trie = new Object();
  ////////////////////////////////////
  constructor (cfg={ terminator: "$",
                     valDefault: true }) {
    if (typeof cfg.terminator !== "string"
    ||        !cfg.terminator.length)
    throw "Trie terminating symbol misconfig";

    delete cfg.trie;
    delete cfg.q;
    delete cfg.add;
    delete cfg.get;
    delete cfg.remove;
    delete cfg.formatInputs;
   
  /////////////////
    super( cfg );
  }

  q() {
   //   reduced function runs in external scope
    let {add, get, trie}=(this);

    return function
   (keys=undefined,
    vals=undefined) {

    return (vals) ? add(keys, vals, this)
         : (keys) ? get(keys)
         :  Object.keys(trie).forEach(key =>
                          delete trie[key]);
  }}

  add (keys, vals = undefined, enqueue=false) {
         let trie = this.trieObj;
     [keys, vals] = this.formatInputs(keys,
                                      vals);

      return recursive(trie, keys, vals);
    function recursive (obj, keys, vals) {
      while (keys.length > 1) {
         let key = keys.shift();
        /////
         if (typeof obj[key] !== "object")
                    obj[key] = {};
      }

     /////
      if (typeof obj[key] !== "object") {
          obj[key] = new ArrayUnique(valDefault);
      if (enqueue)
          obj[key].enqueue(enqueue);
      }

      obj[key].append(values);

      return obj[key];
  }}

  get (keys) {
      [keys] = this.formatInputs(keys);
    let trie = this.trieObj;

      return recursive(trie, keys);
    function recursive (obj, keys) {
      while (keys.length > 1) {
         obj=obj[keys.shift()];

         if (typeof obj !== "object")
         return false;
      }

      if (typeof obj[keys[0]] === "object")
          return obj[keys[0]];
      else
      return false;
    }
  }

  remove (keys, vals=undefined) {
         [keys]=this.formatInputs(keys);
       let trie=this.trieObj;
       var node=undefined;

      return recursive(trie, keys);
    function recursive (obj, keys) {
      while (keys.length > 1) {
         let key = keys.shift();

         if (typeof node === "undefined"
         &&  typeof obj[key] === "object"
         &&  Object.keys(obj[key]).length===1) {
         if (vals)
             node = new Array(obj, key);
         else
           delete obj[key];
         }

         obj = obj[key];

         if (typeof obj !== "object")
         return false;
      }

      obj = obj[key];

      if (typeof obj === "object"
      &&         obj instanceof ArrayUnique)
          return obj.remove(vals);
    }
  }

  formatInputs (keys, values=undefined) {
   /////
    if (typeof keys === "number")
    keys = [`${keys}`];

    else
   /////
    if (typeof keys !== "object"
    || (keys
    &&  keys.constructor.name !== "Array"))
        keys=[ keys ];

    keys.push(this.terminatingSymbol);

    if (typeof values === "undefined")
               values = this.valDefault;

    return [keys, values];
  }
}

 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

[module && module.exports, window].find(scope =>
          (typeof scope === "object") &&
    Object.assign(scope, {ArrayUnique,
                    TrieOfArrayUnique}));

 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

function _require (...modules) {
  var n, bfr;

  for (let _scope of [require, global, window])
  for (let [i, _module] of modules.entries()) {
  if (typeof modules[i] ===   "object"
  ||  typeof modules[i] === "function")
      continue;

  switch (typeof _scope) {
   case  "object":
          modules[i]
              =  bfr
              = _scope[_module];
          break;
    
   case  "function":
          modules[i]
              =   bfr
              =  _scope(_module);
  }

  if (typeof modules[i] ===   "object"
  ||  typeof modules[i] === "function") {
      n++;
  if (n === (modules.length))
      return modules;
  }}

  if (modules[0] === "jsonion")
      modules[0]  =  new Object();
      return modules;
}
