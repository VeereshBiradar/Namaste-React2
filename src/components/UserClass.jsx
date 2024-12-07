import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        // const {name, profession, location } = this.props;

        //Never directly update state variable
        return (
            <>
                {/* <h1>Class based component</h1>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increment</button>
                <h2>Count: { count}</h2>
                <div>Name: {name}</div>
                <div>Profession: {profession}</div>
                <div>Location: {location}</div> */}
            </>
        )
    }
}

export default UserClass;