const Notes = require('../models/notes')

module.exports.addNotes = async (req, res) => {
    const url=req.protocol+"://"+req.hostname
    try {
        // console.log(req.body);
        let sampleFile;
        let uploadPath;
      
        if (!req.files || Object.keys(req.files).length === 0) {
          
          req.body.user = req.user_id

            const note = new Notes(req.body)
            await note.save()
            res.status(200).send("Added")
        }
        sampleFile = req.files.sampleFile;
         uploadPath = __dirname + '/Data/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, async function(err) {
    if (err)
      console.log(err);
    else{
        req.body.user = req.user_id
        req.body.img=url+'/controllers/Data/'+sampleFile.name;
        const note = new Notes(req.body)
        await note.save()
        res.status(200).send("Added")
    }
    

  });
        
        
    } catch (e) {
        console.error(e)
    }

}




module.exports.updateNotes = async (req, res) => {
    try {

        await Notes.updateOne({ _id: req.body._id }, {
            title: req.body.title,
            content: req.body.content,
            list_item: req.body.list_item
        })
        res.status(200).send("update successful")
        // console.log(note);
    } catch (e) {
        console.error(e)
    }

}


module.exports.findNotes = async (req, res) => {
    // console.log(id);
    const notes = await Notes.find({ user: req.user_id })
    res.status(200).send(notes)
}




module.exports.deleteNote = async (req, res) => {
    try {
        await Notes.deleteOne({ _id: req.params.id })
        res.status(200).send("delete successful")
    } catch (e) {
        console.error(e)
    }
}
