const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const notesController=require('../controllers/notesController')

router.post('/api/notes/addNote',requireAuthentication,notesController.addNotes)
router.post('/api/notes/edit',requireAuthentication,notesController.updateNotes)
router.get('/api/notes/getNotes',requireAuthentication,notesController.getNotes)
router.get('/api/notes/getReminders',requireAuthentication,notesController.getReminder)
router.get('/api/notes/getListItems',requireAuthentication,notesController.getListItems)
router.get('/api/notes/getArchiveNotes',requireAuthentication,notesController.getArchiveNotes)
router.delete('/api/note/deleteNote/:id',requireAuthentication,notesController.deleteNote);

module.exports=router