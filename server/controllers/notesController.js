const Notes = require('../models/notes')
const path = require('path');

module.exports.addNotes = async (req, res) => {
    console.log('in here')
    const url = req.protocol + "://" + req.hostname
    try {        
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log(req.files)
            req.body.user = req.user_id
            const note = new Notes(req.body)
            await note.save()
            return res.status(200).send(note)
        }
        console.log(req.files)
        let imageFile = req.files.imageToAdd;        
        imageFile.mv(path.resolve(__dirname,'../images',imageFile.name), async function (err) {
            if (err)
                console.log(err);
            else {
                req.body.user = req.user_id
                req.body.img = url + 'images' + imageFile.name;
                const note = new Notes(req.body)
                await note.save()
                res.status(200).send(note)
            }
        });
    } catch (e) {
        console.error(e)
    }
}




module.exports.updateNotes = async (req, res) => {
    try {
console.log('in update',req.body);
        const note=await Notes.updateOne({ _id: req.body._id }, {
            title: req.body.title,
            content: req.body.content,
            list_item: req.body.list_item
        })
        res.status(200).send(note)
    } catch (e) {
        console.error(e)
    }

}


module.exports.findNotes = async (req, res) => {
    // const notes = await Notes.find({ user: req.user_id })
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
