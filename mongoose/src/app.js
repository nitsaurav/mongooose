const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/testing",{ useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("connection successfully...")).catch((err)=>console.log(err));

//schema
// a mongoose schema defines the structure of the document,default values, validators, etc,

const playlistSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// a mongoose model is a wrapper on the mongoose schema.
// a mongoose schema defines the structure of the document, default values, validators, etc. whereas a mongoose model provides on interface to the datase for creating, querying, updating, deleting, records, etc.
// collection creation
 const Playlist = new mongoose.model("Playlist",playlistSchema);

 //create document or insert
 const createDocument= async()=> {
    try{
        const reactPlaylist=new Playlist({
            name: "Node Js",
            ctype: "back End",
            videos: 80,
            author: "bs",
            active: true
        })
        const result= await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
 }
// insert or create multiple document 
 const createDocument2= async()=> {
    try{
        const reactPlaylist=new Playlist({
            name: "Node Js1",
            ctype: "back End12",
            videos: 830,
            author: "bs",
            active: true
        })
        const reactPlaylist2=new Playlist({
            name: "Node J2",
            ctype: "back End3",
            videos: 820,
            author: "bs",
            active: true
        })
        const reactPlaylist3=new Playlist({
            name: "Node J3",
            ctype: "back End211",
            videos: 8023,
            author: "bs",
            active: true
        })
        const reactPlaylist4=new Playlist({
            name: "Node Js4",
            ctype: "back End21",
            videos: 280,
            author: "bs",
            active: true
        })
        const reactPlaylist5=new Playlist({
            name: "Node Js5",
            ctype: "back End423",
            videos: 830,
            author: "bs",
            active: true
        })
        const result= await Playlist.insertMany([reactPlaylist,reactPlaylist2,reactPlaylist3,reactPlaylist4,reactPlaylist5]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
 }

// createDocument();
// createDocument2();

// read or querying the documents using mongoose

// all data find
const getDocument=async() => {
    const result = await Playlist.find();
    console.log(result);
}

// getDocument();

// single data find
const getDocument2=async() => {
    const result = await Playlist.find({name:'Node Js5'});
    console.log(result);
}

// getDocument2();

//limit set and find dat
const getDocument3=async() => {
    const result = await Playlist.find({active:true}).select({name:1}).limit(1);
    console.log(result);
}

// getDocument3();

// comparision query operator 
const getDocument4=async() => {
    const result = await Playlist.find({videos: { $lt: 100 } }).select({name:1});
    console.log(result);
}

const getDocument5=async() => {
    const result = await Playlist.find({ctype: { $nin: ["back end","datatabse"] } }).select({name:1});
    console.log(result);
}

getDocument4();
getDocument5();

// Logical query operator
const getDocument6=async() => {
    const result = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1});
    console.log(result);
}
getDocument6();

// count
const getDocument7=async() => {
    const result = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1}).count();
    const result2 = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1}).countDocuments();
    console.log(result);
}
getDocument7();

// sort
const getDocument8=async() => {
    const result = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1}).sort(); // default ascending order
    const result3 = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1}).sort("name:1"); // ascending order
    const result4 = await Playlist.find({ $or: [{ctype: "fe"},{name:"ab"}] }).select({name:1}).sort({name:-1}); // descending order
    console.log(result);
}
getDocument8();


// update
const updateDocument=async(_id) => {
    const result= await Playlist.updateOne({_id},{$set:{name:"abc"}});
    // or
    const result2= await Playlist.findByIdAndUpdate({_id},{$set:{name:"abc"}},{new:true,useFindAndModify:false}); 
    console.log(result);
}
updateDocument();

// delete document
const deleteDocument=async(_id) => {
    const result= await Playlist.deleteOne({_id});
    // or
    const result2= await Playlist.findByIdAndDelete({_id}); 
    console.log(result);
}
deleteDocument();