import classnames from 'classnames';

interface Props {
  id?: string
  type: string
  name: string
  text?: string
  error?: boolean
  class?: string
  placeholder?: string
  onClick?: any
  onShowPass?: any
  onChange?: any
  value?: any
}

export const FormInput = (props: Props) => {
  return (
    <div
      id={props.id}
      className={classnames('mb-3 mt-3', props.class)}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}  
        className={classnames('form-control', props.error && 'is-invalid')}
        onClick={props.onClick}
        onChange={props.onChange}
      />
      {props.type == 'password' && <img
        id="pass_show"
        className={classnames('eye', props.error && 'is-invalid')}
        src="./img/eye.svg"
        onClick={props.onShowPass} 
      />}
      <div className="invalid-feedback">{props.text}</div>
    </div>
  );
}