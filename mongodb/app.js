const mongooes = require('mongoose');


//connect with database
mongooes.connect("mongodb://localhost:27017/aditya")
    .then(() => console.log("Connection successfull"))
    .catch(() => console.log("err"));


//schema
const playlistSchema = new mongooes.Schema({
    name: { 
        type:String,
        require:true,
        lowercase:true,
         trim:true,
         minlength:2,
         maxlength:2
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// collection creation 
const Playlist = new mongooes.model("Playlist", playlistSchema)


//create document or inseart
const createDocument = async () => {
    try {
        // const reactPlaylist = new Playlist({
        //     name: "react js",
        //     ctype: "back-end",
        //     videos: 20,
        //     author: "Aditya",
        //     active: true,
        // })
        // const nodePlaylist = new Playlist({
        //     name: "node js",
        //     ctype: "back-end",
        //     videos: 30,
        //     author: "Aditya",
        //     active: true,
        // })
        // const vuePlaylist = new Playlist({
        //     name: "vue js",
        //     ctype: "back-end",
        //     videos: 40,
        //     author: "Aditya",
        //     active: true,
        // })
        const mongoPlaylist = new Playlist({
            name: "mongo db            ",
            ctype: "back-end",
            videos: 10,
            author: "Aditya",
            active: true,
        })




        const result = await Playlist.insertMany([mongoPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
 createDocument();
// read quering documents

const getDocument = async () => {
    try{
    const result = await Playlist
    .find()
    .select({name:1})
    .sort({name: -1})
    // .limit(1);
    console.log(result)
    }catch(err){
        console.log(err);
    }
}

// getDocument();







//delete the document
const deletedocument = async (_id) =>{
    try{
  const result  = await Playlist.deleteOne({_id});
  console.log(result)
    }catch(err){
          console.log(err);
    }
}

// deletedocument("62f0a4bcf3c6e15baebe4a52")