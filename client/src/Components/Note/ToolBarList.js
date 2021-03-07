import { MdAlarm, MdArchive, MdLabelOutline, MdDelete, MdList } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import {  RiPushpin2Fill } from "react-icons/ri";



export const toolBarList = [

  {
    id: "reminder",
    fName: 'showPopOver',
    text: ' Remind Me',
    component: [<MdAlarm id="reminder" className="icon" />]
  },

  {
    id: 'color',
    fName: 'showPopOver',
    text: ' Change Color',
    component: [<IoIosColorPalette id="color" className="icon" />]
  },

  {
    id: 'archive',
    fName: 'toggleArchive',
    text: 'Archive',
    component: [<MdArchive id="archive" className="icon" />]
  },
  {
    id: 'label',
    fName: 'showPopOver',
    text: 'Add label',
    component: [<MdLabelOutline id="label" className="icon" />]
  },
  {
    id: 'delete',
    fName: 'resetState',
    text: 'Delete',
    component: [<MdDelete id="reminder" className="icon" />]
  },
  {
    id: 'list',
    fName: 'addToList',
    text: 'Add to list',
    component: [<MdList id="list" className="icon" />]
  },
  {
    id: 'pin',
    fName: 'togglePin',
    text: 'Pin note',
    component: [<RiPushpin2Fill id="pin" className="icon"  />]
  }

  
]