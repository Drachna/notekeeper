const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const notesController=require('../controllers/notesController')

router.post('/api/notes/addNote',notesController.addNotes)
router.post('/api/notes/edit',requireAuthentication,notesController.updateNotes)
router.get('/api/notes/get_note',notesController.findNotes)
router.delete('/api/note/deleteNote/:id',requireAuthentication,notesController.deleteNote);

module.exports=router