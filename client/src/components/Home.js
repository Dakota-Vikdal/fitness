
function Home({user}) {

    if (user) {
        return (
        <div>
          <h1>Figure out how to organize this homepage</h1>
          <h2>Welcome, {user.username}!</h2>
        </div>)
        } else {
        return <h2>Welcome!</h2>
        }
}

export default Home