function userForm(req, resp) {
    resp.writeHead(200,{'content-type':'text/html'})
    resp.write(`
            <form action="submit" method="post"> <br> <br>
        Name :  <input type="text" name="Name"> <br> <br>
        Password :  <input type="password" name="Password">
        <button>Submit</button>
    </form>
        `)
    resp.end();
}

module.exports = userForm;