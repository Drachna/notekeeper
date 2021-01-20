const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const notesController=require('../controllers/notesController')

router.post('/api/notes/addNote',requireAuthentication,notesController.addNotes)
router.post('/api/notes/edit',requireAuthentication,notesController.updateNotes)
router.get('/api/notes/get_note',requireAuthentication,notesController.findNotes)
router.delete('/api/note/deleteNote/:id',requireAuthentication,notesController.deleteNote);

module.exports=router