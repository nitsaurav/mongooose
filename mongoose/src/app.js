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

createDocument();
createDocument2();