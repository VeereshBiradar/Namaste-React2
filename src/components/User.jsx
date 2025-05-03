import { Component } from "react";
import UserClass from "./UserClass";

class User extends Component {

    constructor() {
        super();

      this.state = {
        userInfo: {
            name: 'veeresh',
            location: 'Bangalore',
            avatarurl: 'https://dummy'
        }
      }
    }

    async componentDidMount() {

        const url = await fetch('https://api.github.com/users/VeereshBiradar');
        const data = await url.json();

        //when we call setState then the updating state begins
        this.setState({ userInfo: data})

        setInterval(()=> {
            console.log("setinterval get called");
        }, 1000)

        //it's not reloading it's just changing the component
        //explore more on it
        // you need to take care of every single line of code that's the maturity of senior developer
        //you need to clean up everything 
        //clear interval or clear setTimeout

        //clearInterval
        //when you're creting a mess code, you need to clear that
    }

    render() {
        debugger;
        return (
            <>
                <div>I am User clas</div>
                <UserClass name={'First Child '}/>
                <UserClass name={'Second Child '}/>
                <UserClass name={'Third Child '}/>
            </>
        )
    }
}

export default User;




/* 

constructor (dummy data)
Render (dummy data)
    <Html></Html> (dummy data)
CompoenntDidMount
     <Api call></Api>
     <this.setState></this.setState> ---> state variable data

----update
render (API data)
html loaded with new api data
then it will call
componentDidUpdate

first Mounting cycle happens, then updating

React is so simplified & simple to use , code  etc


//when you're using github api  dont exceed the rate of limit 

//never compare functional compoenent life cycle hook with clas based components

//Roasting others ---english meaning




*/