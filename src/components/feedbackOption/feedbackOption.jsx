export const FeedbackOption = ({options, onLeaveFeedback}) => {
  return (
    <>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
    ))}
  </>
  )
}
