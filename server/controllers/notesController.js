const Notes = require('../models/notes')
const path = require('path');

module.exports.addNotes = async (req, res) => {

  try {
      req.body.user = req.user_id
      req.body.listItems = JSON.parse(req.body.listItems)
      req.body.reminders=JSON.parse(req.body.reminders)
      req.body.labels=JSON.parse(req.body.labels)
    
      const note = new Notes(req.body)
      await note.save()
      return res.status(200).send(note)
    
  } catch (e) {

    console.error(e)
    res.status(500).send(e.message)
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
      color:req.body.color,
      pinned:req.body.pinned,
      reminders:req.body.reminders,
      labels:req.body.labels
    })
    res.status(200).send(note)
  } catch (e) {
    console.error(e)
    res.status(500).send(e.message)
  }

}


module.exports.getNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user_id })
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send(error.message)
  }

}


module.exports.getReminder = async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user_id, reminders: { $exists: true, $not: { $size: 0 } } })
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send(error.message)
  }
 
}



module.exports.getListItems = async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user_id, listItems: { $exists: true, $not: { $size: 0 } } })
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send(error)
  }
 
}

module.exports.getArchiveNotes=async(req,res)=>{
  try {
    const notes=await Notes.find({user: req.user_id,archive:true})
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send(error)
  }

}

module.exports.deleteNote = async (req, res) => {
  try {
    await Notes.deleteOne({ _id: req.params.id })
    res.status(200).send("delete successful")
  } catch (e) {
    console.error(e)
    res.status(500).send(error)
  }
}
