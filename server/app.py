from config import app

@app.route( '/' )
def root_route():
    return 'hey bud we\'re gonna acommplish great things'


if __name__ == '__main__':
    app.run( port = 5555, debug = True )