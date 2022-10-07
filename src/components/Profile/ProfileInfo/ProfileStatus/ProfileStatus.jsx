import React from 'react'
import s from "../ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    diactivateMode = () => {
        this.setState({
            editMode: false,
        })

        this.props.changeStatus(this.state.status)
    }
    changeStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.state.status) {
            this.setState({
                status: this.state.status
            })

        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode} className={s.aboutMe}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={(e) => this.changeStatusText(e)} autoFocus={true} onBlur={this.diactivateMode}
                               value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus