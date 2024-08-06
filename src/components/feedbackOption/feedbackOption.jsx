export const FeedbackOption = ({options, onLeavefeedback}) => {
  return (
    <>
    {options.map(option => (
      <button key={option} onClick={() => onLeavefeedback(option)}>{option}</button>
    ))}
  </>
  )
}
