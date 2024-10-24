function ErrorPage() {
    return (
        <div className="App">
            <h1>404 ERROR: This page does not exist</h1>
            <p>The page you are looking for currently doens't exist.</p>
            <p>Please navigate to the home page, or watch this video of Car Bidder's creator performing a stunt!</p>
            <video width="520" height="440" controls>
                <source src="Awesome Stunt.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ErrorPage
//Export to index.js