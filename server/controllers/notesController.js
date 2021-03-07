const Notes = require('../models/notes')
const path = require('path');

module.exports.addNotes = async (req, res) => {
  console.log('in here', req.body)
  const url = req.protocol + "://" + req.hostname
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log(req.files)
      req.body.user = req.user_id

      req.body.listItems = JSON.parse(req.body.listItems)
      req.body.reminders=JSON.parse(req.body.reminders)
      req.body.labels=JSON.parse(req.body.labels)
      console.log(req.body.listItems)
      const note = new Notes(req.body)
      await note.save()
      return res.status(200).send(note)
    }
    console.log(req.files)
    let imageFile = req.files.imageToAdd;
    imageFile.mv(path.resolve(__dirname, '../images', imageFile.name), async function (err) {
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
    const note = await Notes.updateOne({ _id: req.body._id },
      
      {
      title: req.body.title,
      content: req.body.content,
      listItems: req.body.listItems,
      archive:req.body.archive,
      pinned:req.body.pinned,
      reminders:req.body.reminders,
      labels:req.body.labels
    })
    // const note=Notes(req.body)
    // await note.save()
    console.log('in here update',note,req.body)
    res.status(200).send(note)
  } catch (e) {
    console.error(e)
  }

}


module.exports.getNotes = async (req, res) => {
  const notes = await Notes.find({ user: req.user_id })
  res.status(200).send(notes)
}


module.exports.getReminder = async (req, res) => {
  const notes = await Notes.find({ user: req.user_id, reminders: { $exists: true, $not: { $size: 0 } } })
  res.status(200).send(notes)
}



module.exports.getListItems = async (req, res) => {
  const notes = await Notes.find({ user: req.user_id, listItems: { $exists: true, $not: { $size: 0 } } })
  console.log(notes);
  res.status(200).send(notes)
}

module.exports.getArchiveNotes=async(req,res)=>{
  const notes=await Notes.find({user: req.user_id,archive:true})
  res.status(200).send(notes)
}

module.exports.deleteNote = async (req, res) => {
  try {
    await Notes.deleteOne({ _id: req.params.id })
    console.log('in delete');
    res.status(200).send("delete successful")
  } catch (e) {
    console.error(e)
  }
}
