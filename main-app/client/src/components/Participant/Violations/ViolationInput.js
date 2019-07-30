import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, Chip } from '@material-ui/core'
import clxs from 'clsx'

/*
This base input sets the base style for all inputs and
takes Formik's base props and all the props added to the Field
component and spreads them to the Material-ui's inputbase
 */

const useStyles = makeStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 16,
    textAlign: 'center',
    paddingLeft: theme.spacing(1),
    fontSize: 16,
    width: 'auto',
    // maxWidth: 100,
    margin: theme.spacing(1),
    border: 'none',
    cursor: 'default',
    height: 32,
    display: 'inline-flex',
    outline: 'none',
    boxSizing: 'border-box',
    transition: `background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    alignItems: 'center',
  },
}))

export const ViolationInput = ({ field, name, ...props }) => {
  // const classes = useStyles()
  return (
    <>
      <Chip
        label={name}
        // component="input"
        color="primary"
        {...field}
        {...props}
      />
    </>
  )
}

export default ViolationInput
// {/*<InputBase*/}
// {/*  className={clxs(classes.input, classes.root)}*/}
// {/*  {...field}*/}
// {/*  {...props}*/}
// {/*/>*/}

// import { Chip } from "./ViolationsForm";
// import React from "react";
//
//
// <Chip
//   label={`violations.${index}`}
//   onDelete={isEditing ? () => arrayHelpers.remove(index) : null}
//   color="primary"
//   className={classes.chip}
// />
//

// <style data-jss="" data-meta="MuiChip">
// .MuiChip-root {
//   color: rgba(0, 0, 0, 0.87);
//   border: none;
//   cursor: default;
//   height: 32px;
//   display: inline-flex;
//   outline: none;
//   padding: 0;
//   font-size: 0.9285714285714285rem;
//   box-sizing: border-box;
//   transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   align-items: center;
//   font-family: 'Work Sans', sans-serif;
//   white-space: nowrap;
//   border-radius: 16px;
//   vertical-align: middle;
//   justify-content: center;
//   text-decoration: none;
//   background-color: #e0e0e0;
// }
// .MuiChip-sizeSmall {
//   height: 24px;
// }
// .MuiChip-colorPrimary {
//   color: #fff;
//   background-color: #3f51b5;
// }
// .MuiChip-colorSecondary {
//   color: #fff;
//   background-color: #f50057;
// }
// .MuiChip-clickable {
//   cursor: pointer;
//   -webkit-tap-highlight-color: transparent;
// }
// .MuiChip-clickable:hover, .MuiChip-clickable:focus {
//   background-color: rgb(206, 206, 206);
// }
// .MuiChip-clickable:active {
//   box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);
//   background-color: rgb(197, 197, 197);
// }
// .MuiChip-clickableColorPrimary:hover, .MuiChip-clickableColorPrimary:focus {
//   background-color: rgb(78, 94, 186);
// }
// .MuiChip-clickableColorPrimary:active {
//   background-color: rgb(86, 101, 189);
// }
// .MuiChip-clickableColorSecondary:hover, .MuiChip-clickableColorSecondary:focus {
//   background-color: rgb(245, 20, 100);
// }
// .MuiChip-clickableColorSecondary:active {
//   background-color: rgb(246, 30, 107);
// }
// .MuiChip-deletable:focus {
//   background-color: rgb(206, 206, 206);
// }
// .MuiChip-deletableColorPrimary:focus {
//   background-color: rgb(101, 115, 195);
// }
// .MuiChip-deletableColorSecondary:focus {
//   background-color: rgb(247, 51, 120);
// }
// .MuiChip-outlined {
//   border: 1px solid rgba(0, 0, 0, 0.23);
//   background-color: transparent;
// }
// .MuiChip-clickable.MuiChip-outlined:hover, .MuiChip-clickable.MuiChip-outlined:focus, .MuiChip-deletable.MuiChip-outlined:focus {
//   background-color: rgba(31, 41, 51, 0.08);
// }
// .MuiChip-outlined .MuiChip-avatar {
//   margin-left: -1px;
// }
// .MuiChip-outlinedPrimary {
//   color: #3f51b5;
//   border: 1px solid #3f51b5;
// }
// .MuiChip-clickable.MuiChip-outlinedPrimary:hover, .MuiChip-clickable.MuiChip-outlinedPrimary:focus, .MuiChip-deletable.MuiChip-outlinedPrimary:focus {
//   background-color: rgba(63, 81, 181, 0.08);
// }
// .MuiChip-outlinedSecondary {
//   color: #f50057;
//   border: 1px solid #f50057;
// }
// .MuiChip-clickable.MuiChip-outlinedSecondary:hover, .MuiChip-clickable.MuiChip-outlinedSecondary:focus, .MuiChip-deletable.MuiChip-outlinedSecondary:focus {
//   background-color: rgba(245, 0, 87, 0.08);
// }
// .MuiChip-avatar {
//   color: #616161;
//   width: 32px;
//   height: 32px;
//   font-size: 1.1428571428571428rem;
//   margin-right: -4px;
// }
// .MuiChip-avatarSmall {
//   width: 24px;
//   height: 24px;
//   font-size: 0.8571428571428571rem;
// }
// .MuiChip-avatarColorPrimary {
//   color: #fff;
//   background-color: #303f9f;
// }
// .MuiChip-avatarColorSecondary {
//   color: #fff;
//   background-color: #c51162;
// }
// .MuiChip-avatarChildren {
//   height: 18px;
// }
// .MuiChip-icon {
//   color: #616161;
//   margin-left: 5px;
//   margin-right: -8px;
// }
// .MuiChip-iconSmall {
//   width: 16px;
//   margin-right: -5px;
// }
// .MuiChip-iconColorPrimary {
//   color: inherit;
// }
// .MuiChip-iconColorSecondary {
//   color: inherit;
// }
// .MuiChip-label {
//   cursor: inherit;
//   display: flex;
//   align-items: center;
//   user-select: none;
//   white-space: nowrap;
//   padding-left: 12px;
//   padding-right: 12px;
// }
// .MuiChip-labelSmall {
//   padding-left: 8px;
//   padding-right: 8px;
// }
// .MuiChip-deleteIcon {
//   color: rgba(31, 41, 51, 0.26);
//   cursor: pointer;
//   height: auto;
//   margin: 0 5px 0 -8px;
//   -webkit-tap-highlight-color: transparent;
// }
// .MuiChip-deleteIcon:hover {
//   color: rgba(31, 41, 51, 0.4);
// }
// .MuiChip-deleteIconSmall {
//   height: 16px;
//   margin: 0 1px 0 -9px;
// }
// .MuiChip-deleteIconColorPrimary {
//   color: rgba(255, 255, 255, 0.7);
// }
// .MuiChip-deleteIconColorPrimary:hover, .MuiChip-deleteIconColorPrimary:active {
//   color: #fff;
// }
// .MuiChip-deleteIconColorSecondary {
//   color: rgba(255, 255, 255, 0.7);
// }
// .MuiChip-deleteIconColorSecondary:hover, .MuiChip-deleteIconColorSecondary:active {
//   color: #fff;
// }
// .MuiChip-deleteIconOutlinedColorPrimary {
//   color: rgba(63, 81, 181, 0.7);
// }
// .MuiChip-deleteIconOutlinedColorPrimary:hover, .MuiChip-deleteIconOutlinedColorPrimary:active {
//   color: #3f51b5;
// }
// .MuiChip-deleteIconOutlinedColorSecondary {
//   color: rgba(245, 0, 87, 0.7);
// }
// .MuiChip-deleteIconOutlinedColorSecondary:hover, .MuiChip-deleteIconOutlinedColorSecondary:active {
//   color: #f50057;
// }
// </style>
