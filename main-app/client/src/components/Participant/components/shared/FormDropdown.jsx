import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
// import InputBase from '@material-ui/core/InputBase';
import FormInput from '../../FormElements/FormInput'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

const FormDropdown = ({
  id,
  label,
  field,
  form: { touched, errors },
  ...props
}) => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <FormControl className={classes.margin} component="div">
      <InputLabel htmlFor={id} className={classes.label}>
        {label}
      </InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        input={<FormInput id={id} label={label} field={field} {...props} />}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  )
}
export default FormDropdown
