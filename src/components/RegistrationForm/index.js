import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    first: false,
    second: false,
    isfemtpy: true,
    issempty: true,
  }

  submiter = event => {
    event.preventDefault()
    console.log(event)
    const {isSubmitted, first, second, isfemtpy, issempty} = this.state
    if (!first && !second && !isfemtpy && !issempty)
      this.setState(prevState => ({
        isSubmitted: !prevState.isSubmitted,
        first: false,
        second: false,
      }))
    else {
      this.setState({isSubmitted, first: isfemtpy, second: issempty})
    }
  }

  firstBlur = event => {
    if (event.target.value === '') this.setState({first: true, isfemtpy: true})
    else this.setState({first: false, isfemtpy: false})
  }

  secondBlur = event => {
    if (event.target.value === '') this.setState({second: true, issempty: true})
    else this.setState({second: false, issempty: false})
  }

  former = () => {
    const {first, second} = this.state
    return (
      <form className="former" onSubmit={this.submiter}>
        <div className="inputcont">
          <label htmlFor="input1" className="label">
            FIRST NAME
          </label>
          <input
            onBlur={this.firstBlur}
            id="input1"
            className={first ? `inputer reder` : `inputer`}
          />
        </div>
        {first && <p className="danger">Required</p>}
        <div className="inputcont">
          <label htmlFor="input2" className="label">
            LAST NAME
          </label>
          <input
            onBlur={this.secondBlur}
            id="input2"
            className={second ? `inputer reder` : `inputer`}
          />
          {second && <p className="danger">Required</p>}
        </div>
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  submissionSuccess = () => (
    <div className="optional">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button className="submitbtn" onClick={this.submiter} type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="outercont">
        <h1 className="header">Registration</h1>
        <div className="card">
          {isSubmitted ? this.submissionSuccess() : this.former()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
